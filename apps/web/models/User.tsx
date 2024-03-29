import { Schema, model, Model, Document, models } from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
    name?: string;
    lastName?: string;
    carsTimeline?: ICarTimeline[];
    createdAt: Date;
    role?: any;
}

export interface ICarTimeline {
    carsTimeline: any;
    iconDataUrl: any;
    pictureDataUrl: any;
    madeYear: any;
    model: any;
    _id: any;
    toObject(): any;
    map: any;
    title: string;
    subtitle: string;
    picture: string;
    alt: string;
    date: string;
    description: string;
}

const carTimelineSchema = new Schema<ICarTimeline>({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    alt: {
        type: String,
        required: true,
    },
    date: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
});

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: String,
    lastName: String,
    carsTimeline: [carTimelineSchema],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});

const User: Model<IUser> = models.User || model<IUser>("User", userSchema);

export default User;