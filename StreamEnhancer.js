chrome.devtools.panels.create("StreamEnhancer", "", "html/panel.html");

chrome.devtools.network.onRequestFinished.addListener(function (request) {
  _log(request);
});

function analyzePreviousLogs(harLog) {
  console.log(harLog);
}

chrome.devtools.network.getHAR(analyzePreviousLogs);