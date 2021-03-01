/*Links that helped me to solve
https://gist.github.com/armollica/99f18720eb9762351febd64236bb1b9e
https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
*/
/* 
ScopeMoving
ScopePistol
ScopeStatic
Shooting
TargetMoving
TargetPistol
TargetStatic

svgSMoving
svgSPistol
svgSStatic
svgShooting
svgTMoving
svgTPistol
svgTStatic


*/
//variables for .svg files
//var svgSMoving = document.getElementById('ScopeMoving');
var svgSPistol = document.getElementById('ScopePistol');
var svgSStatic = document.getElementById('ScopeStatic');
var svgShooting = document.getElementById('Shooting');
var svgTMoving = document.getElementById('TargetMoving');
var svgTPistol = document.getElementById('TargetPistol');
var svgTStatic = document.getElementById('TargetStatic');

//svg files sizes
//let {width, height} = svgSMoving.getBBox();
let {width, height} = svgSPistol.getBBox();
let {width, height} = svgSStatic.getBBox();
let {width, height} = svgShooting.getBBox();
let {width, height} = svgTMoving.getBBox();
let {width, height} = svgTPistol.getBBox();
let {width, height} = svgTStatic.getBBox();

//clone to canvas
//let clonedsvgSMoving = svgSMoving.cloneNode(true);
let clonedsvgSPistol = svgSPistol.cloneNode(true);
let clonedsvgSStatic = svgSStatic.cloneNode(true);
let clonedsvgShooting = svgShooting.cloneNode(true);
let clonedsvgTMoving = svgTMoving.cloneNode(true);
let clonedsvgTPistol = svgTPistol.cloneNode(true);
let clonedsvgTStatic = svgTStatic.cloneNode(true);
// true for deep clone(check what does it mean)

//Create blob object from cloned node
let outerHTMLSP = clonedsvgSPistol.outerHTMLSP,
blobSP = new Blob([outerHTMLSP],
    {type:'image/svg+xml;charset=utf-8'}); //ScopePistol

let outerHTMLSS = clonedsvgSStatic.outerHTMLSS,
blobSS = new Blob([outerHTMLSS],
    {type:'image/svg+xml;charset=utf-8'}); //ScopeStatic
    
let outerHTMLSho = clonedsvgShooting.outerHTMLSho,
blobSho = new Blob([outerHTMLSho],
    {type:'image/svg+xml;charset=utf-8'}); //Shooting
    
let outerHTMLTM = clonedsvgTMoving.outerHTMLTM,
blobTM = new Blob([outerHTMLTM],
    {type:'image/svg+xml;charset=utf-8'}); //TargetMoving

let outerHTMLTP = clonedsvgTPistol.outerHTMLTP,
blobTP = new Blob([outerHTMLTP],
    {type: 'image/svg+xml; charset = utf-8'}); //TargetPistol

let outerHTMLTSta = clonedsvgTStatic.outerHTMLTSta,
blobSta = new Blob([outerHTMLTSta], 
    {type: 'image/svg+xml; charset = utf-8'}); //TargetStatic

//create URL blob object
let URLSP = window.URL || window.webkitURL || window;
let blobURLSP = URL.createObjectURL(blobSP); //ScopePistol

let URLSS = window.URL || window.webkitURL || window;
let blobURLSS = URL.createObjectURL(blobSS); //ScopeStatic

let URLSho = window.URL || window.webkitURL || window;
let blobURLSho = URL.createObjectURL(blobSho); //Shooting

let URLTM = window.URL || window.webkitURL || window;
let blobURLTM = URL.createObjectURL(blobTM); //TargetMoving

let URLTP = window.URL || window.webkitURL || window;
let blobURLTP = URL.createObjectURL(blobTP); //TargetPistol

