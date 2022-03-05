var UI = document.createElement("div");
UI.innerHTML = `
	<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:200px; width:200px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Visual</center></h1>
    <h1 style="font-size: 15px;"><center>press ctrl+X to hide menu</center></h1>
<head>
<style>
.LoL {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
  border-radius: var(--borderWidth);
}
.LoL:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(60deg, #36393e, #1e2124, #282b30);
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.button {
  border: none;
  color: white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  color: black; 
  background-color:#6d80c4;
}
.button:hover {
  background-color:#abb4ff;
}
.button:active {
  box-shadow: 0 2px #666;
  transform: translateY(2px);
  background-color: #7d8bfa;
}
</style>
</head>
          <button onclick="custombackground()" class="button">Background Changer</button>
          <br>
          <br>
          <button onclick="tc()" class="button">Title Changer</button>
          <br>
          <br>
          <button onclick="fc()" class="button">Icon Changer</button>
          <br>
          <br>
          <h1 style="font-size: 25px;"><center>Hacks</center></h1>
          
          <button onclick="fc()" class="button">Lesson $kipper</button>
          <br>
          <br>
          <button onclick="fc()" class="button">Minute F@rm</button>
          <br>
          <br>
          <button onclick="tl()" class="button">Top leaderboard</button>
          <br>
          <br>
          <h1 style="font-size: 25px;"><center>Games</center></h1>
          
          


	</div>`
dragElement(UI.firstElementChild);
document.body.appendChild(UI);
//drag
function dragElement(e) {
    let t = 0,
        n = 0,
        o = 0,
        s = 0;
    function i(e) {
        (e = e || window.event)
        .preventDefault(), o = e.clientX, s = e.clientY, document.onmouseup = c, document.onmousemove = r
    }
    function r(i) {
        (i = i || window.event)
        .preventDefault(), t = o - i.clientX, n = s - i.clientY, o = i.clientX, s = i.clientY, e.style.top = e.offsetTop - n + "px", e.style.left = e.offsetLeft - t + "px"
    }
    function c() {
        document.onmouseup = null, document.onmousemove = null
    }
    document.getElementById(e.id + "header") ? document.getElementById(e.id + "header")
        .onmousedown = i : e.onmousedown = i
}


//custom background

function customtheme() {
document.getElementById("ThemeLayoutWrapper").innerHTML = '<span type="grid"><button tabindex="0" aria-label="Custom background" aria-current="true" class="css-1wz223u e755wfp0"><img src = bg class="CbackgroundImg" id="Background" alt="Custom"></button></span>'
}


function custombackground() {
let bc = prompt("Please put the image URL in the box");
setInterval(function() {
document.getElementById("background-image").src=bc;
customtheme()
document.getElementById("Background").src = document.getElementById("background-image").src;
}, 5000);
customtheme()
document.getElementById("background-image").src=bc;
document.getElementById("Background").src = document.getElementById("background-image").src;
}


//title changer
function tc() {
var o = prompt("Custom Title! Please put the title into the box below!")
document.title =o;
}
//favicon changer
function fc() {
var ffc = prompt('Custom Icon! Please put the image link in the box below!')
document.querySelector("link[rel*='icon']").href =ffc;
}

//top leaderboard
function tl() {
fetch("https://login.i-ready.com/student/fieldtrips/updateScore", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "referrer": "https://login.i-ready.com/student/dashboard/home",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"fieldtripId\":\"203\",\"score\":2147483647}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}
document.body.appendChild(UI)
document.addEventListener("keydown", function(e) {
        e.ctrlKey && "x" == e.key && ("block" == LoL.style.display ? LoL.style.display = "none" : LoL.style.display = "block")
})

const API = {
  get game() { return document.getElementById('game').contentWindow },
  get lesson() { return document.getElementById('html5Iframe').contentWindow.parent.lessonBridge }
}
