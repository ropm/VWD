/*Links that helped me to solve*/
//https://gist.github.com/armollica/99f18720eb9762351febd64236bb1b9e
//https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f

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

let outerHTMLSP = clonedsvgSPistol.outerHTMLSP,
blobSP = new Blob([outerHTML],
    {type:'image/svg+xml;charset=utf-8'}); //ScopePistol
/*let 
    blobSS = new Blob([outerHTML],
    {type:'image/svg+xml;charset=utf-8'}); //ScopeStatic
blobShooting = new Blob([outerHTML],
    {type:'image/svg+xml;charset=utf-8'}); //Shooting
blobTM = new Blob([outerHTML],
    {type:'image/svg+xml;charset=utf-8'}); //TargetMoving
*/
