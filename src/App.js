import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
        document.querySelector(".results").appendChild = results.map((r) => {
          return (
            <div key={r.id}>
              <h3>{r.name}</h3>
              <p>{r.email}</p>
              <p>{r.phone}</p>
            </div>
          );
        });
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="App">
      <h1>React.js Searching Feature</h1>

      <div className="input">
        <input
          type="text"
          placeholder="Search Here"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>

      <div className="results"></div>
    </div>
  );
}
