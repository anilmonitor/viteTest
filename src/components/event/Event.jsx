let name = "MR ANIL"

function hello() {
    console.log("Hello");
}

function welcome() {
    console.log(`Hello ${name} Welcome!!`);
}

function handleHover() {
    console.log("You hover paragraph");
}

function handleDoubleClick() {
    console.log("You double click me!!");

}

function handleKeyDown(e){
    console.log("Pressed key:", e.key);
};


export default function Event() {
    return (
        <div className="cont" style={{ color: "red" }}>
            <button onClick={hello}>Click me !!</button>
            <p onClick={welcome} style={{ color: "white" }}>Click me to Greet</p>

            <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam.</p>
            <button onDoubleClick={handleDoubleClick}>Double click</button>

            <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Type something..."
            />
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


// 📝 Form Events
// onChange – Jab input ka value change hota hai
// onInput – Jab input field me typing hoti hai
// onSubmit – Jab form submit hota hai
// onFocus – Jab input focus me aata hai
// onBlur – Jab input se focus hat jata hai
// onInvalid – Jab form validation fail hoti hai
// onReset – Jab form reset hota hai

// 📦 Clipboard Events
// onCopy – Jab text copy hota hai
// onCut – Jab text cut hota hai
// onPaste – Jab text paste hota hai




// 🎯 Drag & Drop Events
// onDrag – Jab element drag ho raha ho
// onDragStart – Jab drag start hota hai
// onDragEnd – Jab drag khatam hota hai
// onDragEnter – Jab dragged element target me enter karta hai
// onDragLeave – Jab dragged element target se bahar jata hai
// onDragOver – Jab dragged element target ke upar ho
// onDrop – Jab element drop hota hai




// 📱 Touch Events (Mobile)
// onTouchStart – Jab finger screen ko touch karti hai
// onTouchMove – Jab finger move karti hai
// onTouchEnd – Jab finger hata di jati hai
// onTouchCancel – Jab touch interrupt ho jaye


// 🎥 Media Events
// onPlay – Jab media play hota hai
// onPause – Jab media pause hota hai
// onEnded – Jab media end ho jata hai
// onVolumeChange – Jab volume change hota hai
// onTimeUpdate – Jab media ka current time change hota hai


// 🖼️ Image Events
// onLoad – Jab image load ho jaye
// onError – Jab image load fail ho jaye


// 🪟 Window / UI Events
// onScroll – Jab scroll hota hai
// onResize – Jab window resize hoti hai
// onLoad – Jab page fully load ho jaye

