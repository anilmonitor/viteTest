let name = "MR ANIL"

function hello() {
    console.log("Hello");
}

function welcome() {
    console.log(`Hello ${name} Welcome!!`);
}

function handleHover(){
    console.log("You hover paragraph");
}

function handleDoubleClick(){
    console.log("You double click me!!");

}
export default function Event() {
    return (
        <div className="cont" style={{color: "red"}}>
            <button onClick={hello}>Click me !!</button>
            <p onClick={welcome} style={{ color: "white" }}>Click me to Greet</p>

            <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam.</p>
            <button onDoubleClick={handleDoubleClick}>Double click</button>
        </div>
    )
};


// 🖱️ Mouse Events
// onClick – Jab element par single click hota hai
// onDoubleClick – Jab element par double click hota hai
// onMouseDown – Jab mouse button press hota hai
// onMouseUp – Jab mouse button release hota hai
// onMouseEnter – Jab mouse element ke andar aata hai
// onMouseLeave – Jab mouse element se bahar jata hai
// onMouseMove – Jab mouse element ke upar move karta hai
// onMouseOver – Jab mouse element ya uske child par aata hai
// onMouseOut – Jab mouse element ya uske child se bahar jata hai
// onContextMenu – Jab right-click hota hai


// ⌨️ Keyboard Events
// onKeyDown – Jab key press hoti hai
// onKeyUp – Jab key release hoti hai
// onKeyPress – Jab key press detect hoti hai (deprecated but still seen)











