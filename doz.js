
var turn = 1;
function xo(id) {
    if (document.getElementById(id).innerHTML == "&nbsp;")
        if ((turn % 2) != 0) {
            document.getElementById(id).innerHTML = "x"
            winner();
            turn++;
        }
        else {
            document.getElementById(id).innerHTML = "o"
            winner();
            turn++;
        }

    function winner() {
        if (turn > 4) {
            if (document.getElementById(11).innerHTML ==)
          }
    }

}
