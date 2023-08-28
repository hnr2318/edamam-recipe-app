import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import "./App.css";
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const App = () => {
  var [recipes, setRecipes] = useState([]); // changed from const to var so that I could clear the recipes array before each new search
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  const [currVal, setCurrValue] = useState(7);
  const min = 2;
  const max = 10;


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    if(query != ""){ // check to make sure query isn't empty before grabbing recipes
      const response = await axios.get(`http://localhost:5000/recipes/${query}`);
      console.log(response.data[0].recipe);
      setRecipes(response.data);
    }else{
      console.log("EMPTY");
    }
  };

  // functions for getting and updating query for search
  const updateSearch = (e) => {
    setSearch(e.target.value); // e.target.value is equal to the string in the search bar when the string value is changed (ex: t, to, tof, tofu)
    recipes = []
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search); // search is equal to the string in the search bar once the user presses enter (ex: tofu)
    setSearch("");
  };

  const updateCurrValue = (e) => {
    setCurrValue(e.target.value); 
  };

  

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Type a food to search for..."
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <form className="form">
        <InputRange
            maxValue={20}
            minValue={0}
            value={currVal}
            onChange={updateCurrValue}
            // onChangeComplete={updateCurrVal} 
            />
      </form>
      
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe
            key={recipe.recipe.uri}
            link={recipe.recipe.url}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            totalYield={recipe.recipe.yield}
            digest={recipe.recipe.digest}
            sugar={recipe.recipe.totalNutrients.SUGAR}
            fiber={recipe.recipe.totalNutrients.FIBTG}
          />
        ))}
      </div>
    </div>
  );
};

export default App;