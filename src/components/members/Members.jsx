import "./Members.css";
import Member from "../member/Member.jsx";

function Members() {
    return (

        <>
            <div className="membersCard">
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/anil.jpeg" branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/sonali.jpeg" branch="CSE"  />


                <Member name="Soni Kumari" age={20} img="https://recstudentportal.com/udaanmembers/profile/aman.jpeg"  branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/alok.jpeg" branch="CSE"  />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/prem.jpeg"  />

                <Member name="Soni Kumari" age={20} img="https://recstudentportal.com/udaanmembers/profile/arpit.jpeg" branch="CSE" />
                <Member name="ANIL  Kumar" age={22} img="https://recstudentportal.com/udaanmembers/profile/ayush.jpeg" branch="CSE" />
             <Member name="Soni Kumari" age={20} img="https://recstudentportal.com/udaanmembers/profile/soni.jpeg" branch="CSE" />
            </div>
        </>
    )
}


export default Members;