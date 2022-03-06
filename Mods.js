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
