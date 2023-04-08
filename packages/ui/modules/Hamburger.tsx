
export function Hamburger({ className }: any) {
    return (
        <>
            <div className={className}>
                <input type="checkbox" id="Hamburger" />
                <label htmlFor="Hamburger" className="toggle">
                    <div className="bars" id="bar1"></div>
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                </label>
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
            `}</style>
        </>
    );
}