import "./Members.css";


function Members({name, age = 100, img ,branch="ECE", gender, email}) {
    return (
        <div className="members-section">
            <div className="member-card">
                <img src={img} alt="Aman Sharma" className="member-img" />

                <h3>{name}</h3>
                <p className="role"> Age: {age}</p>
                 <p className="role"> Gender: {gender}</p>

                   <p className="role"> Email: {email}</p>
        


                <p className="sub-role">{branch} • Ramgarh Engineering College</p>

                <div className="social-icons">
                    <a href="mailto:aman@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>

                    <a href="tel:+919876543210">
                        <i className="fas fa-phone"></i>
                    </a>

                    <a href="https://github.com/" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Members;
