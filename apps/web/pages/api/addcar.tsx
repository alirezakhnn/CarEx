import connectDB from "../../utils/connectDB";
import User, { ICarTimeline } from "../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export type DataResponse = {
    pictureDataUrl: string;
    iconDataUrl: string;
} & Omit<ICarTimeline, 'picture'>;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        await connectDB();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ status: 'failed', message: 'Error connecting to DB' });
    }

    const session = await getSession({ req });

    if (!session) {
        return res.status(422).json({
            status: 'failed',
            message: 'You are not logged in',
        });
    }

    const user = await User.findOne({ email: session.user?.email });
    if (!user) {
        return res.status(404).json({ status: 'failed', message: "User doesn't exist" });
    }
    if (req.method === 'POST') {

        const data: ICarTimeline = req.body.data;

        if (!data) {
            return res.status(422).json({ status: 'failed', message: 'Invalid data' });
        }

        user.carsTimeline?.push(data);
        await user.save();

        res.status(201).json({ status: 'success', message: 'Car added' });
    } else if (req.method === "GET") {


        const user = await User.findOne({ email: session.user?.email });
        if (!user) {
            return res
                .status(404)
                .json({ status: "failed", message: "User doesn't exist" });
        }

        const data = user.carsTimeline;
        if (!data) {
            return res
                .status(404)
                .json({ status: 'failed', message: "data is not available!" });
        }

        res.status(200).json({ status: "success", data });

    }
}

export default handler;
