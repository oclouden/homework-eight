function initListeners() {
    $("nav a").click(function(){
        let aID = e.currentTarget.id;
        console.log(aID);
    });
}


$(document).ready(function(event) {
    initListeners();
});