// HomePage.jsx

// Import functions from React
import { useContext } from "react";

// Import context
import GlobalContext from "../context/GlobalContext";
// Import page_single_components
import FilmCard from "../page_single_components/FilmCard";

export default function HomePage() {

    const { filmData, tvData } = useContext(GlobalContext);


    // RENDER
    return (
        <main>

            <h1>FILM</h1>
            <section className="movies-section">
                {/* film list */}
                {filmData.length === 0 ? (<div><h1>Non ci sono film da mostrare</h1></div>) :
                    (filmData.map((film) => (
                        <FilmCard key={film.id} filmCardProp={film} />))
                    )}
            </section>

            <h1>SERIE TV</h1>
            <section className="movies-section">
                {/* tv series list */}
                {tvData.length === 0 ? (<div><h1>Non ci sono serie TV da mostrare</h1></div>) :
                    (tvData.map((tv) => (
                        <FilmCard key={tv.id} filmCardProp={tv} />))
                    )}
            </section>
        </main>
    );
}