
import './App.css'
import Anil from "./Anil"
import Footer from "./Footer"
import Aditya from "./aditya"
import Aman from "./Aman"
import Card from "./components/amazonCard/Card";
import Members from "./components/members/Members";
import SayHello from "./components/hello/SayHello";

function App() {

  return (
    <div>
      <Anil />
      <Footer />
      < Aditya />
      <Footer />
      < Aditya />
      <Aman />
      <Members />
      <Card />
          <SayHello BgColor="pink" age={22} userName="ANIL MONITOR" />
      <SayHello BgColor="yellow" age={20} userName="Aman" sub={["DBMS", "DSA", "MATHS", "OOPs", "Professional Skill"]}/>
  

    </div>
  );
}

export default App
