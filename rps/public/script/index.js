var rpsMain = document.getElementById('rpsmain');
var rpsresult = document.getElementById('result');
var rpsScore = document.getElementById('changeScore');

var score;
var scoreDisplay = 0;


rpsMain.addEventListener('click', iD);

function iD(e) {
  var clicked = e.target;
  var choiceclass = clicked.classList;


  if (choiceclass == "") {
    alert("Please click on Image")
  } else {
    rpsMain.style.display = "none";
    var compuChoice, yourChoice;

    if (choiceclass == "rockimg") {
      yourChoice = 1;
    } else if (choiceclass == "paperimg") {
      yourChoice = 2;
    } else if (choiceclass == "scissorimg") {
      yourChoice = 3;
    }

    var compuChoice = Math.floor(Math.random() * 3) + 1;


    if (yourChoice == 1 && compuChoice == 1) {
      score = 0;
    } else if (yourChoice == 1 && compuChoice == 2) {
      score = -1;
    } else if (yourChoice == 1 && compuChoice == 3) {
      score = 1;
    } else if (yourChoice == 2 && compuChoice == 1) {
      score = 1;
    } else if (yourChoice == 2 && compuChoice == 2) {
      score = 0;
    } else if (yourChoice == 2 && compuChoice == 3) {
      score = -1;
    } else if (yourChoice == 3 && compuChoice == 1) {
      score = -1;
    } else if (yourChoice == 3 && compuChoice == 2) {
      score = 1;
    } else if (yourChoice == 3 && compuChoice == 3) {
      score = 0;
    }



    !score ? 0 : score == -1 ? scoreDisplay-- : scoreDisplay++;

    rpsScore.classList.add("anima");

    rpsScore.addEventListener("animationend", function () {
      rpsScore.classList.remove("anima");
    })


    var yourDiv = document.createElement('div');
    var compuDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var contanerDiv = document.createElement('div');

    messageDiv.classList.add("newDiv")
    contanerDiv.classList.add("contaner");
    yourDiv.classList.add("yourDiv");
    compuDiv.classList.add("compuDiv")

    var txt1 = document.createElement('div');
    txt1.classList.add("txt");
    txt1.innerHTML = "You Choose:"

    var txt2 = document.createElement('div');
    txt2.classList.add("txt");
    txt2.innerHTML = "Opponent Choose:"

    var yourImg = document.createElement('img');

    if (yourChoice == 1) {
      yourImg.src = "https://i.ibb.co/QjGqSDx/rock.png";
    } else if (yourChoice == 2) {
      yourImg.src = "https://i.ibb.co/PD0fVfh/paper.png";
    } else if (yourChoice == 3) {
      yourImg.src = "https://i.ibb.co/r2JVvDt/scissor.png";
    }
    yourImg.classList.add("newImg");
    yourDiv.appendChild(txt1);
    yourDiv.appendChild(yourImg);


    var compuImg = document.createElement('img');
    if (compuChoice == 1) {
      compuImg.src = "https://i.ibb.co/QjGqSDx/rock.png";
    } else if (compuChoice == 2) {
      compuImg.src = "https://i.ibb.co/PD0fVfh/paper.png";
    } else if (compuChoice == 3) {
      compuImg.src = "https://i.ibb.co/r2JVvDt/scissor.png";
    }
    compuImg.classList.add("newImg");
    compuDiv.appendChild(txt2);
    compuDiv.appendChild(compuImg);


    if (score == 1) {
      messageDiv.innerText = "You Win";
      var win = new Audio("https://mywork.imfast.io/sounds/win.mp3");
      win.play();
    } else if (score == 0) {
      messageDiv.innerText = "Draw";
    } else if (score == -1) {
      messageDiv.innerText = "You Lose";
      var loose = new Audio("https://mywork.imfast.io/sounds/fail-buzzer-03.mp3");
      loose.play();
    }


    contanerDiv.appendChild(yourDiv);
    contanerDiv.appendChild(messageDiv);
    contanerDiv.appendChild(compuDiv);

    rpsresult.appendChild(contanerDiv);

    rpsScore.innerHTML = scoreDisplay;




    setTimeout(function () {
      contanerDiv.remove();
      rpsMain.style.display = "flex";
    }, 3500);

  }
}

document.getElementById('info').innerHTML = JSON.stringify({ auth_user_info, auth_user_token }, null, 2)