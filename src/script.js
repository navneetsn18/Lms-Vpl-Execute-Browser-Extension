function setup() {
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
document.getElementById('button').addEventListener('click', setup);