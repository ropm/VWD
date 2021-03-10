const SIZE = 1000;
const ANIMATE_SPEED = 16; // requestAnimationFrame updates 60 times/second, setInterval has min of 10 ms, so 1/60 * 1000
const INNER_RECT_WIDTH_PERCENTAGE = 0.792115;
var CURRENT = "Moving"
var DELTA = [];
var SCREENX = [];
var POINTX;
var SCREENY = [];
var POINTY;
var SWAYY = -300;  // how much sway on y-axle
var SWAYX = -300; // how much sway on x-axle
var CURRENT_BULLET = 1;
var SCORE_TABLE;
var TOTAL_SCORE = 0;
var LAST_SHOT = 10;
var SWAY_BOOL
//var first = 0;
var shots = [];


let interval = null;
setInterval(setSway, 10);
setInterval(setTime, 1000);

function setTime() {
  ++LAST_SHOT;
}

function setSway(){
    if (SWAYY > -300){
        --SWAYY;
    }
    if (SWAYX > -300){
        --SWAYX;
    }
}

function main() {
    document.getElementById("scopeMoving").style.display = "inline"
    document.getElementById("targetMoving").style.display = "inline"

    SCORE_TABLE = document.getElementById("scoreTable");
    SCORE_TABLE.children[0].children[1].children[6].innerHTML = TOTAL_SCORE;

    if (localStorage.getItem("movingScore") != null) {
        SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("movingScore");
    } else {
        SCORE_TABLE.children[0].children[1].children[7].innerHTML = 0;
    }

    animate(); 
    setInterval(calcDelta, 20);
    drawShot(false);
}

function addScore(hit){
    // nollataan tieto viimeisimmästä laukauksesta
    LAST_SHOT = 0
    SWAYY = Math.floor(Math.random() * 1800) + 1000;
    //SWAYY = 2000

    SWAYX = (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * 100) + 1;
    //SWAYX = 500
    
    if (CURRENT_BULLET > 10) {
        console.log("no bullets left")
        return
    }
    // Kun on ammuttu yli 5, siirrytään pistetaulukossa alemmalle riville, muussa tapauksessa pisteet kirjataan ylemmälle riville.

    score = getScore();
    if (CURRENT_BULLET > 5) { 
        SCORE_TABLE.children[0].children[2].children[CURRENT_BULLET-6].innerHTML = score;
    } else {
        SCORE_TABLE.children[0].children[1].children[CURRENT_BULLET].innerHTML = score;
    }
    TOTAL_SCORE += score;

    var bulletImg = document.createElement("img")
    bulletImg.src = "bullet.svg"

    SCORE_TABLE.children[0].children[1].children[6].innerHTML = TOTAL_SCORE;

    document.getElementById("scoreTable").children[0].children[0].children[1].innerHTML = "<img src=\"bullet.svg\">" + `  ${10 - CURRENT_BULLET}` + "/10"
    CURRENT_BULLET++;

    if (CURRENT_BULLET > 10) {
        console.log(localStorage.getItem("movingScore"))
        if (CURRENT == "Moving") {
            console.log("moving", localStorage.getItem(parseInt("movingScore")))
            if (localStorage.getItem(parseInt("movingScore")) < TOTAL_SCORE || localStorage.getItem(parseInt("movingScore") != null)) {
                localStorage.setItem("movingScore", TOTAL_SCORE);
                SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("movingScore");
            } 
        } else if (CURRENT == "Pistol") {
            console.log("pistol")
            if (localStorage.getItem(parseInt("pistolScore")) < TOTAL_SCORE) {
                localStorage.setItem("pistolScore", TOTAL_SCORE);
                SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("pistolScore");
            } 
        } else if (CURRENT == "Static") {
            console.log("static")
            if (localStorage.getItem(parseInt("staticScore")) < TOTAL_SCORE) {
                localStorage.setItem("staticScore", TOTAL_SCORE);
                SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("staticScore");
            } 
        }
    }
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

    //scope.style.margin = event.pageY + "px 0% 0% " + event.pageX + "px";
    POINTX = event.pageX;
    POINTY = event.pageY;
}

function scopeX(a, b, c) {
    return (a + (-b.width / 2) + (b.width * c));
}

function getScore() {
    var BB = document.getElementById("target" + CURRENT).getBoundingClientRect();
    var sMoving = document.getElementById("scopeMoving").getBoundingClientRect();
    var sNotMov = document.getElementById("scope" + CURRENT).getBoundingClientRect(); //getBoundingClientRect tells x, y, right up, left, bottom, 
    var middle = [BB.left + (BB.width / 2), BB.top + BB.height * 0.69523469387755102040816326530612];
    var mmToPx = 310 / BB.width;

    pistolScore = [11.5,    27.5,   43.5,   59.5,   75.5,   91.5,   107.5,  123.5,  139.5,  155.5];
    staticScore = [0.5,     5.5,    10.5,   15.5,   20.5,   25.5,   30.5,   35.5,   40.5,   45.5];
    movingScore = [5.5,     10.5,   15.5,   20.5,   25.5,   30.5,   35.5,   40.5,   45.5,   50.5];

    //Not final before target is moving
    if (CURRENT == "Moving") {
        if (CURRENT_BULLET % 2 == 0) {
            dist = Math.sqrt(Math.pow((POINTX + (-sMoving.width / 2) + (sMoving.width * 0.374998835) - middle[0]), 2) + Math.pow((POINTY - middle[1]), 2)) * mmToPx; //to right 0.374998835
        } else {  
            dist = Math.sqrt(Math.pow((POINTX + (-sMoving.width / 2) + (sMoving.width * 0.608331236) - middle[0]), 2) + Math.pow((POINTY - middle[1]), 2)) * mmToPx; //to left 0.608331236
        }
    } else {
        dist = Math.sqrt(Math.pow((sNotMov.left + sNotMov.width / 2 - middle[0]),2) + Math.pow((sNotMov.top + sNotMov.height / 2 - middle[1]),2)) * mmToPx;
    }

    if (CURRENT == "Moving") {
        if (CURRENT_BULLET % 2 == 0) {
            shots.push([POINTX + (-sMoving.width / 2) + (sMoving.width * 0.374998835) - middle[0], POINTY - middle[1]]); //to right 0.374998835
        } else {  
            shots.push([POINTX + (-sMoving.width / 2) + (sMoving.width * 0.608331236) - middle[0], POINTY - middle[1]]); //to left 0.608331236
        }
    } else {
        shots.push([sNotMov.left + sNotMov.width / 2 - middle[0], sNotMov.top + sNotMov.height / 2 - middle[1]]);
    }

    //console.log(middle);
    //console.log(POINTX + " " + POINTY + " " + mmToPx + " " + dist);
    drawShot(true);
    
    console.log(dist);

    switch (CURRENT) {
        case "Pistol":
            for (let i = 0; i < pistolScore.length; i++) {
                if (dist - 2.25 <= pistolScore[i] / 2) {
                    return 10 - i;
                }
            }
            break;
        case "Static":
            for (let i = 0; i < staticScore.length; i++) {
                if (dist - 2.25 <= staticScore[i] / 2) {
                    return 10 - i;
                }
            }
            break;
        case "Moving":
            for (let i = 0; i < movingScore.length; i++) {
                if (dist - 2.25 <= movingScore[i] / 2) {
                    return 10 - i;
                }
            }
            break;
        default:
            //failure
            break;
    }
    return 0;
}

function updateMouse (x, y) {
    scope = document.getElementById("scope" + CURRENT);
    var BB = document.getElementById("scope" + CURRENT).getBoundingClientRect();
    var xScope = x - BB.width / 2;
    var yScope = y - BB.height / 2;
    scope.style.transform = `translate(` + xScope + `px, ` + yScope + `px)`;
}

doElsCollide = function(el1, el2) {
    // Palauttaa boolean, jos divit päälekkäin https://stackoverflow.com/questions/9607252/how-to-detect-when-an-element-over-another-element-in-javascript
    el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
    el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
    el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
    el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
    
    return !((el1.offsetBottom < el2.offsetTop) ||
             (el1.offsetTop > el2.offsetBottom) ||
             (el1.offsetRight < el2.offsetLeft) ||
             (el1.offsetLeft > el2.offsetRight))
};

function swayMouse (a) { 
    if (CURRENT != "Moving" && SWAY_BOOL == true) {
        
        const noiseX = (noise.simplex3(2, 0, a*0.0004) + 1) / 2;
        const noiseY = (noise.simplex3(20, 0, a*0.0004) + 1) / 2;
        const x = (POINTX + noiseX * -(SWAYX/10));
        const y = (POINTY + noiseY * -(SWAYY/10));
        updateMouse(x, y)          
            
        
    }else{
        updateMouse(POINTX, POINTY)
    }
    document.getElementById("reticle_coords").innerHTML = document.getElementById('scope'+CURRENT).style.transform +' - mouse X:'+SWAYX+'-Y:'+SWAYY +'--'+LAST_SHOT
    requestAnimationFrame(swayMouse);
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
}

/**
 * Toggle the visibility of speed selector and it's label.
 * True hides, false shows.
 * 
 * @param {boolean} hide 
 */
function toggleSpeedSelect(hide) {
    const speedSelect = document.getElementById('movingSpeed');
    const speedLabel = document.getElementById('movingSpeedLabel');
    if (hide) {
        speedSelect.classList.add('hidden-toggle');
        speedLabel.classList.add('hidden-toggle');
    }else {
        speedSelect.classList.remove('hidden-toggle');
        speedLabel.classList.remove('hidden-toggle');
    }
}

/**
 * Clears the interval, if exists.
 */
function intervalClear() {
    if (interval) {
        clearInterval(interval);
    }
}

/**
 * On change handler for the speed selector. Clears interval 
 * and restarts animation.
 */
function onSpeedChange() {
    intervalClear();
    animate();
}

/**
 * Move the target from side to side, speed depends on selected value 
 * from MovingSpeed selector. Sets the interval to static 16 ms.
 */
function animate() {
    const movingTarget = document.getElementById('targetMoving');
    const speed = document.getElementById('movingSpeed').value;
    const width = window.innerWidth;
	const movePx = (INNER_RECT_WIDTH_PERCENTAGE * width)/(speed*60);
    let currPos = 0;
    let dir = 'R';
    interval = setInterval(() => {
        if (dir === 'L') {
			currPos = currPos - movePx;
            movingTarget.style.left = `${currPos}px`;
            if (currPos < 0) {
                dir = 'R';
            }
        } else if (currPos < width && dir === 'R') {
			currPos = currPos + movePx;
            movingTarget.style.left = `${currPos}px`;
        }else {
            dir = 'L';
        }
    }, ANIMATE_SPEED);
}

function changePistol() {
    CURRENT = "Pistol";
    resetScore();
    drawShot(false);
    shots = [];
    
    toggleSpeedSelect(true);

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
    resetScore();
    drawShot(false);
    shots = [];

    toggleSpeedSelect(true);

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
    resetScore();
    drawShot(false);
    shots = [];

    toggleSpeedSelect(false);
    intervalClear();
    animate();

    document.getElementById("scopeMoving").style.display = "inline";
    document.getElementById("targetMoving").style.display = "inline";
    document.getElementById("frameMoving").style.display = "inline";

    document.getElementById("scopePistol").style.display = "none";
    document.getElementById("targetPistol").style.display = "none";
    document.getElementById("scopeStatic").style.display = "none";
    document.getElementById("targetStatic").style.display = "none";
}

function mouseHover(sway_boolean) {
    // mitä tehdään kun hiiri bottomin päällä
    SWAY_BOOL = sway_boolean;
    if(sway_boolean){
        document.getElementById("scope" + CURRENT).style.display = "inline";
    }else{
        document.getElementById("scope" + CURRENT).style.display = "none";
    }
    
}

function resetScore() {
    CURRENT_BULLET = 1;
    TOTAL_SCORE = 0;

    for (let i = 0; i < 11; i++) {
        if (i > 5) { 
            SCORE_TABLE.children[0].children[2].children[i - 6].innerHTML = "&nbsp";
        } else {
            SCORE_TABLE.children[0].children[1].children[i].innerHTML = "&nbsp";
        }
    }
    SCORE_TABLE.children[0].children[1].children[0].innerHTML = "Score";
    SCORE_TABLE.children[0].children[1].children[6].innerHTML = TOTAL_SCORE;

    if (CURRENT == "Moving") {
        if (localStorage.getItem("movingScore") != null) {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("movingScore");
        } else {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = 0;
        }
    } else if (CURRENT == "Pistol") {
        if (localStorage.getItem("pistolScore") != null) {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("pistolScore");
        } else {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = 0;
        }
    } else if (CURRENT == "Static") {
        if (localStorage.getItem("staticScore") != null) {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = localStorage.getItem("staticScore");
        }  else {
            SCORE_TABLE.children[0].children[1].children[7].innerHTML = 0;
        }  
    } 
    document.getElementById("scoreTable").children[0].children[0].children[1].innerHTML = "<img src=\"bullet.svg\">10/10"
}

/*$(document).ready(function () {
        $( "div.bottom" )
        .mouseenter(function() {
        console.log('enter')
        lastMouseMove = 99;
        })
        .mouseleave(function() {
        console.log('leave')
        lastMouseMove = 101;
        });

});*/

/**
 * This is where paper is modified to resize into canvas.
 * Canvas size is 640 * 640 and original paper is about 240 * 240
 * (x and y values between -145 to 145). 
 * 
 * @param {*} shot shows on a paper where shots are located if
 * it hits on paper
 */

function drawShot(shot) {
    if (shot) {
        //TODO
        //Lauran koodia
        //var resize = 2.236896551724138;
        var BB = document.getElementById("target" + CURRENT).getBoundingClientRect();
        var resize = 320 / ((BB.width * 0.548387097) / 2);
        var canvas = document.getElementById("myCanvas");
        canvas.width = 640;
        canvas.height = 640;
        var context = canvas.getContext('2d');
        context.drawImage(document.getElementById("paper" + CURRENT), 0, 0);
        context.fillStyle = "red";
        for (let i = 0; i < shots.length; i++) {
            context.beginPath();
            context.arc((shots[shots.length - i - 1][0] + ((BB.width * 0.548387097) / 2)) * resize, (shots[shots.length - i - 1][1] + ((BB.width * 0.548387097) / 2)) * resize, 8.49, 0, 2 * Math.PI);
            context.fill();
        }
        //OG
        //context.arc(sNotMov.x, sNotMov.y, 2.25, 0 * Math.PI, 2 * Math.PI);
        //context.arc((sNotMov.x + 145) * resize, (sNotMov.y + 145) * resize,
        //8.49, 0 * Math.PI, 2 * Math.PI); //8.49 portion gets bigger
        //context.fillStyle('black');
                
    } else {
        var canvas = document.getElementById("myCanvas");
        canvas.width = 640;
        canvas.height = 640;
        var context = canvas.getContext('2d');
        context.drawImage(document.getElementById("paper" + CURRENT), 0, 0);
    }
}

requestAnimationFrame(swayMouse);
