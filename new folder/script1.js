window.addEventListener('load', function() {
    var bars = document.getElementsByClassName("bar");
    for (var i = 0; i < bars.length; i++) {
      var percentage = bars[i].style.getPropertyValue("--percentage");
      bars[i].style.height = percentage;
    }
  });