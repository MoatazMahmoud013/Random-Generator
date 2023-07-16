var quoteOutput=document.getElementById("quoteOutput")
var authorOutput=document.getElementById("authorOutput")

var quote=["It's not what happens to you, but how you react to it that matters.","Resentment is like drinking poison and waiting for your enemies to die.","You miss 100% of the shots you don't take.","The best revenge is massive success."]
var author=["-Epictetus","--Nelson Mandela","--Wayne Gretzy","--Frank Sinatra"]


function generateQuote()
{
    var randomIndex = Math.floor(Math.random() * quote.length);
    var randomQuote = quote[randomIndex]; 
    var randomWriter=author[randomIndex];
    quoteOutput.innerHTML = randomQuote;
    authorOutput.innerHTML=randomWriter;
}
