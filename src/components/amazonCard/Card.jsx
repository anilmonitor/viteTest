import CardTemplate from "./CardTemplate";
// import { useEffect } from "react";

let Card = () => {
    let ar = ["Anil", "Rahul"];
    let features = [<li key={1}>Good</li>, <li key={2}>Recomended</li>]
    let objectPass = { a: "I am RAJ", b: "I love ANKIT MANDAL" };
    return (
        <>
            <CardTemplate
                heading="Realme X7 max"
                price={30000}
                about="I am Card "
                obj={objectPass}
                features={features}
            />
            <CardTemplate
                heading="Laptop"
                price={59450}
                about="I am laptop "
                list={ar}
            />

            <CardTemplate
                heading="IQOO 9"
                price={75400}
                about="This is IQOO new 7 phone and this phone is belong to Ranjeet"
                list={ar}
            />
        </>
    );
};

export default Card;
