// creates UI
var UI = document.createElement("div");
UI.innerHTML = `
		<div id="Menu" class="Menu" style="border: 1px solid #1e2124; opacity: 0.9; border-radius: 5px; width:200px; width:200px; left: 740px; top: 100px; background-color: #2C2F33; color: white; position:absolute; z-index: 99999;">
		<h1 style="font-size: 32px;"><center>Lesson</center></h1>
		<br>
		<head>
<style>
.Menu {
  --borderWidth: 3px;
  background: #000000;
  position: relative;
  border-radius: var(--borderWidth);
}
.Menu:after {
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
		<button onclick="TM()" class="button">Enable Teacher Menu</button>
		<br>
		<br>
		<br>
	</div>`

// shamelessly stolen from https://www.w3schools.com/howto/howto_js_draggable.asp
//Make the DIV element draggagle:
dragElement(UI.firstElementChild);
document.body.appendChild(UI);

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
function TM() {
  var cheats = document.getElementsByTagName('iframe')[0].contentWindow.localStorage.cheats;
    cheats = "{\"showMenu\":false}";
}
