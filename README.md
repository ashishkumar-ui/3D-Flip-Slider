3D Flip-Slider
===========

![Alt text](http://oi58.tinypic.com/wcbwnb.jpg)

### Features
- Stylish 3D Flip Animation
- Pure JavaScript, no jQuery or any other JS library used
- Very light file size. (2.5 kb uncompressed version JS)
- Supports Images as well as HTML contents
- Highly Customizable
- Readable CSS and JS, well commented so that you can make your changes as per your requirements
- Easy to trigger Events from outside elements

####Version 1.0.2
https://github.com/ashishanexpert/Flip-Slider/

####How to Create Instances of the 3D Slider
<pre><code>var flip1 = new FlipSlider({
    container: document.querySelector(".flip-slider")
});

var flip2 = new FlipSlider({
    container: document.getElementById("#flipSlider2")
});
</code></pre>

####How to trigger Events from Outside Elements
######Method 1: Bind Event on Elements
<pre><code>// Binding Previous Event
document.querySelector("#flipPrevious").onclick = flip1.prevFlip;

// Binding Next Event
document.querySelector("#flipNext").onclick = flip1.nextFlip;
</pre></code>

######Method 2: Trigger somewhere from script
<pre><code>flip1.prevFlip(); // Trigger Previous Event
flip1.nextFlip(); // Trigger Next Event
</pre></code>

######Method 3: Bind Events inline to the elements
<pre><code>&lt;p>&lt;b onclick="flip1.prevFlip();">Click here&lt;/b> to flip Previous the slider&lt;/p>
&lt;p>&lt;b onclick="flip1.nextFlip();">Click here&lt;/b> to flip next the slider&lt;/p>
</pre></code>
