# Floating Scrolling

A jQuery plugin to determine one of two behaviors for a ``<div>`` on scroll:
1. Stick to the top after a certain depth.
2. Stick to the top after a certain depth, but be bounded on the bottom by another ``<div>``. 

To use number two, pass in the string ``'bounded'`` as the second arg to the method ``.floatingScroll()''.

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

### Demo

<a href="http://mhkeller.github.io/floating-scroll/anchor-behavior.html" target="_blank">View demo</a>

Set it up, Option 2, bounded sticky behavior

````
$('#content-div').floatingScroll('#bounding-box', 'bounded');
````

### Demo

<a href="http://mhkeller.github.io/floating-scroll/bounded-behavior.html" target="_blank">View demo</a>