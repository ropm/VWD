const SIZE = 1000;
const HOUSES=[];

function removeOverlay() {
    let element = document.getElementById("overlay");
    element.style.display="none";
}


function main() {
    animate();
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
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    scope = document.getElementById("Scope");
    scope.style.margin = event.pageY + "px 0% 0% " + event.pageX + "px";
}

function animate() {
    window.requestAnimationFrame(animate);
}