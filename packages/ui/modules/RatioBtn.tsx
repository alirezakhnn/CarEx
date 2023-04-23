import '../css/RatioBtn.css';

export function RationBtn() {
    return (
        <div className="radio-input mt-5">
            <label className="label">
                <input type="radio" name="radio" checked />
                <span className="check"></span>
            </label>
            <label className="label">
                <input type="radio" name="radio" />
                <span className="check"></span>
            </label>

            <label className="label">
                <input type="radio" name="radio" />
                <span className="check"></span>
            </label>
        </div>
    );
}