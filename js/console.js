// To access main window console we need to send a string to be evaled on the inspected window. _log is a helper
// function to do this
function _log(logEntry) {
  if (typeof logEntry === "object") {
    chrome.devtools.inspectedWindow.eval('console.log("Request: " + unescape("' + escape(JSON.stringify(logEntry)) + '"))');
  } else if (typeof logEntry === "string") {
    chrome.devtools.inspectedWindow.eval('console.log("Request: " + unescape("' + escape(logEntry) + '"))');
  }
}