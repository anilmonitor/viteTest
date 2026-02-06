
import CardTemplate from "./CardTemplate";


let Card = () => {
let ar = ["Anil", "Rahul"];
    return <>


        <CardTemplate heading="Realme X7 max" price={30000} about="I am Card " list={ar}/>
        <CardTemplate heading="Laptop" price={59450} about="I am laptop "  list={ar}/>

  <CardTemplate heading="IQOO 9" price={75400} about="This is IQOO new 7 phone and this phone is belong to Ranjeet"  list={ar}/>

    </>

}

export default Card;