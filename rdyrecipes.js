let conRes = document.querySelector(".container");
let res = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";



searchBtn.addEventListener("click",()=>{
    
    let userInp = document.getElementById("user-inp").value;
    
    if(userInp.length == 0) 
    {   
       res.innerHTML += `<h3>Input is empty. Please enter serach term</h3>`;
    }
    else
    {   
        res.style.display = "block";

        fetch(url + userInp)
        .then((response)=> response.json())
        .then((data)=>{
            let myMeal = data.meals[0];
            console.log(myMeal);
            console.log(myMeal.strMealThumb);
            console.log(myMeal.strMeal);
            console.log(myMeal.strArea);
            console.log(myMeal.strInstructions);
            console.log(myMeal.strSource);
            let count = 1; 
            let ingredients = [];
            for (let i in myMeal){
                let ingredient ="";
                let measure = "";
                if(i.startsWith("strIngredient")&& myMeal[i]){
                    ingredient = myMeal[i];
                    measure = myMeal['strMeasure' + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`);
                };
            }
            console.log(ingredients);
            
            res.innerHTML = `
                <button class="btn-close">X</button>
                <img src= ${myMeal.strMealThumb}>
                <div class ="details">
                    <h2>${myMeal.strMeal}</h2>
                    <h4>${myMeal.strArea}</h4>
                </div>
                <div id ="ingredient-con"></div>
                <div id="recipe">
                    <button id="hide-recipe">X</button>
                    <pre id="instructions">${myMeal.strInstructions}</pre>
                    <button class="more"><a href = ${myMeal.strSource}>More about recipe</a></button>    
                </div>
                <button id="show-recipe">Show detais</div>
            `;
            let btnClose = document.querySelector(".btn-close");
            btnClose.addEventListener("click",()=>{  
                res.style.display = "none";
            })
            let recipeContent = document.getElementById("ingredient-con");
            let parent = document.createElement("ul");
            let recipe = document.getElementById("recipe");
            let hideRecipe = document.getElementById("hide-recipe");
            let showDeatails = document.getElementById("show-recipe");

            ingredients.forEach((i)=>{
                let listChild = document.createElement("li");
                listChild.innerText = i;
                parent.appendChild(listChild);
                recipeContent.appendChild(parent);
            });

            hideRecipe.addEventListener("click",()=>{
                recipe.style.display = "none";
            });
            showDeatails.addEventListener("click",()=>{
                recipe.style.display = "block";
            });
            
        }).catch(()=>{
            res.innerHTML = `<h3>Wrong term</h3>`;
        })
        
    }

    
});


