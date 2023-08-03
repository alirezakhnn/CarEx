import React from "react";
import Image from 'next/image';
import { BtnShadow } from "../modules/Button";
import Link from 'next/link';
import { SquareLoader } from "../modules/SquareLoader";

type CarData = {
    _id: React.Key | null | undefined;
    title: string;
    picture: string;
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
                <Link className="justify-self-center" href='/'><BtnShadow>Back To Home</BtnShadow></Link>
            </div>
        );
    }
    else return <SquareLoader />
}