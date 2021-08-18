This boilerplate is losely based on the concepts from Atomic Design.

The idea is to work from the smallest units to the biggest.

At the same time is not an empty system: values are already provided. This besides to the elements (like cards, navs, buttons, etc) in "compounds" and the templates folder provides a (in my opinion) good starting point to style a website really fast.

So you can use a "nav" with a class .nav, but at the same time, since the naming are -for the most part- selfexplanatory, and there's no conflict between a framework and your css, it's a highly customizable system.

Some things I love about this idea:

since everything is separated in smaller parts, it should be very easy for everyone to work with every element appart. If you want to change the main color, or the complementary, you only need to go with this color is. You want to change the margin of the body, or of the articles: you'll find their values centralized in a document for every task.

This may seem daunting or hard to find, but it's actually ez.

And should lead to a more DRY, clear and well structured CSS.

And easier to refactor.


Weak points:

    * it's wrote in "old-fashion" scss: @imports instead of @use

    * I'm not taking any advantatge of features like loops and functions.- which I plan to do soon

    * I would like to have some more templates and implement clamp for font-size