let URLTS =  window.URL || window.webkitURL || window;
let blobURLTS = URL.createObjectURL(blobSta); //TargetStatic
/*Links that helped me to solve
https://gist.github.com/armollica/99f18720eb9762351febd64236bb1b9e
https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f
*/
/* 
ScopeMoving.svg
ScopePistol.svg
ScopeStatic.svg
Shooting.svg
TargetMoving.svg
TargetPistol.svg
TargetStatic.svg

svgSMoving
svgSPistol
svgSStatic
svgShooting
svgTMoving
svgTPistol
svgTStatic


*/
//variables for .svg files
//var svgSMoving = document.getElementById('ScopeMoving');
var svgSPistol = document.getElementById('ScopePistol');
var svgSStatic = document.getElementById('ScopeStatic');
var svgShooting = document.getElementById('Shooting');
var svgTMoving = document.getElementById('TargetMoving');
var svgTPistol = document.getElementById('TargetPistol');
var svgTStatic = document.getElementById('TargetStatic');

//svg files sizes
//let {width, height} = svgSMoving.getBBox();
let {width, height} = svgSPistol.getBBox();
let {width, height} = svgSStatic.getBBox();
let {width, height} = svgShooting.getBBox();
let {width, height} = svgTMoving.getBBox();
let {width, height} = svgTPistol.getBBox();
let {width, height} = svgTStatic.getBBox();

//clone to canvas
//let clonedsvgSMoving = svgSMoving.cloneNode(true);
let clonedsvgSPistol = svgSPistol.cloneNode(true);
let clonedsvgSStatic = svgSStatic.cloneNode(true);
let clonedsvgShooting = svgShooting.cloneNode(true);
let clonedsvgTMoving = svgTMoving.cloneNode(true);
let clonedsvgTPistol = svgTPistol.cloneNode(true);
let clonedsvgTStatic = svgTStatic.cloneNode(true);
// true for deep clone(check what does it mean)

//Create blob object from cloned node
let outerHTMLSP = clonedsvgSPistol.outerHTMLSP,
blobSP = new Blob([outerHTMLSP],
    {type:'image/svg+xml;charset=utf-8'}); //ScopePistol

let outerHTMLSS = clonedsvgSStatic.outerHTMLSS,
blobSS = new Blob([outerHTMLSS],
    {type:'image/svg+xml;charset=utf-8'}); //ScopeStatic
    
let outerHTMLSho = clonedsvgShooting.outerHTMLSho,
blobSho = new Blob([outerHTMLSho],
    {type:'image/svg+xml;charset=utf-8'}); //Shooting
    
let outerHTMLTM = clonedsvgTMoving.outerHTMLTM,
blobTM = new Blob([outerHTMLTM],
    {type:'image/svg+xml;charset=utf-8'}); //TargetMoving

let outerHTMLTP = clonedsvgTPistol.outerHTMLTP,
blobTP = new Blob([outerHTMLTP],
    {type: 'image/svg+xml; charset = utf-8'}); //TargetPistol

let outerHTMLTSta = clonedsvgTStatic.outerHTMLTSta,
blobSta = new Blob([outerHTMLTSta], 
    {type: 'image/svg+xml; charset = utf-8'}); //TargetStatic

//create URL blob object
let URLSP = window.URL || window.webkitURL || window;
let blobURLSP = URL.createObjectURL(blobSP); //ScopePistol

let URLSS = window.URL || window.webkitURL || window;
let blobURLSS = URL.createObjectURL(blobSS); //ScopeStatic

let URLSho = window.URL || window.webkitURL || window;
let blobURLSho = URL.createObjectURL(blobSho); //Shooting

let URLTM = window.URL || window.webkitURL || window;
let blobURLTM = URL.createObjectURL(blobTM); //TargetMoving

let URLTP = window.URL || window.webkitURL || window;
let blobURLTP = URL.createObjectURL(blobTP); //TargetPistol

let URLTS =  window.URL || window.webkitURL || window;
let blobURLTS = URL.createObjectURL(blobSta); //TargetStatic

/* onloading blobURLS to image element 
when they're loaded we can draw images to canvas
 */
let imageSP = new Image();
image.onload = () => {
    let canvas = document.g('canvas');
    canvas.width = width;
    canvas.height = height;
    
    

};
image.src = blobURLSP;
//ScopePistol

//ScopeStatic
//Shooting
//TargetMoving
//TargetPistol
//TargetStatic
