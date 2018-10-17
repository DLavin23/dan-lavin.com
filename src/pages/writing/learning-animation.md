---
path: "/learning-animation"
date: "2018-10-16"
title: "Learning Animation With Bob Ross"
---

I remember flipping through the channels one Saturday morning, trying to find something good to watch,
when I suddenly came across a goofy looking man with a paintbrush and one of the best damn afros you've ever seen. That man was none other than Bob Ross, artist and host of the PBS series,
"The Joys of Painting."

![Bob Ross](/images/bob_ross.jpg)

It's very easy to get distracted by the physical appearance of Mr. Ross, but all joking aside, there
was something quite magical about his style of painting. I distinctly remember being being mesmerized
by his methodical, yet simplistic approach. Ross was an amazing teacher with this innate
ability to take something that most people viewed as complex and make it approachable. This trait,
along with patience and passion for his craft are what made him so great. In fact, the more I
reflect, the more I can't help but think he would have made a fantastic developer.

That's a great story, but what does this have to do with animation? Well, as someone still
relatively new to the developer profession, I'll be the first to admit when I don't
know something. In an industry where things are in flux, it's very easy to feel like you're drowning
in new things to learn. I often feel like I'm falling behind or that there's some new technology
I need to better understand in order to call myself a "front-end developer." I believe there are a
lot similarities between painting and front end development, especially when you're first getting
started. Trying to learn everything at once is impossible, but if take your time, follow your
passion, and keep practicing, the possibilities are endless.

<div class="pa4">
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">"Talent is a pursued interest. Anything that you're willing to practice, you can do."</p>
    <cite class="f6 ttu tracked fs-normal">- Bob Ross</cite>
  </blockquote>
</div>

With that said, lets see if we can channel our inner Bob Ross, as we attempt to take a challenging
subject like CSS animation and make it less daunting. Our goal is to create this beautiful animated
portrait of a happy little sailboat, floating on the ocean. Before we start, I would just like to
address a couple of things.

1. This post assumes some basic knowledge of HTML and CSS. I will do my best to keep things as
simple as possible and provide additional links to advanced topics or techniques for further
reading.
2. The "final" version linked below, will differ slightly from the code examples in the post as it
utilizes <a href="http://sass-lang.com/">Sass,</a> and some more advanced techniques that I won't
focus on in this particular post.

<iframe height='450' scrolling='no' src='//codepen.io/DLavin23/embed/WbaWmY/?height=450&theme-id=0' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/DLavin23/pen/WbaWmY/'>Animation Blog Tutorial</a> by Dan Lavin (<a href='http://codepen.io/DLavin23'>@DLavin23</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

##Defining our canvas
The first thing we need to do is create our world. This world can contain anything. The only limit
or constraint is our own imagination. In that case, I've always found it quite relaxing to be out
on the water, under the sun ... so let's start there! The first thing I like to do when building
something new is think of all the things that our world might need. Off the top of my head, we'll
need a sky, some water, the sun, the moon, and maybe even a happy little cloud. Let's see
how this might look in our markup:

```html
<div class="sky">
  <div class="sun"></div>
  <div class="moon"></div>
  <div class="cloud"></div>
  <div class="clouds"></div>
  <div class="water"></div>
</div>
```

Great, we've defined our world, now it's time to start bringing these objects to life. I find that
it's much easier to focus on one thing at a time (we don't want to get greedy!), so let's start by
building a beautiful sky! To do that, we're going to use a few basic properties to set the color,
height, width, and positioning. Also, I want my world to stand out a little bit so I'm going use the
[box shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) property to make it pop a
little bit more. Remember, this is your creation, feel free to change anything as your heart
desires.

```scss
.sky {
  background: #acc6d6;
  box-shadow: 1px 1px 5px 1px rgba(50, 50, 50, 0.75);
  height: 26em;
  margin: 0 auto;
  max-width: 50em;
  position: relative;
  z-index: -1;
}
```

![Static Sky](/images/animation-sky.png)

