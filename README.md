# One Day In...

## Project Overview
_One Day In…_ is a traveller’s companion - advising you of the best things to do with 24 hours in a given global city. The site strikes a balance between editorial advice and user recommendations and gives users the ability to post their own reviews of their favourite haunts, as well as being able to rate existing recommendations on the site. _One Day In..._ was a week-long group project in which I worked with [James Rogers](https://github.com/james92rogers) and [Kesh Gurung](github.com/keshgurung) to create our finished site.

## The Brief
- Build a full-stack application by making your own back-end and your own front-end.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React. 
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models. 
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
- Be deployed online so it’s publicly accessible.

## First Steps
Our first discussions centred around the fact that we wanted to build something that would be genuinely useful to people and would have a central purpose that was different to other applications that we had used before. We focussed on travel as it was an area that we were all interested in and decided to create a site that blended editorial content with user interaction that would become a ‘go to’ place for advice for travellers looking to spend a day in any given global city.

It was important for us to design something that gave users a clear idea on our recommendations for a city, so we started by working out the key categories of recommendations that we would add to each city. The categories that we decided to focus on were Eat, Drink, Stay, See, Walk, and Secret, with the latter category being designed to highlight something in the given city that visitors may not have heard of. Additionally, we wanted to be able to highlight user recommendations and, as a result, we decided to build **CRUD** functionality into this area so that, as well as editorial recommandations, users would be able to post and rate their own ideas on essential places to visit.

## Day 1
_One Day In…_ was always conceived as being a genuinely useful app and we understood from the outset that we would need to focus on functionality and information in order to achieve this. In the first instance, our discussions (and subsequent pseudocode) revolved around getting our city models right - firstly by deciding on the type of information contained in each city, and then subsequently designing the schema that we would use. We used this information to wireframe the city pages and gain a clear idea of how the site would be laid out. Since the project was completed in a group of three we also decided to set up a Trello board to share resources and manage our workload (see below). Finally, we spent some time gathering our ‘dummy’ data - filling out our London schema in the first instance.

![Trello Board](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Trello%20Board.png)

## Days 2 - 3 
Once we had our initial wireframes, endpoints and data planned out we worked from our pseudocode and built our backend structure. In the first instance, we did this using **Zoom** and **Live Share** on **VS Code** given that we were all initially working on the same components. As part of this process we designed our user schema and began to utilise this, ensuring that the framework for **CRUD** capability was built into the site. As well as VS Code, this involved us using **Insomnia** to test our endpoints, which initially comprised:

- GET single city.
- GET all cities.
- POST recommendation.
- PUT update a recommendation.
- DELETE recommendation.
- POST register.
- POST login.
- GET profile.

Initial testing focussed on our get requests as well as our user register and login sections which used a bearer token in order to build a layer of security into the site. Once we had got the endpoints working, we also gathered the data for more cities and entered this into our **citiesData.js** file so that, moving forward, we would be able to display multiple locations once we started on the frontend.

## Day 4
By this stage in the project, we were beginning to work on different sections so we started Day 4 by creating our own branches on **GitHub**. The start of the day revolved around constructing and testing our router systems and then linking the frontend to our database. By this stage, we had created seed functionality so that we were able to constantly restore our ‘factory settings’ in terms of data. We also worked on the final piece of functionality that we needed to get working in order to realise our MVP - the **RecommendationForm.js** and associated systems. Initially, we focussed on this simply allowing user comments for our testing, with the intention of adding both a ratings system and an average rating calculator at a later point.

## Day 5
We were now able to see our data on the site so we continued to focus on the usability of _One Day In…_. By this point we had set up a rough **Sass** structure and were able to begin to get ideas on our layout. I added the **hamburger** element as part of **Nav.js** using **React Bootstrap** and began work on the logo whilst James worked on the ratings system and the calculation of average scores for user recommendations, sorting them in an array so that the highest rated recommendation in any given city would appear in **CityInformation.js**.

## Days 6 - 7
With our MVP completed, we set about two of our ‘nice-to-have’ goals - the incorporation of the world map on the homepage and the addition of **duolingo** links to each city so that the user could access translation software if they wished. The map  proved relatively simple to incorporate although one of the results was that we now had to create data for even more global cities so that, regardless of the continent a user clicked on, information would appear. This expansion of our database was time consuming but also valuable as it gave our finished product the usefulness that we had envisaged at the start of the creation process. In order to add the translation links we simply added a **primarylanguage** property to our city schema and made this the same as the duolingo web address for that particular language - this allowed us to direct the user to a given page from each different city featured on the app.  Finally, we focussed heavily on styling - ensuring that there was consistency across the site in terms of colours, fonts, motifs, and layout, and working together to make sure that the One Day In… user experience was as intuitive and enjoyable as possible.





