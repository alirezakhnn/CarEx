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


const timelineElements = [
    {
        id: 1,
        title: 'Porsche',
        subtitle: '918 spyder',
        picture: '/images/TimeLinePics/Porsche.jpg',
        alt: 'porsche918',
        date: '2014-15',
        description: 'The Porsche 918 Spyder is a hybrid hypercar with impressive performance, cutting-edge technology, and limited production.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: <Porsche />,
    },
    {
        id: 2,
        title: 'BMW',
        subtitle: 'futuristic',
        picture: '/images/TimeLinePics/BMW.jpg',
        alt: 'bMWfutureCar',
        date: 'coming soon',
        description: 'BMW is a German luxury automobile manufacturer known for producing high-performance cars with elegant designs and advanced technology.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: <BMW />,
    },
    {
        id: 3,
        title: 'Benz',
        subtitle: 'Amg',
        picture: '/images/TimeLinePics/Benz.jpg',
        alt: 'BenzAMG',
        date: '2019 - 2020',
        description: 'Benz AMG is the high-performance division of Mercedes-Benz, specializing in creating powerful and exhilarating sports cars and luxury vehicles.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: <Benz />,
    },
    {
        id: 4,
        title: 'Audi',
        subtitle: 'R8',
        picture: '/images/TimeLinePics/Audi.jpg',
        alt: 'AudiR8',
        date: '2017 - 2018',
        description: 'The Audi R8 is a high-performance sports car known for its sleek design, powerful performance, and cutting-edge technology.',
        iconStyle: { background: 'black', color: '#fff', boxShadow: '0 0 20px #116AE3' },
        icon: <Audi />,
    },

];

export const TimeLine = () => {

    return (

        <VerticalTimeline>
            {timelineElements.map((element) => (
                <VerticalTimelineElement
                    key={element.id}
                    className="vertical-timeline-element vertical-timeline-element--work text-midnight dark:text-white"
                    date={element.date}
                    iconStyle={element.iconStyle}
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
                        href={`brand_cars/${element.id}`}
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
    );
}