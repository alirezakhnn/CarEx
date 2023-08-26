import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import '../css/React_vertical_timeline.css';

import { BtnRotator } from '../modules/Button';
import Button from '@mui/material/Button';

// import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

import { CarIcon } from './Icons';

import AddIcon from '@mui/icons-material/Add';

import { useSession } from 'next-auth/react';
import { useState, useEffect, CSSProperties } from 'react';
import React from 'react';
import { SquareLoader } from './SquareLoader';
import Link from 'next/link';

interface CarData {
    _id: string;
    date: string;
    icon?: any;
    picture: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
    id: string;
    iconStyle?: CSSProperties | undefined;
};


export const TimeLine = () => {
    const { status } = useSession();
    const [data, setData] = useState<CarData[] | []>([]);
    useEffect(() => {
        if (status === 'authenticated') {
            fetch('api/addcar')
                .then(res => res.json())
                .then(data => setData(data.data));
        }
    }, [status]);

    const iconstyle = {
        background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3'
    };
    return (
        <>
            {
                status === "authenticated" && data ? (

                    <VerticalTimeline>
                        {data.map(element => (
                            <VerticalTimelineElement
                                key={element._id}
                                className="vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white"
                                date={element.date}
                                iconStyle={iconstyle}
                                icon={<CarIcon icon={element.title} />}
                            >
                                {element.picture ? (
                                    <img src={element.picture}
                                        alt={element.alt}
                                        className="opacity-[85%] ml-8 rounded-xl"
                                        width={400}
                                        height={400}
                                    />
                                ) : <SquareLoader />}
                                <h3 className="vertical-timeline-element-title font-bold font-monsterratBold capitalize">{element.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle font-monsterratItalic text-oceanBlue">{element.subtitle}</h4>
                                <p className="font-monsterratMedium"
                                >{element.description}</p>
                                <BtnRotator
                                    href={`cars-info/${element._id}`}
                                    className='mt-6 ml-4'
                                >
                                    More
                                </BtnRotator>
                            </VerticalTimelineElement>
                        ))}
                        <div className="flex justify-center">
                            <Link href="/add-car">
                                <Button
                                    className="bg-gradient-to-r from-oceanBlue to-deepOcean rounded-full shadow-xl shadow-deepOcean p-5 hover:shadow-lg hover:shadow-deepOcean hover:scale-110 transition-all text-white"
                                    variant="contained"
                                >
                                    <AddIcon />
                                </Button>
                            </Link>
                        </div>
                    </VerticalTimeline>
                ) : <SquareLoader />
            }
        </>
    );
}