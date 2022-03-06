var UI = document.createElement("div");
UI.innerHTML = `
	<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:200px; width:200px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Hacks</center></h1>
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
          
          <button onclick="fc()" class="button">Lesson $kipper</button>
          <br>
          <br>
          <button onclick="fc()" class="button">Minute F@rm</button>
          <br>
          <br>
          <button onclick="tl()" class="button">Top leaderboard</button>
          <br>
          <br>

	</div>`
dragElement(UI.firstElementChild);
document.body.appendChild(UI);

var UI = document.createElement("div");
UI.innerHTML = `
	<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:200px; width:200px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Visual</center></h1>
    <h1 style="font-size: 15px;"><center>press ctrl+X to hide menu</center></h1>
          <button onclick="custombackground()" class="button">Background Changer</button>
          <br>
          <br>
          <button onclick="tc()" class="button">Title Changer</button>
          <br>
          <br>
          <button onclick="fc()" class="button">Icon Changer</button>
          <br>
          <br>

	</div>`
dragElement(UI.firstElementChild);
document.body.appendChild(UI);

var UI = document.createElement("div");
UI.innerHTML = `
	<div id="LoL" class="Lol" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:200px; width:200px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 25px;"><center>Games</center></h1>
    <h1 style="font-size: 15px;"><center>press ctrl+X to hide menu</center></h1>
          <button onclick="fc()" class="button">Free Games</button>
          <br>
          <br>

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


document.body.appendChild(UI)
document.addEventListener("keydown", function(e) {
        e.ctrlKey && "x" == e.key && ("block" == LoL.style.display ? LoL.style.display = "none" : LoL.style.display = "block")
})
