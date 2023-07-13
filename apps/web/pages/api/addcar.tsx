import connectDB from "../../utils/connectDB";
import { getSession } from "next-auth/react";
import User from "../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ status: "failed", message: "Error in connecting to DB" });
    }

    const session = await getSession({ req });
    console.log(session)
    if (!session) {
        return res
            .status(401)
            .json({ status: "failed", message: "You are not logged in!" });
    }

    const user = await User.findOne({ email: session.user?.email });
    if (!user) {
        return res
            .status(404)
            .json({ status: "failed", message: "User doesn't exsit!" });
    }

    if (req.method === "POST") {
        const data = req.body.data;
        console.log(data)
        if (!data.title || !data.subtitle || !data.alt || !data.date || !data.description) {
            return res
                .status(422)
                .json({ status: "failed", message: "Please Complete data!" });
        }

        const car = await User.create(data);
        console.log(car);
        res.status(201).json({ status: 'success', message: 'data created', data: car });
    }
}

export default handler;