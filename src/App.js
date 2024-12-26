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

///challenge
// import { useState } from "react";
// import "./styles.css";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// export default function App() {
//   const [curOpen, setCurOpen] = useState(1);
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   const [curOpen, setCurOpen] = useState(null);
//   return (
//     <div className="accordion">
//       {data.map((el, i) => (
//         <AccordionItem
//           curOpen={curOpen}
//           onOpen={setCurOpen}
//           title={el.title}
//           num={i}
//           key={el.title}
//         >
//           {" "}
//           {el.text}
//         </AccordionItem>
//       ))}
//       <AccordionItem
//         curOpen={curOpen}
//         onOpen={setCurOpen}
//         title="Test - 1"
//         num={22}
//         key="test-1"
//       >
//         <p>Allow react developers to:</p>
//         <ul>
//           <li>Break up UI into components </li>
//           <li>Get a job</li>
//           <li>Get desired salary</li>
//         </ul>
//       </AccordionItem>
//     </div>
//   );
// }

// function AccordionItem({ num, title, curOpen, onOpen, children }) {
//   const isOpen = num === curOpen;
//   function handleToggle() {
//     onOpen(isOpen ? null : num);
//   }

//   return (
//     <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
//       <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
//       <p className="title">{title}</p>
//       <p className="icon">{isOpen ? "-" : "+"}</p>

//       {isOpen && <div className="content-box">{children}</div>}
//     </div>
//   );
// }
