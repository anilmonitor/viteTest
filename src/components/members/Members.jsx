import "./Members.css";
import Member from "../member/Member.jsx";



function Members() {
    return (

        <>
            <div className="membersCard">

                <Member name="ANIL  Kumar" email="anilarangi6@gmail.com" gender="female" age={22} img="https://recstudentportal.com/udaanmembers/profile/anil.jpeg" branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/sonali.jpeg" branch="CSE" />

                <Member name="Soni Kumari" age={20} img="https://recstudentportal.com/udaanmembers/profile/aman.jpeg" branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/alok.jpeg" branch="CSE" />

                <Member name="Ankit  Mandal" age={21} img="src/assets/mandal.jpg" branch="CSE" gender="Male" email="bm@gmail.com" />


                <Member name="Soni Kumari" age={20} img="https://recstudentportal.com/udaanmembers/profile/soni.jpeg" branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/prem.jpeg" />

                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/ayush.jpeg" branch="CSE" />



            </div>
        </>
    )
}


export default Members;





























// import "./Members.css";
// import Member from "../member/Member.jsx";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function Members() {
//     const [users, setUsers] = useState([]);

//     async function ranFact() {
//         let url = "https://dummyjson.com/users";
//         try {
//             let res = await axios.get(url);
//             setUsers(res.data.users); // 👈 state update
//         } catch (error) {
//             console.log("Something went wrong!!", error);
//         }
//     }

//     useEffect(() => {
//         ranFact();
//     }, []);

//     return (
//         <>
//             <div className="membersCard">
//                 {users.map((user) => (
//                     <Member
//                         key={user.id}
//                         name={`${user.firstName} ${user.lastName}`}
//                         age={user.age}
//                         img={user.image}
//                         branch="CSE"
//                         gender={user.gender}
//                         email={user.email}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Members;
