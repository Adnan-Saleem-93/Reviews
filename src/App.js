import "./App.css";
import Review from "./components/review";

function App() {
  return (
    <div className="App">
      <h1>Reviews</h1>
      <hr
        style={{
          width: "10rem",
          height: "5px",
          color: "dodgerblue",
          marginBottom: "2rem",
          marginTop: "0",
          opacity: 1
        }}
      />
      <Review />
    </div>
  );
}

export default App;
