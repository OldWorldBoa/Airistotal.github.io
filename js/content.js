// from: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready( function() {
	LoadPage();

  $(window).on('popstate', function(e) {
    LoadPage();
  });
});

function LoadPage() {
  var type = getParameterByName("type");
  var contentUrl = "./pages/about.html";

  switch(type) {
  case "about":
    contentUrl = "./pages/about.html";
    break;
  case "consult":
    contentUrl = "./pages/consulting.html";
    break;
  case "news":
    contentUrl = "./pages/news.html";
    break;
  case "contact":
    contentUrl = "./pages/contact.html";
    break;
  case "foe_1_9_calculator":
    contentUrl = "./pages/foe_1_9_calculator.html";
    break;
  case "projects":
    contentUrl = "./pages/projects.html";
    break;
  default:
    contentUrl = "./pages/about.html";
    break;
  }

  $.get(
    contentUrl,
    function(data) {
      $("#content").html(data);
    });
}