Awesome, look at that beautiful sky! Next, we're going to pretend that we're water, just floating
along, having a great day. We'll add a nice ocean blue to our canvas and blend it all together using
the [linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
function to give our water some contrast. Also, since we want the sky to always be in the
background, we need to position our water absolutely and give it a z-index higher than our sky.
Finally, we'll need to define a height and width depending on how much of our canvas we want to take
up with the water.

```scss
.water {
  background: linear-gradient(0deg, #55a5d9, #20638f);
  bottom: 0;
  height: 8em;
  position: absolute;
  width: 100%;
  z-index: 20;
}
```

![static sky and water](/images/animation-sky-water.png)

Looking good! Moving along, we're going to add in the sun, moon, and just because they're free, lets
add a happy little cloud that floats around the sky. The sun and the moon are pretty similar so
we'll start with those. To make rounded objects we need to use our friend,
[border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius). If you make an
element the same height and width, then add a border radius of 50%,you'll end up with a nice little
circle! I'm going to position those absolutely and place the sun in the bottom right
corner and the moon in the top left corner of our canvas until they're ready to be animated.

```scss
.sun {
  background: #FBB829;
  border-radius: 50%;
  bottom: 0;
  height: 4em;
  position: absolute;
  right: 1em;
  width: 4em;
  z-index: 30;
}

.moon {
  background: #ecf0f1;
  border-radius: 50%;
  bottom: 0;
  height: 4em;
  left: 1em;
  position: absolute;
  width: 4em;
  z-index: 30;
}
```

Finally, we're going to add that happy cloud we mentioned earlier. CSS clouds are very scary at
first, but if we use our imagination there's nothing we can't do. Start by defining an object that's
height is smaller than its width and then use our old friend border radius to round the edges until
it looks like a pill.

```scss
.cloud {
  background: #a1aab0;
  border-radius: 10em;
  height: 3em;
  position: relative;
  top: 4em;
  left: 1em;
  width: 10em;
  z-index: 30;
}
```

Then using the CSS [:after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) pseudo element,
we can create two circles and place them on top of the pill shaped object we created earlier. This
will give us the cloud shaped object we're looking for.

```scss
.cloud:before,
.cloud:after {
  content: '';
  background: #a1aab0;
  border-radius: 3em;
  position: absolute;
}

.cloud:before {
  height: 3em;
  left: 1em;
  top: -1em;
  width: 3em;
}

.cloud:after {
  height: 5em;
  right: 2em;
  top: -2em;
  width: 5em;
}
```

I know this can be very hard to visualize so let's imagine each cloud object as a different color
and maybe this will become more clear:

![CSS cloud description](/images/cloud-description.png)

That's better! Now it's a little easier to see how the different shaped objects can be used to make
one unified and happy cloud. Finally, we're ready to show off our un-animated canvas in its entirety!

![CSS static canvas](/images/unanimated-canvas.png)

##Animating Our Canvas
CSS animations are super easy to use and they're a great way to really bring your designs to life!
Simply put, CSS animations let you gradually change the appearance or style of an element at each
stage of the animation time line.  This is done using two fundamental concepts:

1. [Keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
2. [Animation Properties](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations#Configuring_the_animation)

###A Quick Note on Support
I would like to briefly point out that CSS animations are only [partially supported](http://caniuse.com/#feat=css-animation), therefore you'll need some vendor prefixes in order to get your animations
to work properly across browsers. To make things easier on yourself, I'd recommend using a sass
mixin to help manage all the prefixing.

###Using Keyframes
In order to properly set up our keyframes we *must* consider three things. First, they must have a
name, which you make up, to describe the animation. Next, we must define the stages of our
animation. Stages are defined as a percentage, with 0% representing the beginning and 100%
representing the end. Finally, we must define what CSS properties should be used at each stage of
our animation.

Still a little confused? It's OK, try to remember that there are no mistakes, just happy accidents.
The best way to learn is by rolling up our sleeves and applying our new found knowledge of keyframes
to our "static" portrait.

```scss
@keyframes sky {
  0% {
    background-color: #233946;
  }
  25% {
    background-color: #acc6d6;
  }
  50% {
    background-color: linear-gradient(0deg, #dfe9ef, #bdd2de);
  }
  100% {
    background-color: #1b2b35;
  }
}
```

Here, we've set up a keyframe named "sky" that has 4 stages, 0%, 25%, 50%, and 100%. At each stage
we're changing the color ever so slightly over the course of the animation ... much like the actual
sky does over the course of a day! Next, we need to reference this keyframe in the same CSS rule
that's making our sun look so bright and beautiful.

```scss
.sky {
  animation-name: sky;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}
````

Please note that I'm defining each animation individually by name. This is definitely
longer and more verbose; however, I find that writing them out individually helps build up our
animation muscle memory. That being said, if you think you've got it down, feel free to use the
shorthand.

```scss
.sky {
  animation: sky 15s infinite;
}
```

<!-- Insert gif of sky animating colors -->

That's pretty neat! Let's try and bring this all together by animating the rest of our elements.
Since we're trying to make things realistic, we're probably going to want the sun to rise and fall
in opposition with the moon. It sounds complicated, but don't worry; anything is possible,
especially with our friend, [CSS transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
The CSS transform property lets you translate, rotate, scale, and/or skew element(s) based on values
that you set. Don't worry, that didn't make sense to me the first time I read it.

Let's talk this out, starting with the sun. We want the sun to rise up from behind the water
and then move across the top of our sky before descending back into the water. The transform
property lets us pass in multiple [transform-functions](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#CSS_transform_functions), which we can use to not only move our sun but
also scale its size. The combination will add some life to our sun as it gets bigger at the peak of
the day and then shrinks as it fades into the night. Let's see how this plays out in the code:

```scss
@keyframes sun {
  0% {
    transform: translateY(0);
  }
  25% {
    background: $sun-yellow;
    transform: translateY(-20em) scale(1.5);
  }
  50% {
    background: $sun-yellow;
    transform: translateY(-20em) translateX(-25em) scale(1.25);
  }
  100% {
    transform: translateY(0) translateX(-20em) scale(0.75);
  }
}

.sun {
  animation-name: sun;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}
```

Moving on to the moon, we're going to use the transform property to translate it along the y axis
and then scale it in size as it rises and lowers into the water.

```scss
@keyframes moon {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  25% {
    transform: translateY(20em);
  }
  50% {
    transform: scale(1.25);
    transform: translateY(20em);
  }
  100% {
    transform: translateX(1em) translateY(1em) scale(1.5);
  }
}

.moon {
  animation-name: moon;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}
```

Finally, we have arrived at our clouds ... our happy, happy cloud. Since it's already positioned
in the upper left hand corner of our canvas we're just going to move it back and forth along the
x axis as if it's peacefully floating in the sky.

```scss
@keyframes cloud {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20em);
  }
  100% {
    transform: translateX(0);
  }
}

.cloud {
  animation-name: cloud;
  animation-duration: $animation-duration;
  animation-iteration-count: infinite;
}
```

<!-- Insert GIF of final animation -->

And we're done! We now have a beautiful, animated portrait. Those familiar with the DRY principle
are probably thinking, "hey, there's a lot of repeated code in here, what's up with that?" You're
absolutely right, there is definitely room for improvement. Once you get the basics of animation
down, I encourage you to try and optimize your code. Using a CSS preprocessor like Sass, we could use
[mixins](http://www.sass-lang.com/guide) to clean up our keyframe and animation declarations.
Additionally, we could store common values in a variable or even better,
a [sass map](http://viget.com/extend/sass-maps-are-awesome). These are definitely more
advanced features, but they will make our code more readable and maintainable, so give it a shot!

##In closing
I hope you enjoyed our little journey into the world of animation. Learning new things
can be scary at first, but remember, everyone was a beginner at one point ... just like you.
Confidence comes with practice, so keep learning, follow your passion, and let your imagination
run wild. Go forth and animate, my friends!
