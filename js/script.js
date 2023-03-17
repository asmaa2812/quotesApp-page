var arrQuote=[
    {quote:'“Be yourself; everyone else is already taken.”', author:'― Oscar Wilde'},
    {quote:'“Two things are infinite: the universe and human stupidity; and.”', author:'― Albert Einstein'},
    {quote:'“A room without books is like a body without a soul.”', author:'― Marcus Tullius Cicero'},
    {quote:'“Be who you are and say what you feel, because those who mind.”', author:'― Bernard M. Baruch'},
    {quote:'“You only live once, but if you do it right, once is enough.”', author:'― Mae West'},
    {quote:'“Be the change that you wish to see in the world.”', author:'― Mahatma Gandhi'},
    {quote:'“A friend is someone who knows all about you and still loves you.”', author:'― Elbert Hubbard'},
    {quote:'“To live is the rarest thing in the world. Most people exist, that is all.', author:'― Oscar Wilde'},
    {quote:'“We accept the love we think we deserve.”', author:'― Stephen Chbosky'},
    {quote:'“It is better to be hated for what you are than to be loved for what you are not.”', author:'― Andre Gide'}
];

//for testing
// function Quote(){
// var cols='';
//     for(var i=0; i<arrQuote.length; i++){
//         cols+=`<p id="quotename" class="fs-4 py-4 text-capitalize">${arrQuote[i].quote}</p>
//         <p id="quotename" class="fs-4 py-4 text-capitalize">${arrQuote[i].author}</p>`
//     }
//     document.getElementById('box').innerHTML=cols;
// }


//answer
function createQuote(){
    var rndmQuote=Number.parseInt(Math.random()*arrQuote.length +1);
    
// console.log( arrQuote[rndmQuote].quote)

document.getElementById('quotename').innerHTML=arrQuote[rndmQuote].quote;
document.getElementById('quotevalue').innerHTML=arrQuote[rndmQuote].author;
}
