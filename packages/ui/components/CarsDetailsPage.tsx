import React from "react";
import Image from 'next/image';
import { BtnShadow } from "../modules/Button";
import Link from 'next/link';

type CarData = {
    _id: React.Key | null | undefined;
    title: string;
    pictureDataUrl: string;
    alt: string;
    date: string;
    subtitle: string;
    description: string;
};

type CarsDetailsPageProps = {
    data: CarData[];
};

export function CarsDetailsPage({ data }: CarsDetailsPageProps) {
    console.log(data);
    return (
        <div className="grid justify-center my-4 mx-10 shadow-lg shadow-OceanBlue">
            {
                data?.map((car: CarData) => (
                    <div className="grid justify-center gap-y-3" key={car._id}>
                        <h3 className="text-xl text-center dark:text-white text-midnight capitalize font-monsterratBold">{car.title}</h3>
                        <Image className="dark:text-white text-midnight" src={car.pictureDataUrl}
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
            <BtnShadow><Link href='/'>Back To Home</Link></BtnShadow>
        </div>
    );
}