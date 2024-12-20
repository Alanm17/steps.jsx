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
      <Steps />
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
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevous}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext} // we are using array funtion inside onclick as we once run the app it sees the alert and directly executes it so when we use callback func array func it does not happen
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
