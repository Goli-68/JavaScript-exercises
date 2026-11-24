const nameInput = document.getElementById("name-input");
const sortBtn = document.getElementById("sort-btn");
const tryAgainBtn = document.getElementById("try-again-btn");
const result = document.getElementById("result");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const houseColors = {
    Gryffindor : "#ff595e",
    Hufflepuff :"#ffca3a", 
    Ravenclaw :"#4ea8de", 
    Slytherin :"#52b788", 
};
let lastHouse ="";
function pickHouses(differentFromList) {
 let house = houses[Math.floor(Math.random() * houses.length)];
 if (differentFromList){
    while (house === lastHouse) {
      house = houses[Math.floor(Math.random() * houses.length)];  
    }
 } 
 lastHouse = house;
 return house;  
}
sortBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();
    if (userName === ""){
        result.textContent = "please Enter your name first";
        tryAgainBtn.style.display = "none";
        return;
    }
    const chosenHouse = pickHouses(false);
    result.textContent = `${userName} belongs in ${chosenHouse}!`;
    result.style.color = houseColors[chosenHouse] || "#ffffff";
     tryAgainBtn.style.display = "inline-block";
});
tryAgainBtn.addEventListener("click", () => {
   const userName = nameInput.value.trim();
   if (userName === "")return; 
   const chosenHouse = pickHouses(true);
    result.textContent = `${userName} belongs in ${chosenHouse}!`; 
    result.style.color = houseColors[chosenHouse] || "#ffffff";
});


