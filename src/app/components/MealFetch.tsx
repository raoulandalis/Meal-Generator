//server component
import React from 'react'

//gives ingredients prop a type
interface MealFetchProps {
    ingredients: string;
}

const MealFetch = ({ingredients}: MealFetchProps) => {

    // let result;

    const recipeAPICall = async () => {
        // setLoading(true);
        // setError(null);
        //try/catch block that generates response - uses axios
        let result;
        try {
            const response = await fetch(
                `https://api.edamam.com/search?q=${encodeURIComponent(ingredients)}&app_id=${'0f41090f'}&app_key=${'c2869ac02b6a4dfa5df6fe3d9ae6559b'}`);


            result = await response.json()
            // console.log(result.hits)
            return result.hits
        } catch (error) {
            console.log(error)
        }
    }

    let data = recipeAPICall()

    console.log('res============================', data)

  return (
    <>
    <div>Hello World.</div>
    </>
  )
}

export default MealFetch
