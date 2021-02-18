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
var svgSMoving = document.getElementById('ScopeMoving.svg');
var svgSPistol = document.getElementById('ScopePistol.svg');
var svgSStatic = document.getElementById('ScopeStatic.svg');
var svgShooting = document.getElementById('Shooting.svg');
var svgTMoving = document.getElementById('TargetMoving.svg');
var svgTPistol = document.getElementById('TargetPistol.svg');
var svgTStatic = document.getElementById('TargetStatic.svg');

//svg files sizes
let {width, height} = svgSMoving.getBBox();
let {width, height} = svgSPistol.getBBox();
let {width, height} = svgSStatic.getBBox();
let {width, height} = svgShooting.getBBox();
let {width, height} = svgTMoving.getBBox();
let {width, height} = svgTPistol.getBBox();
let {width, height} = svgTStatic.getBBox();

//clone to canvas
let clonedsvgSMoving = svgSMoving.cloneNode(true);
let clonedsvgSPistol = svgSPistol.cloneNode(true);
let clonedsvgSStatic = svgSStatic.cloneNode(true);
let clonedsvgShooting = svgShooting.cloneNode(true);
let clonedsvgTMoving = svgTMoving.cloneNode(true);
let clonedsvgTPistol = svgTPistol.cloneNode(true);
let clonedsvgTStatic = svgTStatic.cloneNode(true);