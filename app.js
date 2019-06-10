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
        var elementString = '<div class="publisher-item" id="'+pub.id+'"> <h2>'+publisherName+'</h2> <input id="topic'+pub.id+'" type="text" placeholder="Topic" class="inputTopic"> <input id="content'+pub.id+'" type="text" placeholder="Content" class="inputContent"> <input type="button" value="Publish" id="btn'+pub.id+'"> <div class="topics-list"></div> <div class="posts-container"></div> </div>';
        publishersContainer.insertAdjacentHTML("beforeend", elementString)
        //After creating the element we need to attach the events to its buttons
        var itemButton = document.getElementById("btn"+pub.id);
        var itemTopic = document.getElementById("topic"+pub.id);
        var itemContent = document.getElementById("content"+pub.id);
        itemButton.addEventListener("click", function(){
            console.log("The publication is: ")
            console.log("Topic: ", itemTopic.value);
            console.log("Content: ", itemContent.value);
        });

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
    this.id = (new Date()).getTime();

    function addTopic(topicName){
        this.topics.push(topicName);
    }

    function post(post){
        this.posts.push(post);
    }
}


window.onload = init;


