import "./Card.css"
let CardTemplate = ({ heading, about, price }) => {
    return <>

        <div className="card">
            <h1>{heading}</h1>
            <p>{about}</p>
            <p>{price}</p>
        </div>

    </>

}

export default CardTemplate;