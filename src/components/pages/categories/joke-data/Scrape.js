const cheerio = require("cheerio");
const fs = require("fs");
const axios = require("axios");

axios
  .get("https://www.bullshit.co.il/")
  .then((urlResponse) => {
    var $ = cheerio.load(urlResponse.data);
    var htmlEntries = $("#herald-module-0-2").find(".entry-title");
    var categoryName, categoryLink;
    var bullshitDict = [];

    htmlEntries.each((h, el) => {
      categoryLink = $(el).find("a").attr("href");
      categoryName = $(el).text();

      bullshitDict.push({
        ID: h,
        CategoryLink: categoryLink,
        CategoryName: categoryName,
      });
    });

    bullshitDict.forEach((category, i, el) => {
      //category running on random order
      setTimeout(() => {
        axios
          .get(category.CategoryLink)
          .then((urlResponse) => {
            var $ = cheerio.load(urlResponse.data);
            var htmlEntries = $(".herald-module").find(".entry-title");
            var jokeName, jokeLink;
            var jokeCollection = [];

            htmlEntries.each((i, el) => {
              jokeLink = $(el).find("a").attr("href");
              jokeName = $(el).text();

              jokeCollection.push({
                JokeName: jokeName,
                JokeLink: jokeLink,
              });
            });

            category.Jokes = jokeCollection;

            category.Jokes.forEach((joke, j, el) => {
              setTimeout(() => {
                axios
                  .get(joke.JokeLink)
                  .then((urlResponse) => {
                    var $ = cheerio.load(urlResponse.data);
                    var jokeContent;
                    jokeContent = $(".entry-content")
                      .text()
                      .replace(/\s\s/g, "");
                    joke.Joke = jokeContent;

                    const artFinal = JSON.stringify(bullshitDict);
                    const filename = "data" + ".json";
                    fs.writeFileSync(filename, artFinal);
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                  });
              }, 500 * j);
            });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }, 20000 * i);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
