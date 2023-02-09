//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.getElementById('button1').addEventListener('click', getDrinks1)

function getDrinks1(){
    let drink1 = document.getElementById('input1').value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink1}`)


    .then((res) => res.json()) // parse response as JSON
    .then(data =>  {
        console.log(data.drinks)
        document.getElementById('cocktail1').innerText = data.drinks[0].strDrink
        document.getElementById('img1').src = data.drinks[0].strDrinkThumb
        document.getElementById('Instructions1').innerText = data.drinks[0].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
};

document.getElementById('button2').addEventListener('click', getDrinks2)

function getDrinks2() {
    
    let drink2 = document.getElementById('input2').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink2}`)


        .then((res) => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks)
            document.getElementById('cocktail2').innerText = data.drinks[1].strDrink
            document.getElementById('img2').src = data.drinks[1].strDrinkThumb
            document.getElementById('Instructions2').innerText = data.drinks[1].strInstructions

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
};