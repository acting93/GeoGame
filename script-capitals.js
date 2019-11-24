$(window).resize(function() {
  if ($(window).width() < 250) {
    $("header").css({
      height: "auto"
    });
    $("h2").css({
      fontSize: "16px"
    });
    $("h3").css({
      fontSize: "14px"
    });
    $("p").css({
      fontSize: "12px"
    });
    $(usernames).css({
      fontSize: "15px"
    });
    $(".col-md-10").css({
      height: "100px",
      fontSize: "20px"
    });
    $("img").css({
      width: "80%",
      height: "60px"
    });
    $(".answers").css({
      width: "100%",
      height: "25px",
      fontSize: "10px",
      lineHeight: "25px"
    });
    $(".btn").css({
      width: "80%",
      height: "30px",
      marginTop: "10%",
      lineHeight: "10px"
    });
    $(startGame).css({
      width: "80%",
      height: "40px",
      marginTop: "10%",
      fontSize: "15px",
      lineHeight: "20px"
    });
    $(clickEnd).css({
      width: "80%",
      height: "40px",
      marginTop: "10%",
      fontSize: "15px"
    });
    $(".country").css({
      height: "120px"
    });
    $("input").css({
      width: "80%",
      height: "30px",
      fontSize: "10px"
    });
    $(".ending").css({
      height: "auto"
    });
    $(informations).css({
      fontSize: "14px",
      marginBottom: "25px"
    });
  } else if ($(window).width() < 500) {
    $("header").css({
      height: "auto"
    });
    $("h2").css({
      fontSize: "20px"
    });
    $("h3").css({
      fontSize: "18px"
    });
    $("p").css({
      fontSize: "16px"
    });
    $(".col-md-10").css({
      height: "200px",
      fontSize: "30px"
    });
    $("img").css({
      width: "50%",
      height: "100px"
    });
    $(".answers").css({
      width: "100%",
      height: "45px",
      fontSize: "15px",
      lineHeight: "45px"
    });
    $(".btn").css({
      width: "70%",
      height: "30px",
      marginTop: "10%",
      lineHeight: "10px"
    });
    $(startGame).css({
      width: "70%",
      height: "40px",
      marginTop: "10%",
      fontSize: "15px",
      lineHeight: "20px"
    });
    $(clickEnd).css({
      width: "60%",
      height: "40px",
      marginTop: "10%",
      fontSize: "15px"
    });
    $("input").css({
      width: "70%",
      height: "40px",
      fontSize: "15px"
    });
    $(".country").css({
      height: "180px"
    });
    $(usernames).css({
      fontSize: "25px"
    });
    $(".ending").css({
      height: "auto"
    });
    $(informations).css({
      fontSize: "18px",
      marginBottom: "25px"
    });
    $(capitalPhoto).hide();
  } else {
    $("header").removeAttr("class");
    $("h2").removeAttr("style");
    $("h3").removeAttr("style");
    $("p").removeAttr("style");
    $("img").removeAttr("style");
    $(".answers").removeAttr("style");
    $(".btn").removeAttr("style");
    $("input").removeAttr("style");
    $("ending").removeAttr("style");
    $(imgfooter).removeAttr("style");
    $(startGame).css({
      width: "300px",
      height: "90px"
    });
    $(clickEnd).css({
      width: "300px",
      height: "90px",
      fontSize: "35px"
    });
    $(informations).removeAttr("style");
    $(".country").css({
      height: "400px"
    });
    $(capitalPhoto).show();
  }
});
let name = document.getElementById("placeName");
let usernames = document.getElementById("username");
let confirm = document.getElementById("confirm");
let startQuizes = document.getElementById("startQuiz");
let startGame = document.getElementById("startGame");
let playerPoint = document.getElementById("playerPoints");
let nameGamer = document.getElementById("namePlayer");
let questionFlags = document.getElementById("questionsFlag");
let point = document.getElementById("points");
let informations = document.getElementById("information");

let welcome = () => {
  if ($("input").val() == 0) {
    $("input").css({
      background: "#ac0000"
    });
    return;
  } else {
    $("header").toggle();
    usernames.innerHTML += "Welcome " + name.value;
    $(startQuizes).slideDown(2000);
    nameGamer.innerHTML += " " + name.value;
    startGame.style.display = "block";
    $(firstTemplate).fadeOut(1000);
    $(background).css({
      display: "none"
    });
  }
};

confirm.addEventListener("click", welcome);

$(document).ready(function() {
  $(startGame).on("click", function() {
    $(".col-xl-10").fadeIn(1000);
    $(startGame).fadeOut(700);
    $(startQuizes).fadeOut(700);
    playerPoint.style.display = "block";
    letsStart();
    $("header").show();
  });
});

let divs = () => {
  for (let i = 0; i < 4; i++) {
    newDiv = document.createElement("div");
    questionFlags.appendChild(newDiv).classList.add("answers");
  }
};
divs();
$(document).ready(function() {
  $(".answers")
    .mouseover(function() {
      $(this).css({
        backgroundColor: "#0000a7",
        color: "#ffffff"
      });
    })
    .mouseleave(function() {
      $(this).css({
        backgroundColor: "#060b33",
        color: "#ffffff"
      });
    });
});

