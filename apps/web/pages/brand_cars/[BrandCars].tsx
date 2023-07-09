import { useRouter } from "next/router";

const Cars = () => {
    const router = useRouter();
    const { BrandCars } = router.query;

    return (
        <p className="ml-20 text-white">{BrandCars}</p>
    );
};


export default Cars;