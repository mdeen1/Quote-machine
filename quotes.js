
var quotes = [
    { quote: "“Let me give you some advice, bastard. Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.”",
    author: "Tyrion Lannister"
    },
    {
        quote: "The man who passes the sentence should swing the sword",
    author: "Ned Stark"
        
    },
    {
         quote: "“Power resides where men believe it resides. It’s a trick, a shadow on the wall. And a very small man can cast a very large shadow.”",
    author: "Lord Varys"
    },
    {
       quote: "“All men must die, but we are not men.”",
    author: "Daenerys Targaryen" 
    },
    {
       quote: "“There’s a beast in every man, and it stirs when you put a sword in his hand.”",
    author: "Jorah Mormont" 
    },
     {
       quote: "By what right does the wolf judge the lion?” ",
    author: "Jaime Lannister" 
    },
     {
       quote: "Anyone can be killed.",
    author: "Arya Srark" 
    },
     {
       quote: "Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again — the fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love ... illusions. Only the ladder is real, the climb is all there is." ,
    author: "Petyr 'Littlefinger' Baelish" 
    },
    {
       quote: "Any man who must say 'I am the king' is no true king",
    author: "Tywin Lannister" 
    },
    {
       quote: "Sometimes there Is no happy choice, only one less grievous than the others.",
    author: "Jon Snow" 
    },
    {
       quote: "Everyone who isn’t us is an enemy.",
    author: "Cersei Lannister" 
    }
];

var displayedQuote;
var currentIdx;

function updateQuote() {
    var idx = Math.floor(Math.random() * quotes.length);
    displayedQuote = quotes[idx];
}

function updateQuoteSafe() {
    do{
        var idx = Math.floor(Math.random() * quotes.length); 
    } while(idx === currentIdx);
    displayedQuote = quotes[idx];
    currentIdx = idx;
    
    $('#quote').html(displayedQuote.quote);
    $('#author').html(displayedQuote.author);
}
function shareTweet(){
 var quoteToTweet = quotes[currentIdx].quote;
 console.log(quoteToTweet.length > 100);
 if(quoteToTweet.length > 100){
     quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
 }
 quoteToTweet = encodeURI("\"" + quoteToTweet + "\"");
 window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + "&hashtags=GoT,Mustapha");
}

$(function(){
    updateQuoteSafe();
    $('#generator').click(updateQuoteSafe);
    $('#twitter').click(shareTweet);
    $('#quote').html(displayedQuote.quote);
})