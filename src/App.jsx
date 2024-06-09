import { useState } from "react";
import "./App.css";
import RatingReview from "./components/RatingReview/RatingReview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" max-w-2xl mx-auto mt-20">
      <RatingReview />
    </div>
  );
}

export default App;
