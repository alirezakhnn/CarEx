import connectDB from "../../../utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import User, { ICarTimeline } from "../../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: 'failed', message: 'unable to connect to the database!' });
    }

    if (req.method === "GET") {
        const { carsinfo } = req.query;

        try {
            const user = await User.findOne({ 'carsTimeline._id': carsinfo });

            if (!user) {
                return res.status(404).json({ status: 'failed', message: "No user found with this ID!" });
            }

            const carsTimeline = user.carsTimeline;
            const data = carsTimeline?.filter((car: ICarTimeline) => car._id.toString() === carsinfo);

            if (!data) {
                return res.status(404).json({ status: 'failed', message: 'invalid data!' })
            }

            res.status(200).json({ status: 'success', data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', message: err });
        }
    }
}