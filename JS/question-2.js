const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f8821e39f8a140aab86716de0d4bf4d6";
const resultsContainer = document.querySelector(".results");

async function getResults(){
  try{
     const response = await fetch(url);
     const results = await response.json();
     const games = results.results; 

    resultsContainer.innerHTML = "";

    for(let i = 0; i < games.length; i++){
         if (i === 8) {
         break;
    }
    const tags = games[i].tags;
    let tagsCounter = 0;
    for (let i = 0; i < tags.length; i++){
   tagsCounter++;
   }
   resultsContainer.innerHTML += `<div class="results">${games[i].name} : ${games[i].rating} : ${tagsCounter}</div>`
    } 
}catch (error){
    resultsContainer.innerHTML = displayError("Your request entered previously unknown dimension and we cannot catch up");
}
}
getResults();

