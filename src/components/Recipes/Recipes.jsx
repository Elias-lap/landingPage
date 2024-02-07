/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

import "./Recipes.scss";
function Recipes() {
    // fetch Data 
    const [dataRecipes, setData] = useState([]);

    useEffect(() => {
      async function logRecipes() {
        try {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast");
          const data = await response.json();
          
          if (data && data.meals) {
            // Update state with the received data
            setData(data.meals);
          } else {
            // Handle the case when the response does not contain the expected data
            console.log('Received data is not in the expected format');
          }
        } catch (error) {
          // Handle any errors that occurred during the fetch operation
          console.error('There was a problem with the fetch operation:', error);
        }
      }
      
      logRecipes();
    }, []);
  
  //  end fetching Data
  
  return (
    <section className="Recipes">
      <h2>Recipes</h2>
      <div className="Recipes_conetent">
        {dataRecipes.map((item)=>{
          return(
            <div key={item.idMeal} className="Recipes_conetent-Box">
            <img
              src={item?.strMealThumb}
              alt=""
            />
            <h3>{item?.strMeal}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut
              dignissimos repellendus, amet facilis aperiam alias mollitia
              repudiandae esse quis quibusdam hic voluptatem magnam id.
            </p>
          </div>
          )
        })
         
      
      }
      
      
    
      
      </div>
    <div className="Recipes_Home-Button">
        <button >
              contact us
            </button>
    </div>
    </section>
  );
}

export default Recipes;
