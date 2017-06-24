## Introduction

This is a code challenge for [TranterGrey](http://www.trantergrey.com/) in Augusta, GA. I took total creative freedom in redesigning [Super Savers Coupon](http://www.supersavercoupon.com/index.php).

## Table of Contents
- [Assumptions](#assumptions)
- [Strategy](#strategy)
- [Cool Tools](#cool-tools)

## Assumptions

The redesign process usually begins with a business analysis. Who is your target audience? How would the describe themselves? What would make them feel good about the site, and what would make them feel great? What does your traffic look like now, and what are our goals for the redesign (both qualitative and quantitative)? How do actual users feel about the current site? What do they like? What do they dislike? etc.

Since I don't have access to that information, and it seems beyond the scope of this code challenge, I thought I would instead take the opportunity to show what I can do. This site is a sampler of my skills as a showcase of my go-to design solutions. A true redesign that I would set free in the wild would be much more focused on getting the customer to the coupon as fast as possible, and showing the businesses beautiful examples of the deliverables they can expect.

### Other

- I would never deliver a non-responsive site to a customer, but in the interest of time I went ahead and made this one desktop only.
- This is a front page only, so none of the links work.
- It seems like your customers could really benefit from some login functionality. You could track their coupons, and suggest others. Maybe implement a points system and challenge program. As a customer it would be really great to see how much money I've saved with these coupons.
- To 'Home' button, or not to 'Home' button. I like to think modern internet users know the logo is a link to the homepage, but I don't know if that is correct. I would love to interview some actual customers/clients.

## Strategy

### Structure

I chose React for this app because I wanted to showcase this library, and get some more practice using it. A back-end could easily be added with Express and Knex. It is well documented and, like, so 🔥hot🔥 right now.

### Design

My main strategy in designing for the web is the reduce clutter. I have been using this general idea for a while now, but I couldn't articulate it until I saw this [blog post/talk](https://medium.com/hello-web-design/design-for-non-designers-part-1-6559ed93ff91) by Tracy Osborn. She says good design is all about reducing clutter (fewer fonts, fewer colors, one alignment, plenty of whitespace). I wholeheartedly agree and have been applying this idea to all of my designs.

With that in mind, I chose a serif and a sans serif font to pair with a blue/yellow color scheme. I love yellow, but don't think that is a popular opinion, so I was very excited to see it on the existing site and thought I would just run with it.

I generally stay away from drop shadows and 3D effects. A designer once told me "if you can notice a drop shadow right away then it is too dark". I take the same approch to buttons.

Gradients are a bit trendy at the moment, but I still think they look great, so I included them here. My guess is that this gradient design has a year or two, and I plan on capitalizing on it until it becomes uncool.

This site is light on animations. I focused on the button animations, and in general I am hesitant to add too much movement to a site. It can be a great bonus and make it's typography really special, but I always ask myself "does this feature add value to the user" before implementing an animation. Also, it hasn't been my learning focus, so I thought my time would be better spent in other places. The resources available for simple animations are plentiful. I'd love to know how often client specifically request them, and how they respond.

## Cool Tools

### React

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). It is a really cool JavaScript library developed by Facebook that is being used a lot these days, especially for single page apps. I particularly like how the components are broken down. It feels very object oriented to me, and helps wrangle the css into manageable chunks.

### SASS

I am a huge fan of [SASS](http://sass-lang.com/). It is a super powerful preprocessor that gives you access to variables in CSS, and has two simplified syntaxes that make writing CSS much easier. You can also use mixins, inheritance, and operators for added functionality. I mostly used the variable feature in my src/shared.css file to easily modify colors and fonts throughout the project.

### Bootstrap

Developed by twitter as a super useful 12 column grid system, [Bootstrap](https://getbootstrap.com/) is a css framework and is my go-to tool for styling a site quickly. It has lots of ready to go features like a navbar, button styles, or full width image that can be implemented quickly. The downside is that customization can be tricky, and I don't particularly love some of the default styles.

### Font Awesome

[Font Awesome](http://fontawesome.io/) for icons. I have dreams of someday designing my own icon set. Until then I have Font Awesome.

### Kuler

I love Adobe's [Kuler](https://color.adobe.com) for color selection. I usually start projects here by choosing a color scheme.

Also see [coolers.co](https://coolors.co/00a878-d8f1a0-f3c178-fe5e41-0b0500) and press the space bar to generate more colors.

### Google Fonts

I love [Google Fonts](https://fonts.google.com/) (used here), and use Typekit for my personal site.

For inspiration I check out [Font Pair](http://fontpair.co/).

### Unsplash

[Unsplash](https://unsplash.com/) is an incredible collection of free high resolution photos.

### WakaTime

As a freelancer, I am obsessed with time management. So when my friend introduced me to [WakaTime](https://wakatime.com) I was very excited to play around with it. Basically it tracks the time I spend in my text editor (I use [Atom](https://atom.io/)), and displays breakdown of my time by language, day, etc.

[Find out exactly how long I spent on this project](https://wakatime.com/@lconklin/projects/nxplnvpbie?start=2017-06-21&end=2017-06-26)

### UI Gradients

I use [UI Gradients](https://uigradients.com/#IbizaSunset) for gradient inspiration.
