import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../utils/connectDB';
import User from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'failed', message: 'unable to connect to database!' });
        return;
    }
    if (req.method === "POST") {
        const data = await req.body.data;
        if (!data.name || !data.lastName || !data.email) {
            res.status(400).json({ status: 'failed', message: 'invalid data!' });
            return;
        }
        try {
            const customer = await User.create(data);
            res.status(201).json({ status: 'success', message: 'data created', data: customer })
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', message: 'unable to store data into database!' })
            return;
        }

    }
}