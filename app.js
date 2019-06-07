var publishers = [], subscribers = [], topics = [];

function init(){
    
    //Get the elements 
    var addPubBtn = document.getElementById("addPub");
    var removePubBtn = document.getElementById("removePub");
    var addSubBtn = document.getElementById("addSub");
    var removeSubBtn = document.getElementById("removeSub");

    //Events handlers
    addPubBtn.addEventListener("click", function(){
        console.log("You pressed the add pub button");
        var publisherName = document.getElementById("publishers-input").value;
        var publishersContainer = document.getElementsByClassName("pub-container")[0];
        console.log(publishersContainer);
        var pub = new Publisher(publisherName);
        var elementString = '<div class="publisher-item"> <h2>Name</h2> <input type="text" placeholder="Topic" class="inputTopic"> <input type="text" placeholder="Content" class="inputContent"> <input type="button" value="Publish"> <div class="topics-list"></div> <div class="posts-container"></div> </div>';
        publishersContainer.insertAdjacentHTML("beforeend", elementString)
        console.log(pub);
        
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

function Publisher(  name ){
    this.name = name;
    this.topics = [];
    this.posts = [];

    function addTopic(topicName){
        this.topics.push(topicName);
    }

    function post(post){
        this.posts.push(post);
    }
}


window.onload = init;


