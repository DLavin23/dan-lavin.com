---
path: '/getting-started-with-responsive-web-design'
date: 2014-04-11
title: Getting Started with Responsive Design
---

It's been a little over 3 years since [Ethan Marcotte](http://ethanmarcotte.com/) coined the term
[Responsive Web Design](http://alistapart.com/article/responsive-web-design/) and I think we can
all agree that it has proven to be more than just a fad. As the Web continues to evolve into a
larger part of our everyday lives, it will become increasingly more important to deliver optimal
user experiences for the growing number of Web-enabled devices and contexts.

![Responsive Web Design](/images/flat-rwd.png)

<div class="pa4">
  <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
    <p class="f5 f4-m f3-l lh-copy measure mt0">"Day by day, the number of devices, platforms, and browsers that need to work with your site grows. Responsive web design represents a fundamental shift in how we'll build websites for the decade to come."</p>
    <cite class="f6 ttu tracked fs-normal">- Jeffery Veen</cite>
  </blockquote>
</div>

Clearly, the days of designing fixed-width websites are in the rearview mirror. Creating a unique experience for every device is hardly an efficient long-term solution, so where does that leave us? How do we navigate an evolving landscape with problems that are constantly in flux? Furthermore, how do we address these concerns in an efficient and cost effective manner? These are all difficult questions that many successful companies are trying to figure out.  Luckily, the people on our team at [Leapfrog Online (LFO)](http://leapfrogonline.io) have been getting their hands dirty with responsive design in an attempt to answer these very questions! In this article I will share our experience with responsive design, as well as explain what it is, why it's important, and how we decided to implement it at our company.

##What is responsive design?

For those new to Responsive Web Design (RWD), it is an approach, or set of techniques, that when applied, delivers an elegant visual experience to the user interacting with it regardless of device, screen size, platform, and/or orientation.

####At a high level, RWD is made up of the following concepts:

1. [Fluid grids:](http://alistapart.com/article/fluidgrids) Contrary to a traditional fixed width layout, where the design is constrained to a fixed number of pixels, say 960, a fluid layout is designed so elements proportionally resize their widths in relation to one another using percentage-based values.

2. [Flexible images:](http://alistapart.com/article/fluid-images/) Setting images and media to use a max-width of 100% (you'll need to use width for older versions of IE) instead of the default image size will ensure that everything scales properly.  This one declaration will make sure images and video render their native dimensions as long as the width of the image does not exceed the width of its container.

3. [Media Queries:](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) This wonderful CSS3 feature lets you gather information about a user (i.e. screen size, resolution, orientation, etc.) and conditionally apply specific styles based on that information.  This is an incredibly powerful feature. However, be careful not to overuse media queries as it can unnecessarily lead to a complex codebase. A general rule of thumb is to start designing your smallest form factor (mobile) and scale up until your design starts to break; that's your first breakpoint!

On the surface it may seem like magic, but don't fall into the trap: RWD is a lot more than adjustable screen sizes, changing layouts, and automatically resizing images. It's a completely different way of thinking about how we design and build Web sites. If you're looking for more technical information with regards to developing responsive sites, there are some excellent resources listed below.

##Making a business case for responsive web design

Before last year, responsive design was more or less a buzzword here at LFO. Very few people truly understood what it was, and the few that did had doubts as to whether or not it was a viable strategy for our platform and service offering. At the time, our solution for device proliferation was to create a unique experience for each of the main device types: phone, tablet, and desktop.  This seemed to work...for a while. With mobile and tablet usage increasing, creating a specific experience seemed like the best way to cater to our users while still increasing conversions.

Then, unsurprisingly, technology evolved. New devices, with varying dimensions, resolutions, and capabilities started flooding the market. Eventually, this started to negatively impact a lot of our sites since they were only optimized for the more popular devices at the time, mainly iPhones and iPads. As technical debt started to pile up and efficiency and throughput started to decrease, it became clear that we needed a more proactive strategy.

###Starting the conversation

Like many major changes, there was a lot of conversation and very little action. To be perfectly honest, it was not as easy as we initially thought to get buy-in. Naturally, there were a lot of questions and a fair amount of uncertainty: what is this new responsive design thing? How does it work? How much will it cost? Will it actually help with conversion?

What eventually got us over the hump was simply proving that it was possible! Our front end development team took it upon themselves to spark some action and picked an existing client site, added a few responsive features, made some design tweaks to get it working accross all devices, and presented our "responsive redesign" to the Account Team. It was like a lightbulb went off in their heads. They loved it, because it showed how we could accomplish a better result in a more scalable fashion. The interesting thing about this approach is that we had shown them other responsive sites in the past, but it wasn't until we used something they were familiar with that the benefits started to resonate with them.

Prototyping is a really simple, yet really powerful idea. If you're currently in a situation where people are on the fence about responsive design, I strongly encourage you to take an existing site and try to make it responsive.  Using something real and tangible tends to have a much stronger effect and can help get people more excited about a new responsive project.

###Technical Overview

Once we had support, our focus shifted to research, planning and implementation. A good deal of time was spent educating ourselves on the many different challenges associated with RWD. There are tons of different tools, libraries, and [frameworks](http://usablica.github.io/front-end-frameworks/compare.html) that help make the leap to responsive design easier.  While we did play around with a couple of the more popular front end frameworks [Bootstrap](http://getbootstrap.com/) & [Foundation](http://foundation.zurb.com/)), in the end, we found it better to roll our own. Don't get me wrong, frameworks provide tons of great UI features and functionality. They're incredibly useful for building internal tools and quick prototypes. However, we found that when building complex sites with multiple developers, frameworks tended to get in the way and cause more trouble than they were actually worth, so use with caution!

**Below are the main tools we used to build out our own framework:**

1. [Sass:](http://sass-lang.com/) is a CSS preprocessing language that helps make increasingly complex CSS easier to write and manage.

2. [Compass:](http://compass-style.org/) is a collection of widely used patterns, functions, and mixins written in Sass (It's kind of like jQuery but for Sass).

3. [Susy Grids:](http://susy.oddbird.net/) is a responsive grid framework built with Sass and Compass.  Susy provides a bunch of mixins that let you create your own responsive grid system.  Simply put, it's awesome and I'd highly recommend checking it out on your next project!

###What we learned

So, aside from the fact that responsive design is extremely difficult and requires a lot of time, planning, and collaboration, what did we learn?

1. It's very important to start off a responsive design project on the right foot.  Make sure everyone is on the same page, align everyone's goals, and really nail down the process before you start. I've said it once and I'll say it again; Communication is **very** important to the success of a responsive web design project.  Both [Daniel Mall](http://danielmall.com/articles/responsive-mobile-entertainment-weekly/) and [Brad Frost](http://bradfrostweb.com/blog/post/entertainment-weekly/) talk in depth about the the right way to kick off a responsive design project; definitely worth a read.

2. Stop using Photoshop mocks as a design deliverable! Using fixed width Photoshop mocks to illustrate a flexible responsive design leads to confusion, missed requirements, and false expectations. Instead, opt for something like [Style Tiles](http://styletil.es/) and/or [element collages](http://danielmall.com/articles/rif-element-collages/) to communicate your vision for the design. This tactic will also help clients focus on their goals and preferences instead of the way things look on a page.  What you really want out of this deliverable is to reach a consensus on the direction of your design as quickly as possible, so you can start translating those ideas to code.

3. Evaluate your design strategy. There's a lot of buzzwords out there, content first, mobile first, progressive enhancement, etc. My advice is to do your research and make sure you understand what these all mean and then pick the one that makes the most sense for your team. In my experience as a developer, it's much easier to focus on the content and build up from your smallest form factor (mobile first).

4. Performance is a feature! Responsive Design is very powerful; however, if done incorrectly, it can lead to slow, bloated sites that take 5 minutes to load on a mobile device. Trust me on this one: make performance a priority up front, and you'll save a lot of time in the future.

5. Lastly, change is hard. It's very easy to fall back to the way things used to be. Try not to do that! In his [article](http://www.creativebloq.com/business/what-responsive-web-design-means-team-organisation-11410353) about what responsive design means for team organization, Ben Callahan said "Responsive Design is a catalyst for organizational change" and I couldn't agree more.  Responsive web design is a completely different way of looking at the web. If you don't adapt and change your process, you're just making things unnecessarily difficult for yourself.

##Moving forward

So, was it successful? You bet. Have we perfected it? Absolutely not.  One of the most important takeaways from this experience was our ability, as a team, to recognize a problem, come up with a solution (responsive Web design), and successfully implement it. It was also comforting to learn that everyone else in the Web design industry is dealing with the same problem(s). Responsive design is still very new and we're all learning as we go.

If there's one thing I hope you take away from this article, it's the need to acknowledge and embrace the unpredictability of the web. Responsive design is just one of many strategies available to help deliver great experiences to users. A few years from now, there will probably be a new strategy for dealing with whatever technology becomess available. It's important to continue to learn, document, and share our experiences with each other so we can move the Web forward.

If you have questions, comments, or ideas about responsive design I'd love to hear from you. Drop me an email here...<a href="mailto:daniel.e.lavin@gmail.com">daniel.e.lavin@gmail.com</a>

##Further Reading

If you'd like to learn more about responsive design and how to start implementing it at your company, here is a great list of resources to help get you started!

1. [Responsive Web Design - Ethan Marcotte](http://alistapart.com/article/responsive-web-design/")
2. [Responsive Design Resources - Brad Frost](http://bradfrost.github.io/this-is-responsive/resources.html)
3. [The Business of Responsive Design - Mark Boulton](http://markboulton.co.uk/journal/thebusinessofrwd)
4. [Responsive Design Case Studies - Luke W.](http://www.lukew.com/ff/entry.asp?1691)
5. [Reorganization - Trent Walton](http://trentwalton.com/2013/04/10/reorganization)
6. [Responsive Design Workflow - Stephen Hay](http://www.amazon.com/Responsive-Design-Workflow-Stephen-Hay/dp/0321887867)
