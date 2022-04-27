import "./App.css";
import React from "react";
import News from "./components/News/index.js";

function App() {
  const [news, setNews] = React.useState("");

  // UseEffect will run on mount (when the component is ready) and everytime the inputText state changes
  React.useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=dv45uJ17VkIm1YYqBJAa5HR81sqkabxl9RkNAKVb"
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []); // Mapping useEffect function to change whenever the inputText state variable changes

  console.log(news);

  return (
    <div className="App">
      <h1>What is the weather like at Mars? 🪐</h1>
      <News title={news.title} img={news.url} text={news.explanation}></News>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
