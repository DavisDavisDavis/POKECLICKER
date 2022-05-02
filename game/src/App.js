import "./App.css";
import React from "react";
import News from "./components/News/index.js";
import { Pokemon, Creature } from "./components/Pokemon/index.js";
import Button from "./components/Button/index.js";
import HealthBar from "./components/HealthBar/index.js";

// Okay make API, fix the health bar updating, add fun animations and css,

function App() {
  const [news, setNews] = React.useState("");

  const Piplup = new Creature("Piplup", 100, 20);
  const Enemy = new Creature("Enemy", 1000, 30);
  const maxHp = Enemy.hp;
  const [enemyHP, setEnemyHp] = React.useState(Enemy.hp);

  let uwu = 100;
  // React.useEffect(() => {
  //   console.log("uwu");
  // }, [Enemy.hp]);

  function attack() {
    Piplup.attack(Enemy);
    const newHp = enemyHP - 20;
    setEnemyHp(newHp);
    console.log(enemyHP);
    // Enemy.hp = e;
  }

  // document.HealthBar.style.dispaly = "none";

  return (
    <div className="App">
      <h1>Pokemon 🌱</h1>
      <h2>{enemyHP}</h2>
      <HealthBar hp={(enemyHP / maxHp) * 100}></HealthBar>
      <Pokemon image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png"></Pokemon>
      <Button click={attack} text="Attack"></Button>
    </div>
  );
}

export default App;

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
