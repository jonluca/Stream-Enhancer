let shouldContinueToMonitor = false;
let linksFound = 0;
chrome.devtools.network.onRequestFinished.addListener(requestMonitor);

function requestMonitor(request) {
  if (shouldContinueToMonitor) {
    if (request.request.url.indexOf("m3u8") !== -1) {
      _log("Found valid stream link");
      // Base64 encoded HAR object
      let b64request = btoa(JSON.stringify(request));
      let url = "streamenhancer://" + b64request;
      shouldContinueToMonitor = false;
      $("#scan").removeClass("scanning");
      $(".loader").css('display', 'none');
      $("#results").append(`<a class="link" href="${url}" id="link" role="button"><span>Link ${++linksFound}</span></a>`);
      let debugLink = `<div class="debugLink"><b>Link</b>: ${linksFound}<br><b>URL</b>: ${request.request.url}<br>`;
      debugLink += `<b>Headers</b>:<br>`;
      for (const header of request.request.headers) {
        debugLink += `${header.name}: ${header.value}<br>`;
      }
      debugLink += `<b>XMLHttpRequest Prototype</b>:<br>`;
      debugLink += XMLHttpRequest.prototype.open.toString();
      debugLink += `</div>`;
      $(".debugResults").append(debugLink);
    }
  }
}