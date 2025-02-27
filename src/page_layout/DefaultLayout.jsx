// DefaultLayout.jsx

// Import functions from React
import { Outlet } from "react-router-dom";
// Import page_main_components
import Header from "../page_main_components/Header";


// RENDER
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}