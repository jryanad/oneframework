oneframework
============

###Work in progress

This is a framework developed specifically for use with AudiologyDesign client websites. The purpose of this framework is to
speed up development time while establishing universal standards across client sites.

###Whats included thus far

There are a number of _scss partials_ created that can be easily commented out if you shall choose not to inlcude them and
include your own, making everything interchangable.

###How It Works

To work with the framework locally, you will need to install Grunt via NPM. For instructions on how to get started with Grunt go [here](http://gruntjs.com/getting-started). 
Once you have the repo cloned and Grunt installed, just cd into the root and run *npm install*, this will look for the dev dependencies inside
of the package.json file and install them for this project.

There are 2 tasks set up in the Gruntfile.js: *default* and *server*. You can just run the command *grunt* for it just to watch, compile, & minify your SASS files, 
or you can run *grunt server* which will watch, compile, minify, and open the index.html running livereload to see changes happen right in the browser.

