// Header.jsx

// Import functions from React
import { useState } from "react";

export default function Header(props) {

    const { setSearchQuery } = props;
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") return;
        setSearchQuery(inputValue);
        setInputValue("");
    };


    // RENDER
    return (
        <header>
            <h1>HEADER</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Cerca..."
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />
            </form>
        </header>
    );
}