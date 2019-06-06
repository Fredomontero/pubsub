function init(){
    
    //Get the elements 
    var addPubBtn = document.getElementById("addPub");
    var removePubBtn = document.getElementById("removePub");
    var addSubBtn = document.getElementById("addSub");
    var removeSubBtn = document.getElementById("removeSub");

    //Events handlers
    addPubBtn.addEventListener("click", function(){
        console.log("You pressed the add pub button");
    });

    removePubBtn.addEventListener("click", function(){
        console.log("You pressed the remove pub button");
    });

    addSubBtn.addEventListener("click", function(){
        console.log("You pressed the add sub button");
    });

    removeSubBtn.addEventListener("click", function(){
        console.log("You pressed the remove sub button");
    });
}




window.onload = init;