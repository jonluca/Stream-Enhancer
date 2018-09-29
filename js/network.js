$(function () {
  let button = document.getElementById('scan');

  button.addEventListener("click", startScan);

  function startScan(e) {
    $(button).addClass("scanning");
    $(".loader").css('display', 'block');
    console.log("Intercepting network requests");
    shouldContinueToMonitor = true;
  }

  $("#debug").on('click', () => {
    let debugResults = $(".debugResults");
    if (debugResults.css('display') === "none") {
      debugResults.css('display', 'block');
    } else {
      debugResults.css('display', 'none');
    }
  });

});