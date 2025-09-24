//0 = leeg
//1 = blauw
//2 = rood

//in het begin zijn alle vakje1 leeg = 0
let vakje1 = 0; //dit is de 'state' van vakje1, die kan zijn 0=leeg, 1=blauw, 2=rood
let vakje2 = 0; //dit is de 'state' van vakje1, die kan zijn 0=leeg, 1=blauw, 2=rood
let vakje3 = 0; //dit is de 'state' van vakje1, die kan zijn 0=leeg, 1=blauw, 2=rood

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
    //----------------------------------
    fill("black");
    text("vakje1 = " + vakje1, 10, 10);
    text("vakje2 = " + vakje2, 10, 60);
    text("vakje3 = " + vakje3, 10, 110);
    text("speler = " + speler, 10, 160);
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
}
