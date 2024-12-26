import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={"to apply"}></StepMessage>
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1); // always use const with state
  // const [testt, test] = useState({ name: "Muhammad" });
  const [isOpen, setisOpen] = useState(true); // so as we can see we can only change our main variable with the another variable being used to update as useState has 2 it rerenders our components when state changes as it remembers data between renders
  // console.log(array);
  function handlePrevous() {
    if (step > 1) setStep((s) => s - 1); // it is always good to use call back when updating the current state
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  // when we have two Components we have to give div
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setisOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onclick={handlePrevous}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onclick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function Button({ bgColor, color, onclick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onclick} // we are using array funtion inside onclick as we once run the app it sees the alert and directly executes it so when we use callback func array func it does not happen
    >
      {children}
    </button>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
// challange
// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);
//   const date = new Date("June 21 2027");
//   date.setDate(date.getDate() + count);

//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((c) => c - 1)}>-</button>
//         <span>Step:{step}</span>
//         <button onClick={() => setStep((c) => c + 1)}>+</button>
//       </div>
//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count:{count}</span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }
