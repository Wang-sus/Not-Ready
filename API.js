const API = {
  get game() { return document.getElementById('game').contentWindow },
  get lesson() { return document.getElementById('html5Iframe').contentWindow.parent.lessonBridge }
}