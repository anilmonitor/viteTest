import { useState } from "react";

function USEState() {
  let [Click, setClick] = useState([
    {
      name: "Anil",
      age: 23,
    },

    {
      name: "Rahul  Kumar",
      age: 24,
    },
  ]);

  return (
    <div className="cont">
      <button
        onClick={() => {
          const updated = Click.map((person, index) =>
            index === 1 ? { ...person, name: "Someone" } : person
          );
          setClick(updated);
        }}

      >

        Click me  </button>

      <div className="contt">
        {Click.map((e, index) => {
          return (
            <div key={index}>
              <p style={{ background: "white" }}>
                {e.name} {e.age}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default USEState;
