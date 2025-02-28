// FilmCard.jsx

// Import flags icons
import Flag from 'react-world-flags';

const FilmCard = (props) => {

    const { filmCardProp } = props;


    // RENDER
    return (
        <div>
            {/* poster */}
            <img src={`https://image.tmdb.org/t/p/w300/${filmCardProp.poster_path}`}
                alt={filmCardProp.title || filmCardProp.name} />
            {/* card */}
            <h3>{filmCardProp.title || filmCardProp.name}</h3>
            <h3>{filmCardProp.original_title || filmCardProp.original_name}</h3>
            <h3>
                <h3>
                    {filmCardProp.original_language === "en" ? <Flag code="GB" className='flag' /> :
                        filmCardProp.original_language === "it" ? <Flag code="IT" className='flag' /> :
                            filmCardProp.original_language === "es" ? <Flag code="ES" className='flag' /> :
                                filmCardProp.original_language === "fr" ? <Flag code="FR" className='flag' /> :
                                    "altro"}
                </h3>
            </h3>
            <h3>{filmCardProp.vote_average}</h3>
        </div>
    );
}

export default FilmCard