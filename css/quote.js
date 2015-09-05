$( document ).ready(function() {
  function 
function myQuote() {
  var placeholderDiv = document.getElementById(".jumbtron");
  var url = "http://api.forismatic.com/api/1.0/";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}  
});