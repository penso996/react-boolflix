// FilmCard.jsx


// RENDER
const FilmCard = (props) => {

    const { filmCardProp } = props;


    // RENDER
    return (
        <div>
            <h3>{filmCardProp.title}</h3>
        </div>
    );
}

export default FilmCard