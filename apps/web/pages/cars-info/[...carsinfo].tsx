import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CarsDetailsPage } from 'ui';

function Index() {
    const [data, setData] = useState(null)
    const router = useRouter();
    const {
        query: { carsinfo },
        isReady
    } = router;

    useEffect(() => {
        if (isReady) fetch(`/api/cars-info/${carsinfo}`)
            .then(res => res.json())
            .then(data => setData(data.data));
    }, [isReady, carsinfo])
    if (data) return <CarsDetailsPage data={data} />
}

export default Index;