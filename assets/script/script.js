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

  var answer = prompt("Si? No? Tal vez?").toLowerCase()
/* .toLowerCase IS BEST PRACTICE! IT'S ALSO OK IF YOU TYPE THE FIRST LETTER INSTEAD OF THE WORD! */
  if (answer == "si" || answer == 'sipi' || answer == 'chi') {
    $('body').children().hide();
    title.textContent = "Sabia que dirias que si! uwu";
    $('#title').show();
    $('#answer-yes').css('display', 'flex');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    yipee.play();



  } else if (answer == "tal vez" || answer == 'maybe') {
    body.addClass("maybe")
/* I WANTED THE BG TO CHANGE BEFORE THE ALERT AND THE IMAGE AFTER THE PROMPT AND THE NEXT PROMPT AFTER THAT! I LEARNED THAT IF ALERT AD IMAGE ARE NOT IN THE setTimeout TOGETHER, IT DOES THEM AT THE SAME TIME. */
    setTimeout(beardedBoo, 6000)
    setTimeout(function() {
      alert("Perhaps you are not aware of the many benefits")
      image.addClass("benefits")
    }, 200)
/* HEY!!! */
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
