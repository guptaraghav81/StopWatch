var hr = 0;
    var min = 0;
    var sec = 0;
    var count = 0;
    var timer = false;
    var startTime;
    var timeout;

    function start() {
        if (!timer) {
            timer = true;
            startTime = performance.now();
            stopwatch();
        }
    }

    function stop() {
        timer = false;
        clearTimeout(timeout);
    }

    function reset() {
        timer = false;
        hr = 0;
        min = 0;
        sec = 0;
        count = 0;
        updateDisplay();
        clearTimeout(timeout);
    }

    function stopwatch() {
        if (timer) {
            var elapsedTime = performance.now() - startTime;
            count = Math.floor(elapsedTime / 10);

            sec = Math.floor(count / 100);
            min = Math.floor(sec / 60);
            hr = Math.floor(min / 60);

            count %= 100; // Reset count to 0 after reaching 100

            updateDisplay();

            // Clear any existing timeout
            clearTimeout(timeout);
            // Set a new timeout with a delay of 10 milliseconds
            timeout = setTimeout(stopwatch, 10);
        }
    }

    function updateDisplay() {
        var hrString = hr < 10 ? "0" + hr : hr;
        var minString = min < 10 ? "0" + min : min;
        var secString = sec < 10 ? "0" + sec : sec;
        var countString = count < 10 ? "0" + count : count;

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
    }
