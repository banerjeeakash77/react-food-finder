
import Search from "../src/components/Search";
import RecipeList from "../src/components/RecipeList";
import { getRecipes } from "../src/services/api";
import { useEffect, useState } from "react";

const Recipes=()=>{
    const [searchedQuery, setSearchedQuery]=useState('pizza');
    const [recipes,setRecipes] = useState([]);


    useEffect(()=>{
        getSearchedResult();

    },[searchedQuery])

    const getSearchedResult=async()=>{
    
         let result=  await getRecipes(searchedQuery);
         console.log(result) 
         //this function will call all the recipes by API call
         if(result && result.recipes){ 
            setRecipes(result.recipes)
         }
    }
    return(
       <>
       <Search  setSearchedQuery={setSearchedQuery}/>
       <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
       </>
       
    )
}
export default Recipes;