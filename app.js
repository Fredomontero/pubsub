var publishers = [], subscribers = [], topics = [];

function init(){
    
    //Get the elements 
    var addPubBtn = document.getElementById("addPub");
    var removePubBtn = document.getElementById("removePub");
    var addSubBtn = document.getElementById("addSub");
    var removeSubBtn = document.getElementById("removeSub");

    //Events handlers
    addPubBtn.addEventListener("click", function(){
        var publisherName = document.getElementById("publishers-input");
        var publishersContainer = document.getElementsByClassName("pub-container")[0];
        var pub = new Publisher(publisherName.value);
        var elementString = '<div class="publisher-item" id="'+pub.id+'"> <h2>'+publisherName.value+'</h2> <input id="topic'+pub.id+'" type="text" placeholder="Topic" class="inputTopic"> <input id="content'+pub.id+'" type="text" placeholder="Content" class="inputContent"> <input type="button" value="Publish" id="btn'+pub.id+'"> <div class="topics-list"></div> <div class="posts-container"></div> </div>';
        publishersContainer.insertAdjacentHTML("beforeend", elementString)
        publisherName.value = "";
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
        var subscriberName = document.getElementById("subscriber-input");
        var subscriberContainer = document.getElementsByClassName("sub-container")[0];
        var sub = new Subscriber(subscriberName.value);
        var elementString = '<div class="subscriber-item" id="'+sub.id+'"> <h2>'+subscriberName.value+'</h2> <input id="topic'+sub.id+'" type="text" placeholder="Topic" class="inputTopic"> <input id="btn'+sub.id+'" type="button" value="Subscribe"> <h3>Following</h3> <ul id="topicList'+sub.id+'"> </ul> <h3>Notices</h3> <ul id="noticeList'+sub.id+'"> </ul> </div>'
        subscriberContainer.insertAdjacentHTML("beforeend", elementString);
        subscriberName.value = "";
        //After creating the element we need to attach the events to its buttons
        var itemButton = document.getElementById("btn"+sub.id);
        itemButton.addEventListener("click", function(){
            var itemTopic = document.getElementById("topic"+sub.id);
            console.log("The item topic is: ", itemTopic);
            var topicsContainer = document.getElementById("topicList"+sub.id);
            var content = topicsContainer.innerHTML;
            topicsContainer.insertAdjacentHTML("beforeend", "<li>"+itemTopic.value+"</li>");
            itemTopic.value = "";
        });
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

function Subscriber(  name ){

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


