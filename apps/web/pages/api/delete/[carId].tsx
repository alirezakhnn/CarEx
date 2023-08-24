import connectDB from "../../../utils/connectDB";
import User, { ICarTimeline, IUser } from "../../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(404).json({
      status: "failed",
      message: "User not found",
    });
  }
  const user = await User.findOne({ email: session.user?.email });
  if (!user) {
    return res.status(404).json({
      status: "failed",
      message: "No user exists!",
    });
  }

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "Unable to connect to the database!",
    });
  }

  if (req.method === "DELETE") {
    try {
      const { carId } = req.query;
      let cars = user.carsTimeline;
      const specificCar = cars?.filter(car => car._id.toString() === carId);

      if (!specificCar || specificCar.length === 0) {
        res.status(404).json({
          status: "failed",
          message: "Car not found!",
        });
      } else {
        cars = cars?.filter(car => car._id.toString() !== specificCar[0]._id.toString());
        user.carsTimeline = cars;
        await user.save();

        res.status(200).json({
          status: "success",
          message: "Data deleted successfully",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in deleting data!",
      });
    }
  }
}