import connectDB from "../../../utils/connectDB";
import User from "../../../models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
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
      message: "no user exists!",
    });
  }
  console.log(user.carsTimeline);
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
    const { carId } = req.query;
    try {
      await User.deleteOne({ _id: carId });
      User.save();
      res.status(200).json({ status: "success", message: "data deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in deleting data!",
      });
    }
  }
}
