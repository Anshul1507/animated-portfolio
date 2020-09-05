// Used for set the animation
document.addEventListener('DOMContentLoaded', function() {
    particleground(document.getElementById('animations'), {
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa'
    });
    var intro = document.getElementById('main_body');
    intro.style.marginTop = -intro.offsetHeight / 2 + 'px';
}, false);