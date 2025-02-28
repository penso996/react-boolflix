// Header.jsx

// Import functions from React
import { useState } from "react";
import { NavLink } from 'react-router-dom';

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
        <header className="header-background">
            <section className="header-container">

                {/* header-logo */}
                <NavLink to="/">
                    <img className="header-logo" src="src\assets\boolflix_logo.svg" alt="boolflix" />
                </NavLink>

                {/* header-input */}
                <form onSubmit={handleSubmit}>
                    <input
                        className="header-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Cerca un Film o serie TV..."
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit(e);
                            }
                        }}
                    />
                </form>

            </section>
        </header>
    );
}