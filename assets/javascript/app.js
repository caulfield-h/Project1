

    $("#buttons").on("click", function() {
      // var userDefinedDate = $("#search-date").val().trim();

      var url = 'https://newsapi.org/v2/everything?' +  
        'sources=the-wall-street-journal&' + 
        'q=bitcoin&' +
        'q=cryptocurrency&' +
        'apiKey=2db51c8d6bcc408a8037abcc67512083';

      var req = new Request(url);

      fetch(req)
          .then(function(response) {
              console.log(response.json());
          })
    });

    $("#buttons").on("click", function() {
      // var userDefinedDate = $("#search-date").val().trim();

      var url = 'https://newsapi.org/v2/everything?' +  
        'sources=msnbc&' + 
        'q=bitcoin&' +
        'q=cryptocurrency&' +
        'apiKey=cd39a355ca9446cdaf4af8ba9a57c0f6 ';

      var req = new Request(url);

      fetch(req)
          .then(function(response) {
              console.log(response.json());
          })
    });

 