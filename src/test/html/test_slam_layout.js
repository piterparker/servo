var divs = document.getElementsByTagName("div");
var div = divs[0];

var count = 1000;
var start = new Date();
for (var i = 0; i < count; i++) {
    if (i % 2 == 0)
        div.setAttribute('id', 'ohhi');
    else
        div.setAttribute('id', 'mark');
    div.getBoundingClientRect();
}
var stop = new Date();
window.alert((stop - start) / count * 1e6 + " ns/layout");
<<<<<<< HEAD
=======
window.close();
>>>>>>> 0560988... Add link following and refactor the profiler.