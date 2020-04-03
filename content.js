chrome.runtime.onMessage.addListener(gotmessage);

function gotmessage(message, sender, sendResponse) {
    console.log(message.txt);
    if (message.txt === "It will be executed") {
        function run() {
            document.getElementById("vpl_ide_evaluate").click();
            var trick = setInterval(function() {
                var res = document.querySelector("h4#ui-accordion-vpl_results_accordion-header-0.vpl_ide_accordion_t_grade.ui-accordion-header.ui-helper-reset.ui-state-default.ui-corner-all.ui-accordion-icons").textContent;
                res = res.slice(15, -5);
                res = parseInt(res);
                if (res == 100) {
                    stopInterval();
                    alert("Execution successful!");
                } else if (res <= 99 && res >= 0) {
                    stopInterval();
                    alert("Please check your program again! Its need some more efforts!");
                } else { document.getElementById("vpl_ide_evaluate").click(); }
            }, 10000);

            function stopInterval() { clearInterval(trick); }
        };
        run();
    }
}