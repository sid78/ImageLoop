ImageLoop
=========

A jquery plugin which animates images in the folder and is in a loop

This plugin is dynamic as it sets the set Interval function depending on images and the animation time set. 
I have used .each function to loop through images.
So the just 2 files you need for this
1. index.html
2. slide.js
You can create images folder on your server and add images to it.
I have tried to keep the code to minimum  

How to use the plugin?
1.Link to your jquery and javascript file in the head section
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script  type=”text/javascript” src="slide.js"></script>
</head>
Note:
 I prefer using jquery cdn link. If you want you can download the jquery library and link to it
Slide.js is  our custom javascript file 

2. Add image src in the html page(within body tag) wrapped in a div with id= “animImg”
<div id=”animImg”>
<img src=”#” alt=” “/>
<img src=”#” alt=” “/>
<img src=”#” alt=” “/>
</div>
You can delete the default images and add your custom images in the images folder.


3. Call the plugin by adding this script in the head or the body tag 
<script>
$(document).ready( function() {
    $('div#animImg').animateImage(3000);
});
</script>
Important: The parameter  3000 in the function is the speed of the animation . You can increase or decrease the number to change the animation speed.Dont keep the parameter empty as it will cause error. I have done this intentionally to keep the plugin simple. 
