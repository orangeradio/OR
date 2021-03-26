

//cursor orange

$(document).mousemove(function (e) {
  $(".pointer").css({ left: e.pageX, top: e.pageY });
});


$(".twitch-window").hover(function(){
  $(".pointer").css("opacity", "0");
  }, function(){
  $(".pointer"). css("opacity", "100");
});

$(".chat-window").hover(function(){
  $(".pointer").css("opacity", "0");
  }, function(){
  $(".pointer"). css("opacity", "100");
});

$(".radio-window").hover(function(){
  $(".pointer").css("opacity", "0");
  }, function(){
  $(".pointer"). css("opacity", "100");
});


//desktop start menu

const button = document.querySelector(".start-btn")
const closeMenu = document.querySelector(".desktop")
const menu = document.querySelector(".start-menu")

button.addEventListener('click', function() {
	menu.classList.toggle("open")
	menu.classList.remove("close")
})

closeMenu.addEventListener('click', function() {
	menu.classList.add("close")
	menu.classList.remove("open")
})


//desktop draggables

$( function() {
  $( "#draggable1" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
    });
    $( "#draggable2" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
    });
    $( "#draggable3" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable4" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable5" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable6" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
    $( "#draggable7" ).draggable({ 
      containment: "#containment-wrapper", 
      scroll: false 
      });
  });

$(function () {
  $(".drag").draggable({            
    stack: ".drag"
  });
});


// Clock //

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  h = h % 12;
  h = h ? h : 12;
  m = checkTime(m);
  document.getElementById('time-s').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}


var dateObj = new Date();
var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
var date = ('0' + dateObj.getDate()).slice(-2);
var year = dateObj.getFullYear();
var shortDate = year + '/' + month + '/' + date;
document.getElementById('date-s').innerHTML =
  month + "/" + date + "/" + year;

//desktop open and close windows

$(document).ready(function(){
  $("#exit-about").click(function(){
    $(".about-window").hide();
  });
  $("#about-icon").click(function(){
    $(".about-window").show();
  });

  $("#exit-archive").click(function(){
    $(".archive-window").hide();
  });
  $("#archive-icon").click(function(){
    $(".archive-window").show();
  });

  $("#exit-radio").click(function(){
    $(".radio-window").hide();
  });
  $("#radio-icon").click(function(){
    $(".radio-window").show();
  });

  $("#exit-shop").click(function(){
    $(".shop-window").hide();
  });
  $("#shop-icon").click(function(){
    $(".shop-window").show();
  });

  $("#exit-chat").click(function(){
    $(".chat-window").hide();
  });
  $("#chat-icon").click(function(){
    $(".chat-window").show();
  });

  $("#exit-contact").click(function(){
    $(".contact-window").hide();
  });
  $("#contact-icon").click(function(){
    $(".contact-window").show();
  });

  $("#exit-twitch").click(function(){
    $(".twitch-window").hide();
  });
  $("#twitch-icon").click(function(){
    $(".twitch-window").show();
  });
});


