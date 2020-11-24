var i = 0;
auto();

function auto() {
    plus(1);
    setTimeout(auto, 3000);
}


function plus(n) {
    show(i += n);
}


function current(n) {
    show(i = n);
}



function show(n) {
    var j;
    var s = document.getElementsByClassName("slideImg");
    var d = document.getElementsByClassName("dot");
    if (n > s.length) {
        i = 1;
    }
    if (n < 1) {
        i = s.length;
    }

    for (j = 0; j < s.length; j++) {
        s[j].style.display = "none";
    }
    for (j = 0; j < d.length; j++) {
        d[j].className = d[j].className.replace(" active", "");
    }
    s[i - 1].style.display = "block";
    d[i - 1].className += " active";
}