var homeContent = 
'<h1>Home</h1> <p>Testing</p>';
var aboutContent =
'<h1>About</h1> <p>Testing</p> ';
var  productsContent =
'<h1>Products</h1> <p>Testing</p>';
var contactContent =
'<h1>Home</h1> <p>Testing</p>';


function initListeners() {
    $("nav a").click(function(e){

        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        $("#app").html(eval(contentID));
    });
}


$(document).ready(function(e) {
    initListeners();
});