import '../css/SquareLoader.css';
import React from 'react';

export const SquareLoader = () => {
    return (
        <div className="loader mt-[10%] z-999">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
        </div>
    );
};