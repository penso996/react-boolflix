// HomePage.jsx

// Import functions from React
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Import page_single_components
import FilmCard from "../page_single_components/FilmCard"

export default function HomePage() {

    const { filmData } = useContext(GlobalContext);
    console.log(filmData)


    //RENDER
    return (
        <main>
            {/* film list */}
            {filmData.length === 0 ? (<div><h1>Non ci sono post da mostrare</h1></div>) :
                (filmData.map((film) => (
                    <FilmCard key={film.id} filmCardProp={film} />)))
            }
        </main>
    );
}