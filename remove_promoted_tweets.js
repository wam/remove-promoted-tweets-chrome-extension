var RemovePromotedTweets = RemovePromotedTweets || {

  init: function () {
    var elementsCalledStreamItems; // getElementsByClassName returns an array of
                                   // <ol> elements called 'stream-items'. This
                                   // is a list of *containers*, not a list of
                                   // the actual tweets.
    var streamObserver;            // Observer that will fire whenever new
                                   // tweets are appended
    var run = this.run;            // Bring this.run() into scope so we can
                                   // run it in the observer

    // We only need to monitor the childList of stream-items

    var observerOptions = {
      childList: true,
      attributes: false,
      characterData: false
    };

    // Run the remover once when the page is loaded

    run();

    // Find the 'stream-items' container. This should returns 3 <ol> elements,
    // and the first element in the array is the relevant one.

    elementsCalledStreamItems = document.getElementsByClassName('stream-items');

    // If we get the array that we expected, then we can install the
    // observer and re-run the callback whenever new tweets are loaded.

    if (elementsCalledStreamItems.length > 0) {
      streamObserver = new MutationObserver(function(mutations) {
        run();
      });
      streamObserver.observe(elementsCalledStreamItems[0], observerOptions);
    }
  },

  run: function () {
    var tweetsToRemove = document.getElementsByClassName('promoted-tweet');

    // Loop through promoted tweets and remove them
    while (tweetsToRemove.length > 0) {
      tweetsToRemove[0].parentNode.removeChild(tweetsToRemove[0]);
    }
  }
}

// Off to the races...

RemovePromotedTweets.init();
