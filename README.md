# Breaking News
*workinprogress*
![sketch](https://i.imgur.com/XC8UIae.png)

In todays news I've fetched different headlines from [The New York Times](https://developer.nytimes.com/). 
The main focus are the top stories posted on New York Times.

## Table of content
1. [API introduction](#the-api)
1. [Diagrams (actor & interaction)](#diagrams)
1. [Project goals](#goals)
1. [Personal goals](#personal-goals)
1. [Install project](#clone-project)
1. [Sources](#sources)
1. [Credits](#credits)

# The API
![Imgur](https://i.imgur.com/w2TnLuk.png)

So for this course I wanted to receive data from a news API. The reason I choose this subject is for the sake of being up-to-date about what the world is talking about. In this case  New York Times(NYT) has his own API where you can do lots of developer things. At this moment I'm working with the top selected news from te NYT but this can be broader by getting real-time feed from publishers. They have tons of fetching methods to get the data you want. 
The documentation is enough to get you through it and with a little search up on google you'll receive data in no-time.

**Data structure**

![article](https://i.imgur.com/z5mQLWl.png)

*Note that de id was not available
So I had to improvise and borrowed a random generator code from [W3resource](https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php)*


# Diagrams

*workinprogress*

![actordia](https://github.com/joanpadolina/web-app-from-scratch-1920/blob/master/readme-assets/actordiagram.png)
![interactiondia](https://github.com/joanpadolina/web-app-from-scratch-1920/blob/master/readme-assets/interaction-diagram.png)


# Goals

1. Fetch data
1. Render data to HTML and style it with CSS
1. Filter on categorie
1. Render full story 
1. Add to local storage

# Personal goals

1. Different endpoints one display
1. Display items with that category
1. Weather API(if enough time)
1. Make it more personal for user (by adding to local storage and show this on profile)
1. Use **promises** and **promise all**


## Clone project
*this project uses the folowing:*
* [Rollup](www.rollupjs.com)
* [New York Times API](https://developer.nytimes.com/)
* and 'live server' package from VSCODE 

in the terminal
```
git clone https://github.com/joanpadolina/web-app-from-scratch-1920.git
``` 
find the folder in the terminal and type in the following
```
npm install 
```
to start the localhost type in
```
npm run start
```
find your `localhost` in the browser (this can be diffenrent on each device)
**I'm working with vscode live server to do this try dowloading a live server for your code editor.**

## Sources
* Stackoverflow
* MDN
* [W3resource](https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php)


## Credits
* Robin Stut (Promise in to a variable)
* Maikel Sleebos (new Promise with a async and await)



<!--

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.



* _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
* _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
* _You understand how you can work with an external API using asynchronous code_
* _You understand how you can manage state in your application and you inform the user of state where necessary_

[Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZGWGPC_RMvTMry8YW5XOM79GEIdgS7I5JlOe6OeeOUdmv7ok1s9jQhzojNE4AsyzgL-jJCbRj1LN/pubhtml?gid=0&single=true)

## Program

### Week 1 - Hello API 🐒

Goal: Retrieve data from an API and render it in an overview page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-1.md)

[Slides](https://drive.google.com/open?id=1Rjl9xqXoKniQSRJPdkU1O5YwWC33SJK8KiV0a-H_xZU)

### Week 2 - Design and Refactor 🛠

Goal: Design the web app. Add routes and states. Rendering detail page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-2.md)

[Slides](https://drive.google.com/open?id=1IqQeu1m0dQiSC_KCvrn8eencAgtYe7X6qT-gm0n9Bmc)

### Week 3 - Wrapping up 🎁

Goal:
Manipulate data. Split code into modules. Reflect on end result

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-3.md)

[Slides](https://drive.google.com/open?id=1BSzGYNLMgtHD4HRnK7f0DgyTv4Pg3xsQwD_eYNo7v0Y)

-->
<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
