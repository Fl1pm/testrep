var pos = 1;
function test() {
    var goal = document.querySelector('#mtarget');
        pos += 1;
        goal.style.left = pos + 'px';
        goal.style.top = pos + 'px';
        if (pos == 500){
            clearInterval(start);
        }
}
var start = setInterval(test, 24);

