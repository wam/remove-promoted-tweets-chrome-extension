# Remove Promoted Tweets Chrome Extension

A Chrome extension to remove promoted tweets from the timeline.

When installed, this extension runs automatically each time twitter.com is
loaded, and removes promoted tweets from the DOM. It runs again whenever new
tweets are loaded from the bottom of the page.

The code is meant to be very simple and transparent, to make clear that it's
not doing anything that it's not supposed to do. Improvements and bug reports
are welcome via github issues and pull requests.

## Why Another "Promoted Tweets" Blocker?

Partly as a personal exercise in writing a small Chrome extension, but also
because many of the others rely on jQuery or setTimeout, and this seems a
bit simpler.

## Installation

Currently only installable as an unpacked extension.

Download the source, open `chrome://extensions`, enable "Developer Mode",
click "Load Unpacked Extension", and select the source directory.

## License

MIT License.