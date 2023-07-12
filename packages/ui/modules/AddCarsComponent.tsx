import { useState, ChangeEvent } from "react";

interface CarsData {
    title: string;
    subtitle: string;
    picture: string | File;
    alt: string;
    date: string;
    description: string;
    icon: string | File;
}

export function AddCarsComponent() {
    const [cars, setCars] = useState<CarsData>({
        title: "",
        subtitle: "",
        picture: "",
        alt: "",
        date: "",
        description: "",
        icon: "",
    });

    const submitHandler = async () => {
        const formData = new FormData();
        formData.append("data", JSON.stringify(cars));
        formData.append("picture", cars.picture);
        formData.append("icon", cars.icon);

        const res = await fetch("/api/brandCars", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        console.log(data);
    };

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === "picture" || name === "icon") {
            setCars({ ...cars, [name]: files?.[0] });
        } else {
            setCars({ ...cars, [name]: value });
        }
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
        <div className="grid place-items-center gap-y-2 mt-1 dark:shadow-lg dark:shadow-oceanBlue shadow-xl shadow-silver max-w-[600px] px-16 py-2 rounded-lg">
            <h3 className="text-xl dark:text-white text-midnight text- font-monsterratBold mb-4">Add Car</h3>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="title">Title</label>
                <input className={inputsClass} type="text" name="title" id="title" value={cars.title} onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="subtitle">Subtitle</label>
                <input className={inputsClass} type="text" name="subtitle" id="subtitle" value={cars.subtitle} onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="description">Description</label>
                <input className={inputsClass} type="text" name="description" id="description" value={cars.description} onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="date">Made Date</label>
                <input className={inputsClass} type="text" name="date" id="date" value={cars.date} onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="alt">Alt</label>
                <input className={inputsClass} type="text" name="alt" id="alt" value={cars.alt} onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="picture">Car Picture</label>
                <input className={inputsClass} type="file" name="picture" id="picture" onChange={changeHandler} />
            </div>
            <div className={divsClass}>
                <label className={labelsClass} htmlFor="icon">Icon</label>
                <input className={inputsClass} type="file" name="icon" id="icon" onChange={changeHandler} />
            </div>
            <button className="my-3 px-4 py-2 rounded-lg text-white bg-oceanBlue font-monsterratBold hover:bg-aboveOcean transition-all" onClick={submitHandler}>
                Submit
            </button>
        </div>
    );
}