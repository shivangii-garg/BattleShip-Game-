let randomLoc = Math.floor(Math.random() * 5);
let location2 = randomLoc + 1;
let location3 = randomLoc + 2;

let chances = 0; 
let hits = 0;
let sunk = false;

while (sunk != true)
{
    let guess = prompt("Ready, Aim, Fire! (Enter a number between 0 and 6)");
    if(guess < 0 || guess > 6){
        alert("Invalid Guess!")
            }
    else {
        chances++;
        if(guess == randomLoc || guess == location2 || guess == location3){
            hits++
            {
                if(hits == 3)
                {
                    sunk = true;
                    alert("You sank my battleship!!")
                }
            }
        }
            else {alert("Miss!")}
    }
}

alert("Score: " + chances);

