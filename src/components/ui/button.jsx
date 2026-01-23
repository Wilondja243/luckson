export default function Button({ disabled, text }) {
    return (
        <button disabled={disabled} className="btn">
            {text}
        </button>
    );
}
