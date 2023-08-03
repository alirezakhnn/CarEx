import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React from "react";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CarsData {
    title: string;
    subtitle: string;
    picture: string | File;
    alt: string;
    date: string;
    description: string;
}

export function AddCarsComponent() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') router.replace('/signin');
    }, [status, router]);

    const [cars, setCars] = useState<CarsData>({
        title: "",
        subtitle: "",
        picture: "",
        alt: "",
        date: "",
        description: ""
    });

    const submitHandler = async () => {
        const res = await fetch("/api/addcar", {
            method: "POST",
            body: JSON.stringify({ data: cars }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        console.log(data);
        if (data.status === 'success') {
            toast.success('Car Added');
            router.push('/');
        }
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCars({ ...cars, [name]: value })
    };

    const inputsClass = `
    dark:bg-gradient-to-r dark:from-white dark:via-white dark:to-silver bg-midnight
    rounded-full py-1 dark:text-midnight text-white
    font-monsterratMedium px-4 transition-all outline-none border-none
    `;

    const labelsClass = `
    dark:text-white text-midnight font-monsterratBold
    `;

    const divsClass = `
    grid gap-y-1
    `;

    return (
        <form className="grid place-items-center gap-y-2 mt-1 dark:shadow-lg dark:shadow-oceanBlue shadow-xl shadow-silver max-w-[600px] px-24 py-2 rounded-lg" encType="multipart/form-data">
            <h3 className="text-xl dark:text-white text-midnight text- font-monsterratBold mb-4">Add Car</h3>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="title">Brand Name</label>
                <input className={`capitalize ${inputsClass}`} type="text"
                    name="title" id="title" value={cars.title}
                    onChange={changeHandler}
                    required={true}
                />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="subtitle">Car Model</label>
                <input className={`capitalize ${inputsClass}`} type="text"
                    name="subtitle" id="subtitle" value={cars.subtitle}
                    onChange={changeHandler}
                    required={true}
                />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="description">Description</label>
                <input className={`capitalize ${inputsClass}`} type="text"
                    name="description" id="description" value={cars.description}
                    onChange={changeHandler}
                    required={true}
                />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="date">Made Date</label>
                <input className={`capitalize ${inputsClass}`} type="text"
                    name="date" id="date" value={cars.date}
                    onChange={changeHandler}
                    required={true}
                />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="alt">Alternative Tag</label>
                <input className={`capitalize ${inputsClass}`} type="text"
                    name="alt" id="alt" value={cars.alt}
                    onChange={changeHandler}
                    required={true}
                />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="picture">Car Picture</label>
                <input className={inputsClass} type="text"
                    name="picture" id="picture"
                    onChange={changeHandler}
                />
            </div>
            <Button className="my-3 px-4 py-2 rounded-lg text-white hover:text-midnight dark:hover:text-white bg-oceanBlue font-monsterratBold hover:shadow-md hover:shadow-oceanBlue hover:scale-110 transition-all" onClick={submitHandler}>
                Submit
            </Button>
            <ToastContainer />
        </form>
    );
}
