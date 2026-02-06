let SayHello = ({ BgColor, userName, age }) => {
    return (
        <>
            <p style={{ backgroundColor: BgColor }}>Hey {userName} how are You !! U are {age} year old</p>
        </>
    );
};

export default SayHello;
