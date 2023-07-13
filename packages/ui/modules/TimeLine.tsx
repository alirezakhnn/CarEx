import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import '../css/React_vertical_timeline.css';

import { BtnRotator } from '../modules/Button';

// import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

import { Porsche, BMW, Benz, Audi } from './Icons';

import AddIcon from '@mui/icons-material/Add';

import { useSession } from 'next-auth/react';
import { useState, useEffect, CSSProperties } from 'react';

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
    // iconStyle?: CSSProperties | undefined;
};

export const TimeLine = () => {
    const { status } = useSession();
    const [data, setData] = useState<CarData[] | []>([]);
    useEffect(() => {
        if (status === 'authenticated') fetch('api/addcar')
            .then(res => res.json())
            .then(data => setData(data.data));
    }, [status]);
    const iconstyle = `
    background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3
    `;
    if (data) return (
        <>
            {
                status === "authenticated" ? (

                    <VerticalTimeline>
                        {data.map(element => (
                            <VerticalTimelineElement
                                key={element._id}
                                className="vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white"
                                date={element.date}
                                // iconStyle={iconstyle}
                                icon={element.icon}
                            >
                                <img src={element.picture}
                                    alt={element.alt}
                                    className="opacity-[85%] ml-8 rounded-xl"
                                    width={400}
                                    height={400}
                                />
                                <h3 className="vertical-timeline-element-title font-bold font-monsterratBold">{element.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle font-monsterratItalic text-oceanBlue">{element.subtitle}</h4>
                                <p className="font-monsterratMedium"
                                >{element.description}</p>
                                <BtnRotator
                                    href='#'
                                    className='mt-6 ml-4'
                                >
                                    More
                                </BtnRotator>
                            </VerticalTimelineElement>
                        ))}
                        <div className="flex justify-center">
                            <BtnRotator
                                href="/add-car"
                                className=""
                            >
                                <AddIcon />
                            </BtnRotator>
                        </div>
                    </VerticalTimeline>
                ) : (<p
                    className="dark:text-white text-midnight text-xl font-monsterratBold"
                >
                    Loading...
                </p>
                )
            }
        </>
    );
}