const capitals = [
  ["Jaunde", "Douala", "Garoua", "Kousséri"],
  ["Guayaquil", "Santo Domingo", "Cuenca", "Quito"],
  ["Ulan Bator", "Erdenet", "Darchan", "Czojbalsan"],
  ["Al Hudaydah", "Sana", "Aden", "Taiz"],
  ["Montego Bay", "Spanish Town", "Kingston", "Portmore"],
  ["Osz", "Bishkek", "Jalal-Abad", "Özgön"],
  ["Pyongyang", "Hamhung", "Chongjin", "Nampo"],
  ["Mandalay", "Bago", "Yangon", "Naypyidaw"],
  ["Bitola", "Kumanovo", "Skopje", "Prilep"],
  ["León", "Masaya", "Managua", "Matagalpa"],
  ["Molepolole", "Gaborone", "Francistown", "Maun"],
  ["Thimphu", "Phuntsholing", "Paro", "Gelephu"],
  ["Hargeisa", "Mogadishu", "Bosaso", "Galkayo"],
  ["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi"],
  ["Karaganda", "Shymkent", "Astana", "Almaty"],
  ["Dar es Salaam", "Mwanza", "Arusha", "Dodoma"],
  ["Seoul", "Incheon", "Daegu", "Busan"],
  ["Bo", "Kenema", "Makeni", "Freetown"],
  ["Baku", "Sumqayit", "Ganja", "Mingachevir"],
  ["Montevideo", "Salto", "Ciudad de la Costa", "Paysandú"],
  ["Maharagama", "Colombo", "Kaduwela", "Sri Jayawardenepura Kotte"],
  ["Bimbo", "Berbérati", "Carnot", "Bangui"],
  ["Karachi", "Islamabad", "Lahore", "Faisalabad"],
  ["Nicosia", "Limassol", "Strovolos", "Larnaca"],
  ["Adama", "Addis Ababa", "Gondar", "Mek'ele"]
];
const correctAnswers = [
  "Jaunde",
  "Quito",
  "Ulan Bator",
  "Sana",
  "Kingston",
  "Bishkek",
  "Pyongyang",
  "Naypyidaw",
  "Skopje",
  "Managua",
  "Gaborone",
  "Thimphu",
  "Mogadishu",
  "Brazzaville",
  "Astana",
  "Dodoma",
  "Seoul",
  "Freetown",
  "Baku",
  "Montevideo",
  "Sri Jayawardenepura Kotte",
  "Bangui",
  "Islamabad",
  "Nicosia",
  "Addis Ababa"
];

const answerDiv = document.getElementsByClassName("answers");

let current = 0;
let countAdd = () => {
  current++;
  point.innerHTML = `Points: ${current}`;
};
let colorOfScore = () => {
  if (current <= 15) {
    $("header").css({
      backgroundColor: "#fc1515"
    });
    informations.innerHTML =
      "uuuu better don't look at the screen and take a map to your hand....";
  } else if (current <= 21) {
    $("header").css({
      backgroundColor: "#ffd800"
    });
    informations.innerHTML =
      "Quite okay but you exactly know that could be better....so open the map and learn";
  } else {
    $("header").css({
      backgroundColor: "#00ff00"
    });
    informations.innerHTML = "You are very good !";
  }
};
let currentDiv = 0;
let currentQuestion = 0;

let question = document.getElementsByClassName("country");
let reset = () => {
  for (let i = 0; i < question.length; i++) {
    question[i].style.display = "none";
  }
};

let letsStart = () => {
  question[0].style.display = "block";
};

let addCountsOnTheEnd = () => {
  let placeForScore = document.getElementsByTagName("h3");
  placeForScore.innerHTML += current;
};

let nextQuestion = () => {
  reset();
  if (currentQuestion == question.length - 1) {
    return;
  }
  question[currentQuestion + 1].style.display = "block";
  currentQuestion++;
};

let currentCapitals = 0;

let nextAnswer = () => {
  if (currentCapitals == capitals.length) {
    $(questionFlags).hide();
    $("header").css({
      backgroundColor: "red"
    });
    $(".ending").show();
    colorOfScore();
    return;
  }
  for (let i = 0; i < capitals[currentCapitals].length; i++) {
    answerDiv[i].innerHTML = capitals[currentCapitals][i];
  }
  currentCapitals++;
};
nextAnswer();
let resetColor = () => {
  $(".answers").css({
    backgroundColor: "#060b33"
  });
};
$(document).ready(function() {
  $(".answers").on("click", function() {
    if (correctAnswers.includes($(this).text())) {
      $(this).css({
        backgroundColor: "green"
      });
      countAdd();
    } else {
      $(this).css({
        backgroundColor: "red"
      });
    }
    setTimeout(function() {
      resetColor();
      nextQuestion();
      nextAnswer();
    }, 800);
  });
});
