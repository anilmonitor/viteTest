import "./SayHello.css";
let SayHello = ({ BgColor, userName, age, sub }) => {
    return (
        <>
            <p style={{ backgroundColor: BgColor }}>
                Hey {userName} how are You !! U are {age} year old
            </p>

            {sub && (
                <ul>
                    {sub.map((single, index) => (
                        <li className="sub" key={index}>
                            {single}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SayHello;
