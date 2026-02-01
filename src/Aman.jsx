import "./Aman.css";
import amanImg from "./assets/aman.jpg";

function AMAN() {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <img src={amanImg} alt="Aman profile" className="profile-img" />

        <h1>Aman Sharma</h1>
        <p className="role">CSE Student • Mentor</p>

        <p className="bio">
          My name is Aman Sharma. I am currently pursuing my B.Tech degree
          from Ramgarh Engineering College. My branch is CSE and my hobby
          is singing.
        </p>

        <div className="social-links">
          <a href="https://instagram.com/" target="_blank">Instagram</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://facebook.com/" target="_blank">Facebook</a>
        </div>
      </div>
    </div>
  );
}

export default AMAN;
