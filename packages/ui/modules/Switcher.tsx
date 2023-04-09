import '../css/switcher.css';

export function Switcher() {
    return (
        <>
            <input type="checkbox" id="switcher" />
            <label htmlFor="switcher" className="switch bg-gradient-to-b from-oceanBlue to-silver"
            >
                <div className="powersign"></div>
            </label>
        </>
    );
}