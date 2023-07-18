import User, { ICarTimeline } from "../../../models/User";
import connectDB from "../../../utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";
import { DataResponse } from "../addcar";

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
            const filteredCarsTimeline = carsTimeline?.filter((car: ICarTimeline) => car._id.toString() === carsinfo);

            const data: DataResponse[] | undefined = filteredCarsTimeline?.map((car: ICarTimeline) => {
                const pictureBase64 = Buffer.from(car.picture).toString('base64');
                const iconBase64 = Buffer.from(car.icon).toString('base64');

                // Assuming the image is a jpg. Change this according to your actual image type.
                const pictureDataUrl = `data:image/jpg;base64,${pictureBase64}`;
                const iconDataUrl = `data:image/svg+xml;base64,${iconBase64}`;

                const carObject = car.toObject(); // Convert the Mongoose Document to a plain JavaScript object
                const { picture, icon, ...restCar } = carObject; // Destructure the carObject
                return { ...restCar, pictureDataUrl, iconDataUrl };
            });

            res.status(200).json({ status: 'success', data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', message: err });
        }
    }
}