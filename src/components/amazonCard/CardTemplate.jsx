import "./Card.css"
let CardTemplate = ({ heading, about, price, list, obj, features }) => {

    // let listt = list?.map((e) => <li>{e}</li>);





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


            {/* for rendering array */} 
            <div>
                {list?.map((e, index) => <li key={index}>{e}</li>)} 
            </div> 
            {/* Never use index as key above, make a key using uuid */}


            {/* for rendering object  */}
            {obj && (
                <>

                    <ol>


                        <li>{obj.a}</li>
                        <li>{obj.b}</li>
                    </ol>
                </>
            )}


            <p>{features} </p>
        </div>

    </>

}

export default CardTemplate;