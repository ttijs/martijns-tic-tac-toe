//0 = leeg
//1 = blauw
//2 = rood

//in het begin zijn alle vakje1 leeg = 0
let vakje1 = 0; //dit is de 'state' van vakje1, die kan zijn 0=leeg, 1=blauw, 2=rood
let vakje2 = 0; //dit is de 'state' van vakje2, die kan zijn 0=leeg, 1=blauw, 2=rood
let vakje3 = 0; //dit is de 'state' van vakje3, die kan zijn 0=leeg, 1=blauw, 2=rood
let vakje4 = 0;
let vakje5 = 0;
let vakje6 = 0;
let vakje7 = 0;
let vakje8 = 0;
let vakje9 = 0;

let speler = 1; //dit is de speler die op dit moment aan de beurt is,
// die moet je dus iedere keer dat er op een leeg vakje wordt geklikt aanpassen

//in dit voorbeeld wordt nog NIET voorkomen dat je dubbel kunt klikken op een vakje,
// dat wordt straks uitgelegd

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(200);
    fill("white");
    //vakje1
    if (vakje1 == 0) {
        fill("white");
    }
    if (vakje1 == 1) {
        fill("red");
    }
    if (vakje1 == 2) {
        fill("blue");
    }
    rect(100, 100, 100, 100);
    fill("white");
    //vakje2
    if (vakje2 == 0) {
        fill("white");
    }
    if (vakje2 == 1) {
        fill("red");
    }
    if (vakje2 == 2) {
        fill("blue");
    }
    rect(100, 200, 100, 100);
    //vakje3------------------------
    if (vakje3 == 0) {
        fill("white");
    }
    if (vakje3 == 1) {
        fill("red");
    }
    if (vakje3 == 2) {
        fill("blue");
    }
    rect(100, 300, 100, 100);
    //vakje4------------------------
    if (vakje4 == 0) {
        fill("white");
    }
    if (vakje4 == 1) {
        fill("red");
    }
    if (vakje4 == 2) {
        fill("blue");
    }
    rect(200, 100, 100, 100);
    //vakje5------------------------
    if (vakje5 == 0) {
        fill("white");
    }
    if (vakje5 == 1) {
        fill("red");
    }
    if (vakje5 == 2) {
        fill("blue");
    }
    rect(200, 200, 100, 100);
    //vakje6------------------------
    if (vakje6 == 0) {
        fill("white");
    }
    if (vakje6 == 1) {
        fill("red");
    }
    if (vakje6 == 2) {
        fill("blue");
    }
    rect(200, 300, 100, 100);
    //vakje7------------------------
    if (vakje7 == 0) {
        fill("white");
    }
    if (vakje7 == 1) {
        fill("red");
    }
    if (vakje7 == 2) {
        fill("blue");
    }
    rect(300, 100, 100, 100);
    //vakje8------------------------
    if (vakje8 == 0) {
        fill("white");
    }
    if (vakje8 == 1) {
        fill("red");
    }
    if (vakje8 == 2) {
        fill("blue");
    }
    rect(300, 200, 100, 100);
    //vakje9------------------------
    if (vakje9 == 0) {
        fill("white");
    }
    if (vakje9 == 1) {
        fill("red");
    }
    if (vakje9 == 2) {
        fill("blue");
    }
    rect(300, 300, 100, 100);



    //----------------------------------
    fill("black");
    text("vakje1 = " + vakje1, 10, 10);
    text("vakje2 = " + vakje2, 10, 60);
    text("vakje3 = " + vakje3, 10, 110);
    text("vakje4 = " + vakje4, 10, 160);
    text("vakje5 = " + vakje5, 10, 210);
    text("vakje6 = " + vakje6, 10, 260);
    text("vakje7 = " + vakje7, 10, 310);
    text("vakje8 = " + vakje8, 10, 360);
    text("vakje9 = " + vakje9, 10, 410);

    text("speler = " + speler, 10, 460);
}

function mousePressed() {

    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200 && vakje1 == 0) {
        vakje1 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300 && vakje2 == 0) {
        vakje2 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 400 && vakje3 == 0) {
        vakje3 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 200 && mouseX < 300 && mouseY > 100 && mouseY < 200 && vakje4 == 0) {
        vakje4 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300 && vakje5 == 0) {
        vakje5 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 200 && mouseX < 300 && mouseY > 300 && mouseY < 400 && vakje6 == 0) {
        vakje6 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 200 && vakje7 == 0) {
        vakje7 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300 && vakje8 == 0) {
        vakje8 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    if (mouseX > 300 && mouseX < 400 && mouseY > 300 && mouseY < 400 && vakje9 == 0) {
        vakje9 = speler;
        if (speler == 1) {
            speler = 2;
        } else {
            speler = 1;
        }
    }
    checkWin();
}

function checkWin() {
    if (vakje1 == 1 && vakje2 == 1 && vakje3 == 1) {
        console.log("speler 1 heeft gewonnen");
    }
    if (vakje4 == 1 && vakje5 == 1 && vakje6 == 1) {
        console.log("speler 1 heeft gewonnen");
    }
    if (vakje7 == 1 && vakje8 == 1 && vakje9 == 1) {
        console.log("speler 1 heeft gewonnen");
    }
    if (vakje1 == 2 && vakje2 == 2 && vakje3 == 2) {
        console.log("speler 2 heeft gewonnen");
    }
    if (vakje4 == 2 && vakje5 == 2 && vakje6 == 2) {
        console.log("speler 2 heeft gewonnen");
    }
    if (vakje7 == 2 && vakje8 == 2 && vakje9 == 2) {
        console.log("speler 2 heeft gewonnen");
    }

}