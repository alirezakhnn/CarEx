import connectDB from "../../utils/connectDB";
import User from "../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        try {
            await connectDB();
        } catch (err) {
            console.log(err);
            return res
                .status(500)
                .json({ status: "failed", message: "Error in connecting to DB" });
        }

        const session = await getSession({ req });

        if (!session) {
            return res.status(422).json({
                status: "failed",
                message: "You are not Logged in",
            });
        }

        const user = await User.findOne({ email: session.user?.email });
        if (!user) {
            return res
                .status(404)
                .json({ status: "failed", message: "User doesn't exsit!" });
        }

        const data = req.body.data;

        if (!data) {
            return res
                .status(422)
                .json({ status: "failed", message: "Invaild data!" });
        }

        user.carsTimeline?.push(data);
        user.save();

        res.status(201).json({ status: "success", message: "Car Added" });


    } else if (req.method === "GET") {
        try {
            await connectDB();
            const session = await getSession({ req });

            if (!session) {
                return res.status(422).json({
                    status: "failed",
                    message: "You are not Logged in",
                });
            }

            const user = await User.findOne({ email: session.user?.email });
            if (!user) {
                return res
                    .status(404)
                    .json({ status: "failed", message: "User doesn't exist!" });
            }

            const data = user.carsTimeline;

            res.status(200).json({ status: "success", data });
        } catch (err) {
            console.log(err);
            return res
                .status(500)
                .json({ status: "failed", message: "Error in connecting to DB" });
        }
    }
}

export default handler;