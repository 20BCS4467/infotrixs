document.addEventListener('DOMContentLoaded', function () {
    get_random_quote_by_button();
  
  });


const new_quote_button = document.querySelector(".new-quote-button");

  function get_random_quote_by_button()
  {

    fetch("https://api.quotable.io/quotes/random").then(res => res.json()).then(result => {
    
    
    console.log(result[0]);

    document.getElementById("advice").innerText = result[0].content;
    document.getElementById("authorname").innerText = result[0].author;
  

    });
    
  }


  function get_quotes_by_search_input()
  {
    const search_input = document.querySelector(".search-input").value;

    fetch("https://api.quotable.io/quotes?author="+search_input)
    .then(res => res.json())
    .then(data => {

      // console.log(data);

      document.getElementById("advice").innerText = data.results[0].content;
      document.getElementById("authorname").innerText = data.results[0].author;
      // console.log(data.results)

    });
  }

  const search_button = document.getElementById("search-button");

  search_button.addEventListener("click", get_quotes_by_search_input);

 

  // new_quote_button.addEventListener("click",get_random_quote_by_button);