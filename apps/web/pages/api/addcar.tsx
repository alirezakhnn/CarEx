import connectDB from "../../utils/connectDB";
import User, { ICarTimeline } from "../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

// type Car = {
// toObject(): any | undefined;
// picture: Buffer;
// icon: Buffer;
// };

type DataResponse = {
    pictureDataUrl: string;
    iconDataUrl: string;
} & Omit<ICarTimeline, 'picture' | 'icon'>;

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {

        try {
            await connectDB();
        } catch (err) {
            console.error(err);
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
                .json({ status: "failed", message: "User doesn't exist!" });
        }

        const data: ICarTimeline = req.body.data;

        if (!data) {
            return res
                .status(422)
                .json({ status: "failed", message: "Invalid data!" });
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

            const carsTimeline = user.carsTimeline;
            const data: DataResponse[] | undefined = carsTimeline?.map((car: ICarTimeline) => {
                const pictureBase64 = Buffer.from(car.picture).toString('base64');
                const iconBase64 = Buffer.from(car.icon).toString('base64');

                const pictureDataUrl = `data:image/jpg;base64,${pictureBase64}`;
                const iconDataUrl = `data:image/svg+xml;base64,${iconBase64}`;

                const carObject: any = car.toObject();
                const { picture, icon, ...restCar } = carObject;
                return { ...restCar, pictureDataUrl, iconDataUrl };
            });

            res.status(200).json({ status: "success", data });
        } catch (err) {
            console.error(err);
            return res
                .status(500)
                .json({ status: "failed", message: "Error in connecting to DB" });
        }
    }
}

export default handler;