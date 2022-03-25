import { Drink } from "./cocktaildbapi.service";

export class Cocktail {
    id: number;
    name: string;
    image: string;
    instruction: string;
    thumbnail: string;

    constructor(drink : Drink){
        this.id = drink.idDrink;
        this.name = drink.strDrink;
        this.instruction = drink.strInstructions;
        this.thumbnail = drink.strDrinkThumb;
    }
  }
  
 
  
  
