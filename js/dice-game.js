const params = new URLSearchParams(window.location.search);
const player1 = params.get('player1');
const player2 = params.get('player2');
const score = params.get("score");


document.getElementById("namePlayer1").innerHTML = player1;
document.getElementById("namePlayer2").innerHTML = player2;
document.getElementById("score").innerHTML = score;

let buttonPlay1 = document.querySelector(".buttonPlay1");
let buttonPlay2 = document.querySelector(".buttonPlay2");
let scorePlayer1 = document.querySelector("#scroeplayer1");
let scorePlayer2 = document.querySelector("#scroeplayer2");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");

buttonPlay1.disabled = false;
buttonPlay2.disabled = true;

let isClicked = false;

function playGame(scorePlayer){
    let numrand = Math.floor(Math.random() * 6) + 1;  // من 1 إلى 6 زي النرد الحقيقي
    let square = document.querySelector(".square");
    square.innerHTML = "";  // نفضي المربع
    
    // نرسم عدد دوائر حسب الرقم
    for(let i = 0; i < numrand; i++) {
        let circle = document.createElement("span");
        circle.classList.add("circle");
        square.appendChild(circle);
    }
    
    let oldscore = Number(scorePlayer.innerHTML);
    oldscore+= numrand;
    console.log(oldscore);
    scorePlayer.innerHTML = oldscore;
    return oldscore;
};

function checkPlay(square1,square2){
    if(Number(square1.innerHTML) >= score){
        result1.innerHTML = "You Win";
        document.querySelector(".play-again").style.display = "block";
        buttonPlay1.disabled = true;
        buttonPlay2.disabled = true;
    }
    else if(Number(square2.innerHTML) >= score){
        result2.innerHTML = "You Win";
        document.querySelector(".play-again").style.display = "block";
        buttonPlay1.disabled = true;
        buttonPlay2.disabled = true;
    }
}

let currentPlayer = 1;  // اللاعب اللي دوره

buttonPlay1.addEventListener("click", function () {
    if (currentPlayer !== 1)
        return;  // مش دور اللاعب 1
    playGame(scorePlayer1);
    currentPlayer = 2;
    buttonPlay1.disabled = true;
    buttonPlay2.disabled = false;
    checkPlay(scorePlayer1,scorePlayer2)


});

buttonPlay2.addEventListener("click", function () {
    if (currentPlayer !== 2)
        return;  // مش دور اللاعب 2
    playGame(scorePlayer2);
    checkPlay(scorePlayer1,scorePlayer2)
    currentPlayer = 1;
    buttonPlay2.disabled = true;
    buttonPlay1.disabled = false;
});


// console.log(scorePlayer1.value);


