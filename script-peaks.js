$(window).resize(function() {
  if ($(this).width() < 280) {
    $(enterNameP).css({
      fontSize: "15px",
      marginTop: "10px"
    });
    $("header").css({
      height: "50px"
    });
    $(geogame).css({
      width: "40px",
      height: "40px",
      marginLeft: "35%"
    });
    $("input").css({
      width: "100%",
      height: "30px"
    });
    $(btnName).css({
      width: "80%",
      height: "30px",
      margin: "none",
      fontSize: "12px"
    });
    $(questionsBox).css({
      width: "100%",
      height: "auto",
      margin: "none",
      fontSize: "12px",
      paddingTop: "2px"
    });
    $(".answersDiv").css({
      width: "100%",
      height: "30px",
      margin: "0",
      fontSize: "10px",
      lineHeight: "30px"
    });
    $(".col-sm-6").css({
      width: "100%",
      height: "80px",
      margin: "0",
      fontSize: "12px",
      padding: "0px"
    });
    $(".col-md-6").css({
      height: "auto",
      margin: "0",
      padding: "0"
    });
    $(countQuestion).css({
      width: "100%",
      height: "80px",
      margin: "0",
      fontSize: "12px",
      padding: "0px"
    });
    $(nameEnter).css({
      width: "100%",
      height: "80px",
      margin: "0",
      padding: "0px"
    });
    $(answersBox).css({
      padding: "0px"
    });
    $(".image").css({
      width: "120px",
      height: "100px"
    });
    $(nameofgame2)
      .show()
      .css({
        fontSize: "10px"
      });
    $(nameofgame).hide();
    $(nameP).css({
      fontSize: "10px"
    });
    $(pointsP).css({
      fontSize: "10px"
    });
    $(questionP).css({
      fontSize: "10px",
      marginTop: "25px"
    });
    $(playerEnd).css({
      fontSize: "12px"
    });
    $(score).css({
      fontSize: "14px",
      color: "yellow"
    });
    $(opinion).css({
      fontSize: "12px"
    });
    $(pEnd).css({
      fontSize: "12px"
    });
    $(btnEnd).css({
      width: "80%",
      height: "30px",
      margin: "none",
      fontSize: "12px"
    });
  } else if ($(this).width() < 324) {
    $(nameofgame).hide();
    $(nameofgame2).show();
  } else if ($(this).width() < 500) {
    $(nameofgame2).hide();
    $(nameofgame)
      .show()
      .css({
        fontSize: "18px"
      });
    $(enterNameP).css({
      fontSize: "18px"
    });
    $("header").css({
      height: "100px"
    });
    $(geogame).css({
      width: "80px",
      height: "80px",
      marginLeft: "5%"
    });
    $("input").css({
      width: "80%",
      height: "40px"
    });
    $(btnName).css({
      width: "40%",
      height: "40px",
      margin: "none",
      fontSize: "18px"
    });
    $(questionsBox).css({
      width: "100%",
      height: "auto",
      margin: "none",
      fontSize: "18px",
      paddingTop: "2px"
    });
    $(".answersDiv").css({
      width: "80%",
      height: "50px",
      margin: "5px 5px",
      fontSize: "18px",
      lineHeight: "50px"
    });
    $(".col-sm-6").css({
      width: "100%",
      height: "120px",
      margin: "0",
      fontSize: "24px",
      padding: "0px"
    });
    $(".col-md-6").css({
      height: "auto",
      margin: "0",
      padding: "0"
    });
    $(nameEnter).css({
      width: "100%",
      height: "160px",
      margin: "0",
      padding: "0px"
    });
    $(countQuestion).css({
      width: "100%",
      height: "150px",
      margin: "0",
      fontSize: "24px",
      padding: "0px"
    });
    $(answersBox).css({
      padding: "10px"
    });
    $(".image").css({
      width: "250px",
      height: "200px"
    });
    $(nameP).css({
      fontSize: "24px"
    });
    $(pointsP).css({
      fontSize: "24px"
    });
    $(questionP).css({
      fontSize: "24px"
    });
    $(playerEnd).css({
      fontSize: "16px"
    });
    $(score).css({
      fontSize: "18px",
      color: "yellow"
    });
    $(opinion).css({
      fontSize: "16px"
    });
    $(pEnd).css({
      fontSize: "16px"
    });
    $(btnEnd).css({
      width: "40%",
      height: "40px",
      margin: "none",
      fontSize: "18px"
    });
  } else if ($(this).width() < 700) {
    $(nameofgame).css({
      fontSize: "22px",
      float: "right"
    });
    $(".answersDiv").css({
      width: "70%",
      height: "50px",
      margin: "5px 5px",
      fontSize: "16px",
      lineHeight: "50px"
    });
    $(".col-sm-6").css({
      width: "100%",
      height: "150px",
      margin: "0",
      fontSize: "24px",
      padding: "0px"
    });
  } else if ($(this).width() < 950) {
    $(enterNameP).removeAttr("style");
    $("header").removeAttr("style");
    $(geogame).css({
      width: "120px",
      height: "100px"
    });
    $(".answersDiv").removeAttr("style");
    $(answersBox).css({
      padding: "30px"
    });
    $(namePlayer).css({
      height: "150px",
      margin: "0",
      fontSize: "35px",
      padding: "0px"
    });
    $(".col-sm-6").css({
      height: "150px",
      fontSize: "30px"
    });
    $(".col-md-6").css({
      height: "auto",
      fontSize: "40px"
    });
    $(countQuestion).css({
      height: "150px",
      margin: "0",
      fontSize: "35px",
      padding: "0px"
    });
    $(questionsBox).css({
      height: "auto",
      fontSize: "35px",
      padding: "0px"
    });
    $(".image").removeAttr("style");
    $(nameofgame).removeAttr("style");
    $(nameP).removeAttr("style");
    $(pointsP).removeAttr("style");
    $(questionP).removeAttr("style");
    $("input").removeAttr("style");
    $(btnName).removeAttr("style");
    $(playerEnd).css({
      fontSize: "24px"
    });
    $(score).css({
      fontSize: "30px",
      color: "yellow"
    });
    $(opinion).css({
      fontSize: "30px"
    });
    $(pEnd).css({
      fontSize: "30px"
    });
    $(btnEnd).removeAttr("style");
  }
});

