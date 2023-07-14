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
    title: string;
    subtitle: string;
    picture: Buffer;
    alt: string;
    date: string;
    description: string;
    icon: Buffer;
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
        type: Buffer,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: Buffer,
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