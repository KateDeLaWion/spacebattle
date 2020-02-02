
// alert('Let the Space Battle begin ?'); // why it has to be above the newGame() ?
// console.log('%c SPACE BATTLE SAGA', 'font-size: 25px');

newGame(); // Why it is not invoked?

function newGame(){

    alert('Let the Space Battle begin !'); // Why alert is not defined ? 

    console.log('%c SPACE BATTLE SAGA', 'font-size: 25px');

    let myShip = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7,
    }

    class alienShip {
        constructor() {
            this.hull = Math.floor(Math.random() * 4) + 3;
            this.firepower = Math.floor(Math.random() * 3) + 2;
            this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
        }
    }

    function nextAlienShip() {
        let babyAlienShip = new alienShip();
    }

    
    attackCycle();

    function attackCycle() {
        for (let i = 0; i <= 6; i++) {
            if (i==6){
                console.log('%c You won', 'font-size: 25px');
                newGame();
                break;
            }

            nextAlienShip();

            meAttack();

            function meAttack() {
                let roundAccuracy = Math.floor(Math.random() * 10) / 10;
                if (myShip.accuracy >= roundAccuracy) {
                    babyAlienShip.hull -= 5;
console.log('Alien ship has been hit!');
                }
                if (babyAlienShip.hull <= 0) {
                    console.log('%c An alien ship is destroyed', 'font-size: 15px');
                    alert('Attack the next alien ship?');
                    nextAlienShip();
                }
                if (babyAlienShip > 0) {
                    alienAttack();
                }
            }

            function alienAttack() {
                if (babyAlienShip.hull > 0) {
                    let roundAccuracy = Math.floor(Math.random() * 10) / 10;
                    if (babyAlienShip.accuracy > roundAccuracy) {
                        myShip.hull -= babyAlienShip.firepower;
                        console.log('You have been hit!');
                    }
                    if (myShip.hull > 0) {
                        meAttack();
                    }
                    if (myShip.hull <= 0) {
                        alert('Your spaceship is down.  Another game? ');

                        newGame();
                    }
                }
            }
        }

    }
}

















// suggestions

// const yourAnswer = prompt('Some question', 'A default value goes here');

// let action = null
// while(action !== "stop"){
//     action = prompt("What do you want to do", "Your action");
// }

// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }


// console.log('%c You have done ' + player.firepower + ' damage ', 
// 'font-style: italic; background: azure; border: 1px solid grey;');
