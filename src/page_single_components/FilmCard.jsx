// FilmCard.jsx

// Import flags icons
import Flag from 'react-world-flags';

const FilmCard = (props) => {

    const { filmCardProp } = props;
    // round average Movie/TVshow vote from 10 to 5
    const vote = Math.round(filmCardProp.vote_average / 2);

    // RENDER
    return (
        <div className='film-card'>

            {/* poster visible */}
            <img className='film-card-image' src={filmCardProp.poster_path ? `https://image.tmdb.org/t/p/w300/${filmCardProp.poster_path}` : './src/assets/card_image_not_found.png'}
                alt={filmCardProp.title || filmCardProp.name}
            />

            {/* film card on hover */}
            <div className='film-card-info'>
                {/* original title for Movie or TV show */}
                <h3>{filmCardProp.title || filmCardProp.name}</h3>

                {/* italian title for Movie (if different from original title) */}
                {filmCardProp.original_title !== filmCardProp.title && (
                    <h4>{filmCardProp.original_title}</h4>
                )}
                {/* italian title for TV shows (if different from original title) */}
                {filmCardProp.original_name !== filmCardProp.name && (
                    <h4>{filmCardProp.original_name}</h4>
                )}

                {/* language flag */}
                <div>
                    {filmCardProp.original_language === "en" ? (
                        <Flag code="GB" className="flag" />
                    ) : filmCardProp.original_language === "it" ? (
                        <Flag code="IT" className="flag" />
                    ) : filmCardProp.original_language === "es" ? (
                        <Flag code="ES" className="flag" />
                    ) : filmCardProp.original_language === "fr" ? (
                        <Flag code="FR" className="flag" />
                    ) : (
                        <h5>lingua straniera</h5>
                    )}
                </div>

                {/* vote average (5 stars) */}
                <div>
                    <i className={`fas fa-star`} style={{ color: vote >= 1 ? "gold" : "lightgray" }} />
                    <i className={`fas fa-star`} style={{ color: vote >= 2 ? "gold" : "lightgray" }} />
                    <i className={`fas fa-star`} style={{ color: vote >= 3 ? "gold" : "lightgray" }} />
                    <i className={`fas fa-star`} style={{ color: vote >= 4 ? "gold" : "lightgray" }} />
                    <i className={`fas fa-star`} style={{ color: vote >= 5 ? "gold" : "lightgray" }} />
                </div>

            </div>
        </div>
    );
}

export default FilmCard