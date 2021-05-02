$('document').ready(function () {
  console.log("ready")
});

function retrieveArticleInfo() {
  console.log($("#input-search").val())

  alert("submitted")

  var query = $("#input-search").val();

  var pagesDisplayed = $("#results-displayed").val()

  console.log(pagesDisplayed)

  var beginDate = $("#start-date").val()

  console.log(beginDate)

  var endDate = $("#end-date").val()

  console.log(endDate)

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query +
    "=&api-key=bQFQdwNYKWVJrECCys8zXOtwGTEzg32l"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (resp) {
    var articles = resp.response.docs

    console.log(articles)

    for (var i = 0; i < pagesDisplayed; i++) {

      var articleLink = $("<a>").attr("href", articles[i].web_url);
      var articleTitle = $("<h1>").text(articles[i].headline.main);
      articleLink.append(articleTitle)
      var articleDescription = $("<p>").text(articles[i].abstract);
      var articleImg = $("<img>").attr("src", "https://www.nytimes.com/" + articles[i].multimedia[29].url);
      $("#articles-retreived").append(articleLink, articleImg, articleDescription)

      // create pages retrieved variable to store value of artciles retrieved 

      // use jquery to capture .val from HTML

      //replace hardcoded "5" in loop with userGuess

      // empty articles array after every new submission

    }
  });

}
