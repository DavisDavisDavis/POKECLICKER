import "./App.css";
import React from "react";
import News from "./components/News/index.js";
import { Pokemon, Creature } from "./components/Pokemon/index.js";
import Button from "./components/Button/index.js";

function App() {
  const [news, setNews] = React.useState("");

  // // UseEffect will run on mount (when the component is ready) and everytime the inputText state changes
  // React.useEffect(() => {
  //   fetch(
  //     "https://api.nasa.gov/planetary/apod?api_key=dv45uJ17VkIm1YYqBJAa5HR81sqkabxl9RkNAKVb"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setNews(json);
  //     });
  // }, []); // Mapping useEffect function to change whenever the inputText state variable changes
  // <News title={news.title} img={news.url} text={news.explanation}></News>

  const Piplup = new Creature("Piplup", 100, 20);
  const Charmander = new Creature("Piplup", 50, 30);
  console.log(Charmander.hp);
  Piplup.attack(Charmander);
  console.log(Charmander.hp);

  return (
    <div className="App">
      <h1>Pokemon 🌱</h1>
      <Pokemon image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png"></Pokemon>
      <Button text="Attack"></Button>
    </div>
  );
}

export default App;
