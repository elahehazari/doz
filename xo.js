var turn = 1;
function xo(row, column) {
    if (document.getElementById(row + "," + column).innerHTML == "&nbsp;" && (turn % 2) !== 0) {

        document.getElementById(row + "," + column).innerHTML = "x";
        // winner();
        turn++;
    }
    else {
        document.getElementById(row + "," + column).innerHTML = "o";


        // winner();
        turn++;
    }

    function winner() {
        if (turn > 4) {
            if (document.getElementById(11).innerHTML == document.getElementById(12).innerHTML &&
                document.getElementById(12).innerHTML == document.getElementById(13).innerHTML &&
                document.getElementById(12).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(12).innerHTML + "winner")
            }

            if (document.getElementById(11).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(12).innerHTML + "winner")
            }

            if (document.getElementById(31).innerHTML == document.getElementById(32).innerHTML &&
                document.getElementById(32).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(32).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(21).innerHTML + "winner")
            }

            if (document.getElementById(11).innerHTML == document.getElementById(21).innerHTML &&
                document.getElementById(21).innerHTML == document.getElementById(31).innerHTML &&
                document.getElementById(21).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(12).innerHTML + "winner")
            }

            if (document.getElementById(12).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(32).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(12).innerHTML + "winner")
            }
            if (document.getElementById(13).innerHTML == document.getElementById(23).innerHTML &&
                document.getElementById(23).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(23).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(12).innerHTML + "winner")
            }


            if (document.getElementById(11).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(22).innerHTML + "winner")
            }

            if (document.getElementById(13).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(31).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
                window.alert(document.getElementById(22).innerHTML + "winner")
            }
        }
    }
}
