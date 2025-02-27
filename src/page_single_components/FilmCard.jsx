// FilmCard.jsx


// RENDER
const FilmCard = (props) => {

    const { filmCardProp } = props;


    // RENDER
    return (
        <div>
            <h3>{filmCardProp.title}</h3>
            <h3>{filmCardProp.original_title}</h3>
            <h3>{filmCardProp.original_language}</h3>
            <h3>{filmCardProp.vote_average}</h3>
        </div>
    );
}

export default FilmCard