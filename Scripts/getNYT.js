// AJAX call to GET NYT article

// This function will scrape the NYTimes website
const getNYT = function(queryURL) {
  // get NYT articles via ajax call to the NYTimes API endpoint
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(data => {
    return data;
  })

  
};

// Export the function, so other files in our backend can use it
module.exports = getNYT;
