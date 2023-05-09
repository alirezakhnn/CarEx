import { useState } from "react";
import { DropDown } from "./DropDown";
import '../css/hamburger.css';

export function Hamburger() {
    // this state is for when the hamburger is checked it changes the style of hamburger
    const [drop, setDrop] = useState(false);

    return (
        <div className="lg:hidden mt-2 ml-5 z-50">
            <input type="checkbox" id="Hamburger" onClick={() => setDrop(prev => !prev)} />
            <label htmlFor="Hamburger" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
            {/* it handles when the DropDown should appears or not */}
            <div className={`
            transition-all duration-700 absolute top-[-100%] text-center
            ${drop ? 'grid right-[100%] dark:opacity-[90%] z-50 xxs:right-[95vw] md:right-[87.5vw]'
                    : "absolute opacity-[10%] right-[400vw]"
                }`}>
                <DropDown />
            </div>
        </div>
    );
}