let names = document.getElementById("nameP");
let playerName = document.getElementById("input");
let points = document.getElementById("pointsP");
let question = document.getElementsByClassName("questions");

const answers = [
  ["Gerlachovský štít", "Gerlachovská veža", "Lomnický štít", "Rysy"],
  ["Musala", "Mont Blanc", "Mount Elbrus", "Matterhorn"],
  ["8488", "8884", "8848", "8448"],
  ["Ural", "Atlas", "Carpathian", "Pyrenees"],
  ["Andes", "Himalaya", "Drakensberg", "Rocky Mountains"],
  ["Snowy Mountains", "Rocky Mountains", "White Mountains", "Cascade Range"],
  ["Ural Mtn.", "Altai Mtn.", "Caucasus Mtn.", "Scandinavian Mtn."],
  ["Spain", "France", "Romania", "Italy"],
  ["Sumatra", "Borneo", "Sulawesi", "New Guinea"],
  ["Europe", "Asia", "Africa", "Australia"]
];

const correctAnswers = [
  "Gerlachovský štít",
  "Matterhorn",
  "8848",
  "Ural",
  "Andes",
  "Snowy Mountains",
  "Altai Mtn.",
  "Italy",
  "New Guinea",
  "Africa"
];

let namePlayers = () => {
  names.innerHTML = "Player: " + playerName.value;
  let upperPlayer = names.toUpperCase;
};

$(document).ready(function() {
  $(nameEnter).fadeIn(2000);
  $(btnName).click(function() {
    if ($("input").val() == 0) {
      $("input").css({
        backgroundColor: "red"
      });
      return;
    } else {
      $("input").css({
        backgroundColor: "green",
        color: "white"
      });
      $(nameEnter).slideUp();
      namePlayers();
      $(namePlayer).slideToggle();
      $(answersBox).slideToggle();
      $(questionsBox).slideToggle();
      $(countQuestion).slideToggle();
      firstQuestion();
      firstAnswer();
      $("footer").hide();
    }
  });
});

let element = () => {
  for (let i = 0; i < 4; i++) {
    let divs = document.createElement("div");
    answersBox.appendChild(divs);
    divs.classList.add("answersDiv");
  }
};
element();

let current = 0;
let addPoints = () => {
  current++;
  points.innerHTML = `Points: ${current}/11`;
};

let countQuestDiv = document.getElementById("questionP");
let currentQuestionCount = 0;
let questCounting = () => {
  currentQuestionCount++;
  countQuestDiv.innerHTML = `Question: ${currentQuestionCount}/11`;
};

let resetQuestion = () => {
  for (let i = 0; i < question.length; i++) {
    question[i].style.display = "none";
  }
};

let currentQuestion = 0;
let firstQuestion = () => {
  question[currentQuestion].style.display = "block";
  questCounting();
};

let nextQuestion = () => {
  resetQuestion();
  if (currentQuestion === question.length - 1) {
    return;
  }
  question[currentQuestion + 1].style.display = "block";
  currentQuestion++;
};

let currentAnswer = 0;
let divAnswer = document.getElementsByClassName("answersDiv");
let firstAnswer = () => {
  for (let i = 0; i < answers[currentAnswer].length; i++) {
    divAnswer[i].innerHTML = answers[currentAnswer][i];
  }
};

let nextAnswer = () => {
  if (currentAnswer == answers.length - 1) {
    $(".answersDiv").hide();
    $(".col-xl-10").css({
      display: "none"
    });
    $(theEnd).fadeIn();
    theEndSummary();
    opinions();
    return;
  }
  for (let i = 0; i < answers[currentAnswer + 1].length; i++) {
    divAnswer[i].innerHTML = answers[currentAnswer + 1][i];
  }
  currentAnswer++;
};

let resetColor = () => {
  $(".answersDiv").css({
    backgroundColor: "#040472"
  });
};

let opinionForPlayer = document.getElementById("opinion");
let opinions = () => {
  if (current <= 6) {
    $("body").css({
      background: "#ea2d00"
    });
    opinionForPlayer.innerHTML = "Your score is low :/";
  } else if (current <= 8) {
    $("body").css({
      background: "#f79800"
    });
    opinionForPlayer.innerHTML = "Your score quite okay!";
  } else {
    $("body").css({
      background: "#2ff700"
    });
    opinionForPlayer.innerHTML =
      "Nice ! You have good knowledge about peaks ! Respect !";
  }
};

let namePlayerEnd = document.getElementById("playerEnd");
let scoreEnd = document.getElementById("score");
let theEndSummary = () => {
  namePlayerEnd.innerHTML = "Dear Player: " + playerName.value;
  let upper = namePlayerEnd.toUpperCase;
  scoreEnd.innerHTML = "Your Score is: " + current;
  $(playerEnd).show();
  $(score).fadeIn();
};

$(document).ready(function() {
  $(".answersDiv").click(function() {
    if (correctAnswers.includes($(this).text())) {
      $(this).css({
        background: "#00d400"
      });
      addPoints();
    } else {
      $(this).css({
        background: "red"
      });
    }

    setTimeout(function() {
      questCounting();
      resetColor();
      nextQuestion();
      nextAnswer();
    }, 800);
  });
});
