import "./App.css";
import React, { useState } from "react";
import { Creature } from "./components/Pokemon/index.js";
import Button from "./components/Button/index.js";
import HealthBar from "./components/HealthBar/index.js";

// Okay make API, fix the health bar updating, add fun animations and css,

function App() {
  const pet = new Creature("Piplup", 100, 20);
  const Enemy = new Creature("Charmander", 100, 30);
  const maxHp = Enemy.hp;
  const [enemyHp, setEnemyHp] = React.useState(Enemy.hp);

  const [isHurt, setIsHurt] = useState(false);
  const [isAttacking, setIsAttacking] = useState(false);

  const [enemyName, setEnemyName] = useState("");
  const [enemyId, setEnemyId] = useState(1);

  let enemies = [];
  React.useEffect(() => {
    console.log(enemies.length);
    if (enemies.length > 0) {
      console.log("owo");
      return setEnemyName(enemies[enemyId]);
    } else {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((res) => res.json())
        .then((json) => {
          enemies = enemies.concat(
            json.results.map((enemy) => {
              return enemy.name;
            })
          );
          console.log(enemies.length);
          setEnemyName(enemies[enemyId - 1]);
          return enemies;
        });
    }
  }, [enemyId]);

  function attack() {
    //Animations
    setIsAttacking(!isAttacking);
    setIsHurt(!isHurt);

    //Damage
    window.setTimeout(() => {
      pet.attack(Enemy);
      let newHp = enemyHp - 20;
      setEnemyHp(newHp);
      setIsHurt(true);
      setIsAttacking(true);

      //Knocked out
      if (newHp <= 0) {
        console.log("oof 🥲");

        //enemyId + 3 becuase i want to skip the evolutions 🥲 Yes i know its spegetthi
        setEnemyId(enemyId + 3);
        setEnemyName(enemies[enemyId]);
        setEnemyHp(maxHp);

        console.log(enemyId);
        console.log(enemyName);
      }
    }, 400);
  }

  return (
    <div className="App">
      <h1>POKECLICKER 🌱</h1>
      <div>
        <h2>{enemyName}</h2>
        <h2>{enemyHp}</h2>
        <HealthBar hp={(enemyHp / maxHp) * 100}></HealthBar>
      </div>
      <section className="battle">
        <img
          className="background"
          src="https://pbs.twimg.com/media/DVMT-6OXcAE2rZY.jpg"
        />
        <img
          className={isHurt ? "enemy hurt" : "enemy"}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${enemyId}.png`}
        />
        <img
          className={isAttacking ? "pet attack" : "pet"}
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"
          }
        />
        {/* <Pokemon className="enemy" image={pokemonImageFront}></Pokemon>
        <Pokemon className="pet" image={pokmeonImageBack}></Pokemon> */}
      </section>

      <section>
        <Button click={attack} text="FIGHT"></Button>
      </section>
    </div>
  );
}

export default App;

// Graveyard
/*

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results[0].name);
        enemies = enemies.concat(
          json.results.filter((enemy) => {
            console.log(enemy.name == "charizard");
            return enemy.name == "charizard" ? enemy : null;
          })
        );
        console.log(enemies[0].url);
      });
  }, []);
    // setPokemonImage(json.sprites);
  // console.log(pokemonImage.front_default);
  // const pokemonImageFront = pokemonImage.front_default;
  // console.log(pokemonImageFront);
  // const pokmeonImageBack = pokemonImage.back_default;


// UseEffect will run on mount (when the component is ready) and everytime the inputText state changes
const [news, setNews] = React.useState("");
React.useEffect(() => {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=dv45uJ17VkIm1YYqBJAa5HR81sqkabxl9RkNAKVb"
  )
    .then((res) => res.json())
    .then((json) => {
      setNews(json);
    });
}, []); // Mapping useEffect function to change whenever the inputText state variable changes
<News title={news.title} img={news.url} text={news.explanation}></News>
*/
