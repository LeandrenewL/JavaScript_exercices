/*
forward();
right();
left();
function nomDeMaFonction() {}
*/

/*
function figure1() {
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
    left(90);
    forward(100);
}

figure1();

figure1();

figure1();

figure1();
*/

/*
function figure2a() {
    right(90);
    forward(100);
    left(120);
    forward(100);
    left(120);
    forward(100);
}

figure2a();
*/

/*
function figure2b() {
    right(90);
    forward(100);
    left(120);
    forward(100);
    left(120);
    forward(100);
    right(90);
    
}

figure2b();
figure2b();
figure2b();
figure2b();
figure2b();
figure2b();
*/

/*
function figure3() {
    forward(40);
    right(120);
    forward(40);
    right(120);
    forward(40);
    goto(35,20);
    left(105);
    forward(40);
    left(90);
    forward(40);
    left(90);
    forward(40);
    left(90);
    forward(40);
}

figure3()
*/

/*
function figure1(côté) {
    forward(côté);
    left(90);
    forward(côté);
    left(90);
    forward(côté);
    left(90);
    forward(côté);
    left(90);
}
figure1(100)
*/

/*
function poisson_triangle(côté) {
    left(120)
    forward(côté);
    right(120);
    forward(côté);
    right(120);
    forward(côté);
}

function poisson_carré(côté) {
    right(15)
    forward(côté);
    left(90);
    forward(côté);
    left(90);
    forward(côté);
    left(90);
    forward(côté);
}


function poisson(taille_carre, taille_triangle) {
    poisson_triangle(taille_triangle)
    poisson_carré(taille_carre)
}

poisson(40, 40);
*/

/*
function nombre(nbetage) {
    for (let n = 1; n <= nbetage; n++) {
        console.log("#".repeat(n));
    }
}
nombre(100);
nombre(3);
*/

function nombres(n) {
    for (let n = 1; n < 101; n++) {

        if (n % 3 === 0) {
            console.log("fuzz");
        }
        else if(n % 5 === 0) {
            console.log("fizz");
        }
        else console.log(n);
    }
}
nombres();