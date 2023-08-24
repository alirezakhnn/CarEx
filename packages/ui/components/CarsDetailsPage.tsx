import React from "react";
import Image from 'next/image';
import { BtnShadow } from "../modules/Button";
import Link from 'next/link';
import { SquareLoader } from "../modules/SquareLoader";
import { useRouter } from 'next/router';

type CarData = {
    picture: string;
    _id?: any;
    title: string;
    pictureDataUrl: string;
    alt: string;
    date: string;
    subtitle: string;
    description: string;
};

type CarsDetailsPageProps = {
    data: CarData[];
    _id?: any;
};

export function CarsDetailsPage({ data }: CarsDetailsPageProps) {
    const router = useRouter();
    const deleteHandler = async () => {
        const res = await fetch(`api/delete/${data._id}`, {
            method: 'DELETE'
        });
        const newRes = await res.json();
        if (newRes.status === 'success') router.replace('/');
    }

    if (data) {
        return (
            <div className="grid justify-center my-4 mx-10">
                {
                    data?.map((car: CarData) => (
                        <div className="grid justify-center gap-y-3" key={car._id}>
                            <h3 className="text-xl text-center dark:text-white text-midnight capitalize font-monsterratBold">{car.title}</h3>
                            <Image className="dark:text-white text-midnight" src={car.picture}
                                width={600} height={360}
                                alt={car.alt}
                            />
                            <div className="flex justify-around">
                                <h5 className="dark:text-white text-midnight">Model: &nbsp;<span className="capitalize text-aboveOcean font-bold">{car.subtitle}</span></h5>
                                <p className="dark:text-white text-midnight">Made: &nbsp;<span className="font-monsterratItalic text-oceanBlue">{car.date}</span></p>
                            </div>
                            <p className="font-bold dark:text-white text-midnight my-5 max-w-[600px]">Description: &nbsp;<span className="font-monsterratItalic text-aboveOcean">{car.description}</span></p>
                        </div>
                    ))
                }
                <div className="grid grid-cols-2 gap-x-6">
                    <BtnShadow className="bg-oceanBlue hover:shadow-md hover:shadow-oceanBlue" href='/'>Back To Home</BtnShadow>
                    <BtnShadow color="warning" variant="contained" href="/" onClick={deleteHandler}>Delete</BtnShadow>
                </div>
            </div>
        );
    }
    else return <SquareLoader />
}