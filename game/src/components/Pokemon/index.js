import "./pokemon.css";
import React from "react";

export class Creature {
  constructor(name, hp, power) {
    this.name = name;
    this.hp = hp;
    this.power = power;
  }

  attack(enemy) {
    enemy.hp -= this.power;
  }
}

export const Pokemon = (props) => {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
};
