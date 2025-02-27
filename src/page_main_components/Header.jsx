// Header.jsx

// Import functions from React
import { useState } from "react";

export default function Header(props) {
    const { setSearchQuery } = props;
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") return;
        setSearchQuery(inputValue);
        setInputValue("");
    };

    return (
        <header>
            <h1>HEADER</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Cerca..."
                />
                <button type="submit">Invia</button>
            </form>
        </header>
    );
}