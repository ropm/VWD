/*Links that helped me to solve*/
//https://gist.github.com/armollica/99f18720eb9762351febd64236bb1b9e
//https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f

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

let outerHTMLSP = clonedsvgSPistol.outerHTMLSP,
blobSP = new Blob([outerHTMLSP],
    {type:'image/svg+xml;charset=utf-8'}); //ScopePistol

let outerHTMLSS = clonedsvgSStatic.outerHTMLSS,
blobSS = new Blob([outerHTML],
    {type:'image/svg+xml;charset=utf-8'}); //ScopeStatic

let outerHTMLShooting = clonedsvgShooting.outerHTMLShooting, 
blobShooting = new Blob([outerHTMLShooting],
    {type:'image/svg+xml;charset=utf-8'}); //Shooting

let outerHTMLTMoving = clonedsvgTMoving.outerHTMLTMoving,
blobTM = new Blob([outerHTMLTMoving],
    {type:'image/svg+xml;charset=utf-8'}); //TargetMoving

let outerHTMLTPistol = clonedsvgTPistol.outerHTMLTPistol,
blobTP = new Blob([outerHTMLTPistol], 
    {type:'image/svg+xml;charset=utf-8'}); //TargetPistol

let outerHTMLTStatic = clonedsvgTStatic.outerHTMLTStatic,
blobTS = new Blob([outerHTMLTStatic],
    {type:'image/svg+sml;charset=utf-8'}); //TargetStatic

//creating urls from blobs
let URLSP = window.URL || window.webkitURL || window;
let blobURLSP = URLSP.createObjectURL(blobSP); //ScopePistol

let URLSS = window.URL || window.webkitURL || window;
let blobURLSS = URLSS.createObjectURL(blobSS); //ScopeStatic

let URLS = window.URL || window.webkitURL || window;
let blobURLSh = URLS.createObjectURL(blobURL); //Shooting

let URLTM = window.URL || window.webkitURL || window;
let blobURLTM =  URLTM.createObjectURL(blobTM); //TargetMoving

let URLTP = window.URL || window.webkitURL || window;
let blobURLTP = URLTP.createObjectURL(blobTP); //TargetPistol

let URLTS = window.URL || window.webkitURL || window;
let blobURLTS = URLTS.createObjectURL(blobURLTS); //TargetStatic

