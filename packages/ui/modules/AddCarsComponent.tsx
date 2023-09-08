import { useState, ChangeEvent, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "../css/toastify.css";

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
    if (status === "unauthenticated") router.replace("/signin");
  }, [status, router]);

  const [cars, setCars] = useState<CarsData>({
    title: "",
    subtitle: "",
    picture: "",
    alt: "",
    date: "",
    description: "",
  });

  const submitHandler = async () => {
    const res = await fetch("/api/addcar", {
      method: "POST",
      body: JSON.stringify({ data: cars }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      toast.success("Car Added");
      router.push("/");
    }
  };

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCars({ ...cars, [name]: value });
  };

  const inputsClass = `
    rounded-lg outline-none px-4 py-1
    focus:shadow-lg focus:shadow-midnight bg-gradient-to-r from-silver via-white to-silver
    font-monsterratMedium focus:shadow-outline focus:scale-110
    transition-all m-2
    `;

  const labelsClass = `
    dark:text-white text-midnight font-monsterratItalic
    `;

  const divsClass = `
    grid xxs:grid-cols-1 md:grid-cols-2 place-items-center py-2
    `;

  return (
    <form
      className="grid my-16 dark:hover:shadow-lg dark:hover:shadow-deepOcean hover:shadow-lg hover:shadow-silver transition-all max-w-[600px] px-24 py-2 rounded-lg xxs:mx-5 md:mx-0"
      encType="multipart/form-data"
    >
      <h3 className="xxs:text-md sm:text-xl justify-self-center dark:text-white text-midnight text- font-monsterratBold mb-4">
        Add Car
      </h3>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="title">
          Brand Name
        </label>
        <input
          className={`capitalize ${inputsClass}`}
          type="text"
          name="title"
          id="title"
          value={cars.title}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="subtitle">
          Car Model
        </label>
        <input
          className={`capitalize ${inputsClass}`}
          type="text"
          name="subtitle"
          id="subtitle"
          value={cars.subtitle}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="description">
          Description
        </label>
        <textarea
          className={`capitalize max-w-[250px] min-h-[70px] max-h-[70px] ${inputsClass}`}
          name="description"
          id="description"
          value={cars.description}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="date">
          Made Date
        </label>
        <input
          className={`capitalize ${inputsClass}`}
          type="text"
          name="date"
          id="date"
          value={cars.date}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="alt">
          Alternative Tag
        </label>
        <input
          className={`capitalize ${inputsClass}`}
          type="text"
          name="alt"
          id="alt"
          value={cars.alt}
          onChange={changeHandler}
          required={true}
        />
      </div>
      <div className={divsClass}>
        <label className={labelsClass} htmlFor="picture">
          Car Picture
        </label>
        <input
          className={inputsClass}
          type="text"
          name="picture"
          id="picture"
          onChange={changeHandler}
        />
      </div>
      <Button
        className="my-5 px-4 py-2 rounded-lg text-white hover:text-midnight dark:hover:text-white bg-oceanBlue font-monsterratBold hover:shadow-md hover:shadow-oceanBlue hover:scale-110 transition-all"
        onClick={submitHandler}
      >
        Submit
      </Button>
      <ToastContainer />
    </form>
  );
}
