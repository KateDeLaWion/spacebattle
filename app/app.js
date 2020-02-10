console.log('%c SPACE BATTLE SAGA', 'font-size: 25px');

for (let i = 0; i <= 1; i++) {
 if (i==2){
     break;
 }
    alert('Let the Space Battle begin !');

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

    let babyAlienShip = new alienShip();

    for (let j = 0; j <= 1; j++) {


        meAttack();

        function meAttack() {
            alert('You go get the aliens !');

            let roundAccuracy = Math.floor(Math.random() * 10) / 10;
            if (myShip.accuracy >= roundAccuracy) {
                console.log('You hit the alien ship !');
                alert('You hit the alien ship');
                babyAlienShip.hull -= 5;
            }
            if (myShip.accuracy < roundAccuracy) {

                console.log('You miss the alien ship !');
                alert('You miss the alien ship');
            }

            console.log('Alien is coming for you !');
                alert('Alien is coming for you !');

            alienAttack();

            function alienAttack() {
                let roundAccuracy = Math.floor(Math.random() * 10) / 10;
                if (babyAlienShip.accuracy >= roundAccuracy) {
                    console.log('Alien ship hit you !');
                    alert('Alien ship hit you !');
                }
                if (babyAlienShip.accuracy < roundAccuracy) {
                    console.log('Alien ship miss you !');
                    alert('Alien ship miss you !');
                    myShip.hull = myShip.hull - babyAlienShip.hull;
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
