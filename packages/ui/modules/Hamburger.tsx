import { useState } from "react";
import { DropDown } from "./DropDown";
import '../css/hamburger.css';

export function Hamburger() {
    const [drop, setDrop] = useState(false);
    return (
        <>
            <div className="lg:hidden mt-2 ml-5">
                <input type="checkbox" id="Hamburger" onClick={() => setDrop(prev => !prev)} />
                <label htmlFor="Hamburger" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
                <div className={`${drop ? 'grid' : 'hidden'}`}>
                    <DropDown />
                </div>
            </div>
        </>
    );
}