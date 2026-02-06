import "./Card.css"
let CardTemplate = ({ heading, about, price, list, obj }) => {

    //    let style =  {   backgroundColor: price > 30000 ? "green" color: "white":  "" };

    let style = {
        backgroundColor: price > 30000 ? "green" : "",
        color: price > 30000 ? "white" : ""
    };


    return <>


        <div className="card" >
            <h1>{heading}</h1>
            <p>{about}</p>
            <p>{price}</p>
            {/* { price > 30000 && <p>5% discount</p>} */}
            {price > 30000 ? <p style={style}>5% discount</p> : <a href="#">Get discount</a>}


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