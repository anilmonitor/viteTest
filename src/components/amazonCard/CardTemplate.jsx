import "./Card.css"
let CardTemplate = ({ heading, about, price , list}) => {
    return <>

        <div className="card">
            <h1>{heading}</h1>
            <p>{about}</p>
            <p>{price}</p>
            <p>{list}</p>
        </div>

    </>

}

export default CardTemplate;