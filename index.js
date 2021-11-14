const form = document.querySelector('form');
const searchResult = document.querySelector('.search')
const container = document.querySelector('.container');
let userQuery = '';

const ID = '332fae01';
const key = 'abe61cf8ea5fe3043c0ce3a1ce892819';

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    userQuery =  e.target.querySelector('input').value;
    console.log(userQuery);
    fetchData();
})

async function fetchData(){
    const baseURL = `https://api.edamam.com/search?q=${userQuery}&app_id=${ID}&app_key=${key}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    createContent(data.hits);
    console.log(data);
}
function createContent(results){
    let initialContent = '';
    results.map(result =>{
        initialContent += 
            `<div class="item">
            <img src = "${result.recipe.image}" alt = "">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class ='view-btn' href='${result.recipe.url}' target = "_blank">View Recipe</a>
            </div>
            <p class="recipe-desc">Calories: ${result.recipe.calories.toFixed(2)}</p>
        </div>
    </div>`
    })
    searchResult.innerHTML = initialContent;
}