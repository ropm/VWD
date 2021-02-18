const SIZE = 1000;
const HOUSES=[];
var CURRENT = "Moving"
var DELTA = [];
var SCREENX = [];
var POINTX;
var SCREENY = [];
var POINTY;
var CURRENT_BULLET = 1;
var SCORE_TABLE;
var TOTAL_SCORE = 0;

function main() {
    document.getElementById("scopeMoving").style.display = "inline"
    document.getElementById("targetMoving").style.display = "inline"
    SCORE_TABLE = document.getElementById("scoreTable");

    animate();setInterval(calcDelta, 20);
}

function addScore(hit){

    
    if (CURRENT_BULLET > 10) {
        console.log("no bullets left")
        return
    }
    // Kun on ammuttu yli 5, siirrytään pistetaulukossa alemmalle riville, muussa tapauksessa pisteet kirjataan ylemmälle riville.
    if (hit) {
        if (CURRENT_BULLET > 5) { 
            SCORE_TABLE.children[0].children[2].children[CURRENT_BULLET-6].innerHTML = 1;
        } else {
            SCORE_TABLE.children[0].children[1].children[CURRENT_BULLET].innerHTML = 1;
        }
        SCORE_TABLE.children[0].children[1].children[6].innerHTML + 1;
        TOTAL_SCORE++;
    } else {
        if (CURRENT_BULLET > 5) { 
            SCORE_TABLE.children[0].children[2].children[CURRENT_BULLET-6].innerHTML = 0;
        } else {
            SCORE_TABLE.children[0].children[1].children[CURRENT_BULLET].innerHTML = 0;
        } 
    }

    var bulletImg = document.createElement("img")
    bulletImg.src = "bullet.svg"

    SCORE_TABLE.children[0].children[1].children[6].innerHTML = TOTAL_SCORE;

    document.getElementById("scoreTable").children[0].children[0].children[1].innerHTML = "<img src=\"bullet.svg\">" + `  ${10 - CURRENT_BULLET}` + "/10"
    CURRENT_BULLET++;

}

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;
    
    event = event || window.event;
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 ); //https://stackoverflow.com/questions/4983398/mouse-movement-problem-on-a-webpage-javascript/4983426#4983426
    }

    scope = document.getElementById("scope" + CURRENT);
    scope.style.margin = event.pageY + "px 0% 0% " + event.pageX + "px";
    POINTX = event.pageX;
    POINTY = event.pageY;
}

function calcDelta() {
    if (SCREENX.length < 6) {
        SCREENX.push(POINTX);
        SCREENY.push(POINTY);
        return;
    }
    SCREENX.unshift(POINTX);
    SCREENY.unshift(POINTY);
    SCREENX.pop();
    SCREENY.pop();
    DELTA = [SCREENX[0] - SCREENX[5],SCREENY[0] - SCREENY[5]]
    document.getElementById("SX").innerHTML = DELTA[0];
    document.getElementById("SY").innerHTML = DELTA[1];
}

function animate() {
    //window.requestAnimationFrame(animate);
}

function changePistol() {
    CURRENT = "Pistol";
    document.getElementById("scopePistol").style.display = "inline";
    document.getElementById("targetPistol").style.display = "inline";

    document.getElementById("scopeStatic").style.display = "none";
    document.getElementById("targetStatic").style.display = "none";
    document.getElementById("scopeMoving").style.display = "none";
    document.getElementById("targetMoving").style.display = "none";
    document.getElementById("frameMoving").style.display = "none";
}

function changeStatic() {
    CURRENT = "Static";
    document.getElementById("scopeStatic").style.display = "inline";
    document.getElementById("targetStatic").style.display = "inline";

    document.getElementById("scopePistol").style.display = "none";
    document.getElementById("targetPistol").style.display = "none";
    document.getElementById("scopeMoving").style.display = "none";
    document.getElementById("targetMoving").style.display = "none";
    document.getElementById("frameMoving").style.display = "none";
}

function changeMoving() {
    CURRENT = "Moving";
    document.getElementById("scopeMoving").style.display = "inline";
    document.getElementById("targetMoving").style.display = "inline";
    document.getElementById("frameMoving").style.display = "inline";

    document.getElementById("scopePistol").style.display = "none";
    document.getElementById("targetPistol").style.display = "none";
    document.getElementById("scopeStatic").style.display = "none";
    document.getElementById("targetStatic").style.display = "none";
}