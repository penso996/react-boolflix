// DefaultLayout.jsx

// Import functions from React
import { Outlet } from "react-router-dom";
// Import page_main_components
import Header from "../page_main_components/Header";

// Aggiungi props per ricevere setSearchQuery
export default function DefaultLayout({ setSearchQuery }) {
    return (
        <>
            <Header setSearchQuery={setSearchQuery} />
            <Outlet />
        </>
    );
}