import { useState } from "react";
import { DropDown } from "./DropDown";

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
            <style>{`
                #Hamburger {
                    display: none;
                }

                .toggle {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition-duration: .5s;
                }

                .bars {
                    width: 100%;
                    height: 4px;
                    background-color: #116ae3;
                    border-radius: 4px;
                }

                #bar2 {
                    transition-duration: .8s;
                    margin-right: 1rem;
                    width:75%;
                }

                #bar1,#bar3 {
                    width: 70%;
                }

                #Hamburger:checked + .toggle .bars {
                    position: absolute;
                    transition-duration: .5s;
                }

                #Hamburger:checked + .toggle #bar2 {
                    transform: scaleX(0);
                    transition-duration: .5s;
                }

                #Hamburger:checked + .toggle #bar1 {
                    width: 100%;
                    transform: rotate(45deg);
                    transition-duration: .5s;
                }

                #Hamburger:checked + .toggle #bar3 {
                    width: 100%;
                    transform: rotate(-45deg);
                    transition-duration: .5s;
                }

                #Hamburger:checked + .toggle {
                    transition-duration: .5s;
                    transform: rotate(180deg);
                }
                @media screen and (max-width: 768px) {
                    .bars {
                        height: 2.5px;
                    }
                    #bar1, #bar3 {
                        width:50%;
                    }
                    #bar2 {
                        width:55%;
                    }
                    #Hamburger:checked + .toggle #bar1 {
                        width: 70%;
                    }
                    #Hamburger:checked + .toggle #bar3 {
                        width: 70%;
                    }
                }
            `}</style>
        </>
    );
}