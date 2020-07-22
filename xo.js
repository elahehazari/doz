
<script>
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
            if (document.getElementById(11).innerHTML == document.getElementById(12).innerHTML &&
                document.getElementById(12).innerHTML == document.getElementById(13).innerHTML &&
                document.getElementById(12).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(12).innerHTML + winner"")
    }

            if (document.getElementById(11).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(23).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(12).innerHTML + winner"")
    }

            if (document.getElementById(31).innerHTML == document.getElementById(32).innerHTML &&
                document.getElementById(32).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(32).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(21)
        ).innerHTML + winner"")
            }

            if (document.getElementById(11).innerHTML == document.getElementById(21).innerHTML &&
                document.getElementById(21).innerHTML == document.getElementById(31).innerHTML &&
                document.getElementById(21).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(12).innerHTML + winner"")
    }

            if (document.getElementById(12).innerHTML == document.getElementById(22).innerHTML &&
                document.getElementById(22).innerHTML == document.getElementById(32).innerHTML &&
                document.getElementById(22).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(12).innerHTML + winner"")
    }
            if (document.getElementById(13).innerHTML == document.getElementById(23).innerHTML &&
                document.getElementById(23).innerHTML == document.getElementById(33).innerHTML &&
                document.getElementById(23).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(12).innerHTML + winner"")
    }


        } if (document.getElementById(11).innerHTML == document.getElementById(22).innerHTML &&
            document.getElementById(22).innerHTML == document.getElementById(33).innerHTML &&
            document.getElementById(22).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(22).innerHTML + winner"")
    }

        if (document.getElementById(13).innerHTML == document.getElementById(22).innerHTML &&
            document.getElementById(22).innerHTML == document.getElementById(31).innerHTML &&
            document.getElementById(22).innerHTML != "&nbsp;") {
        window.alerty(document.getElementById(22).innerHTML + winner"")
    }
    }

}
