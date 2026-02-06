import "./Card.css"
let CardTemplate = ({ heading, about, price, list, obj }) => {

    // let singleItem = list.map((single) => <li>{single}</li>);

    return <>

        <div className="card">
            <h1>{heading}</h1>
            <p>{about}</p>
            <p>{price}</p>

            {/* for rendering array  */}
            {list && (
                <ul>
                    {list.map((single, index) => (
                        <li key={index}>{single}</li>
                    ))}
                </ul>
            )}


{/* for rendering object  */}

            {obj && (
                <>

                    <ol>


                        <li>{obj.a}</li>
                        <li>{obj.b}</li>
                    </ol>
                </>
            )}

        </div>

    </>

}

export default CardTemplate;