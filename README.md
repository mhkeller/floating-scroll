# Floating Scrolling

A jQuery plugin to determine one of two behaviors for a ``<div>`` on scroll:
  1. Stick to the top after you scroll past it.
  2. Stick to the top after you scroll past it, but be bounded on the bottom by another ``<div>``. 

To use number two, pass in the string ``'bounded'`` as the second arg to the method ``.floatingScroll()``.
Option 1 also automatically makes the anchor the height of the content that becomes fixed so that you don't see a jump when that object is taken out of the flow of the layout and made fixed. This is good for most cases but if you're doing absolutely positioned content-boxes to begin with, you might want to comment those extra height assignments from the script.

### Usage

Include the jQuery plugin (jQuery required)

````
<script src="js/jquery.floating-scroll.js"></script>
````

Include the CSS 

````
<link rel="stylesheet" type="text/css" href="css/floating-scroll.css">
````

Set it up, Option 1, normal sticky behavior

````
$('#content-div').floatingScroll('#anchor-box');
````

<a href="http://mhkeller.github.io/floating-scroll/anchor-behavior.html" target="_blank">View example of option 1</a>

Set it up, Option 2, bounded sticky behavior

````
$('#content-div').floatingScroll('#bounding-box', 'bounded');
````

<a href="http://mhkeller.github.io/floating-scroll/bounded-behavior.html" target="_blank">View example of option 2</a>
