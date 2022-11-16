
field.onclick = function(event){
    let Coords = this.getBoundingClientRect();
    let elem = {
        top: event.clientY - Coords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - Coords.left - field.clientLeft - ball.clientWidth / 2,
    };
    if (elem.top < 0) elem.top = 0;
    if (elem.left < 0) elem.left = 0;
    if (elem.left + ball.clientWidth > field.clientWidth){
        elem.top = field.clientWidth - ball.clientWidth;
    }
    if (elem.top + ball.clientHeight > field.clientHeight) {
        elem.top = field.clientHeight - ball.clientHeight;
      }
    ball.style.left = elem.left + 'px';
    ball.style.top = elem.top + 'px';
}