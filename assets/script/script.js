const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 100)+"vw";
    heart.style.animationDuration = (Math.random()*3)+2+"s"
    body.appendChild(heart);
}

setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
       heartArr[0].remove()
    }
    //console.log(heartArr);
},100)


var beardedBoo = function() {

  var backgroundMusic = document.getElementById("background-music");
  var boomSound = document.getElementById("vine-boom");
  var yipee = document.getElementById("yipee");
  var title = document.getElementById("titletext");
  yipee.volume = 0.3;
  boomSound.volume = 0.3;

  var answer = prompt("Quieres pasar San Valentin conmigo?\nSi? o No? ").toLowerCase()
/* .toLowerCase IS BEST PRACTICE! IT'S ALSO OK IF YOU TYPE THE FIRST LETTER INSTEAD OF THE WORD! */
  if (answer == "si" || answer == 'sipi' || answer == 'chi') {
    $('body').children().hide();
    title.textContent = "Sabia que dirias que si! uwu";

    $('#content-text').show();
    $('#title').show();
    $('#answer-yes').css('display', 'flex');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    yipee.play();



  } else {
    $('body').children().hide();
    $('#answer-no').css('display', 'block');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    boomSound.play();
    

    $('#background-music').stop();
    setTimeout(beardedBoo, 3000)
  }
}

$(document).ready(function () {
  var audio = document.getElementById("background-music");
  audio.volume = 0.1;
  var kiss = document.getElementById("kiss");
  kiss.volume = 0.5;
  

  $(document).one('click', function () {
    audio.play();
  });

  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-10px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: "5px",
        },
        "slow"
      );
    })
    .click(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
      setTimeout(beardedBoo, 800)
    });

    $('#emoji2')
    .click(function(){
      $('#emoji2').attr("src", "assets/images/emoji4.webp")
      kiss.play();
      
      setTimeout(function(){
      $('#emoji2').attr("src", "assets/images/emoji2.webp");
      }, 800);
    })
    .mouseenter(function(){
      $(this).css("transform", "scale(0.7)");
    })
    .mouseleave(function(){
      $(this).css("transform", "scale(0.6)");
    })

    $('#emoji3')
    .click(function(){
      $('#emoji3').attr("src", "assets/images/emoji4.webp")
      kiss.play();
      
      setTimeout(function(){
      $('#emoji3').attr("src", "assets/images/emoji3.webp");
      }, 800);
    })
    .mouseenter(function(){
      $(this).css("transform", "scale(0.7)");
    })
    .mouseleave(function(){
      $(this).css("transform", "scale(0.6)");
    })


    $("#show-content-button")
    .mouseenter(function () {
      $(this).attr("src", "https://stickercommunity.com/uploads/main/29-09-2020-21-10-03-abc15.webp")
      $(this).css("transform", "scale(1.1)");
    })
    .mouseleave(function () {
      $(this).css("transform", "scale(1)");
      $(this).attr("src", "https://stickercommunity.com/uploads/main/29-09-2020-21-10-03-abc0.webp")
    })
    
    .click(function () {
      $("#content").show();
      $("#content").css("display", "flex");
      $("#title").css("display", "block");
      $(this).hide();
      setInterval(createHeart,100);
    });
});
