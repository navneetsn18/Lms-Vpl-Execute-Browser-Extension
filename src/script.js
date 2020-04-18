function setup1() {
    console.log("Clicked")
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let msg = {
            txt: "It will be copied"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg)
    }
}

function setup2() {
    console.log("Clicked")
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let msg = {
            txt: "It will be executed"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg)
    }
}
document.getElementById('button1').addEventListener('click', setup1);
document.getElementById('button2').addEventListener('click', setup2);