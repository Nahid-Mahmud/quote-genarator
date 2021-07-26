const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')


let apiQuotes = []


//Show Loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true  ; 
}
// Hide function

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}





// show new quote
 function newQuote() {
     loading();

    // Pick a random Quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if the author field is blank and replace it by 'Unknown'
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    //Check quote lenth to modify quote styling
    if(quote.text.length >90){
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }
    // set quote hide load

    quoteText.textContent = quote.text; 
    complete();
 }

//GET QUOTE from api
    async function getQuote(){
        loading();
        
        const apiUrl ='https://type.fit/api/quotes';
        try{
            const response = await fetch(apiUrl);
            apiQuotes = await response.json();
            // console.log(apiQuotes[12]);
            // console.log(apiQuotes.length);
            newQuote();

        } catch (error){
            getQuote(); 
            // catch error here
        }
    }


    // event listener
    newQuoteBtn.addEventListener('click',newQuote)
    // ON LODE
    getQuote()  

  
    
   