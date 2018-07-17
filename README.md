# example-karma-phantom-callPhantom-sendEvent
Example of how to call send event on Phantom through Karma. This is useful to executing things directly on Phantom such as
 - Getting pixel screenshots through page.render
 - Tabbing through a page for accessibility unit testing
 - And other page related functionality!

# Getting started
1. git clone
1. npm install
1. npm run test

# Important tidbits
Really the magic is in the `karma.conf.js` where the `customLaunchers` are setup to handle the page callbacks. Then in the test, you just call something like `window.callPhantom({ type: 'render'});` which takes a screenshot!