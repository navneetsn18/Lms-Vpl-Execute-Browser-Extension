chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "It will be executed"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}