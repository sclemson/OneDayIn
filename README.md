# One Day In...

## Project Overview
_One Day In…_ is a traveller’s companion - advising you of the best things to do with 24 hours in a given global city. The site strikes a balance between editorial advice and user recommendations and gives users the ability to post their own reviews of their favourite haunts, as well as being able to rate existing recommendations on the site. _One Day In..._ was a week-long group project in which I worked with [James Rogers](https://github.com/james92rogers) and [Kesh Gurung](github.com/keshgurung) to create our finished site.

You can access the deployed version of _One Day In..._ [here](https://onedayinjr.herokuapp.com/).

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
By this stage in the project, we were beginning to work on different sections so we started Day 4 by creating our own branches on **GitHub**. I began the day by constructing and testing our router systems and then linking the frontend to our database. By this stage, we had created seed functionality so that we were then able to constantly restore our ‘factory settings’ in terms of data. I also worked on the final piece of functionality that we needed to get working in order to realise our MVP - the **RecommendationForm.js** and associated systems. Initially, this focussed on this simply allowing user comments for testing purposes although we had the intention of adding both a ratings system and an average rating calculator at a later point.

## Day 5
We were now able to see our data on the site so we continued to focus on the usability of _One Day In…_. By this point we had set up a rough **Sass** structure and were able to begin to get ideas on our layout. I added the **hamburger** element as part of **Nav.js** using **React Bootstrap** and began work on the logo using **Adobe Photoshop** whilst James worked on the ratings system and the calculation of average scores for user recommendations, sorting them in an array so that the highest rated recommendation in any given city would appear in **CityInformation.js**.

## Days 6 - 7
With our MVP completed, we set about two of our ‘nice-to-have’ goals - with James and I working together on the incorporation of the world map on the homepage and the addition of **duolingo** links to each city so that the user could access translation software if they wished. The map  proved relatively simple to incorporate although one of the results was that we now had to create data for even more global cities so that, regardless of the continent a user clicked on, information would appear. This expansion of our database was time consuming but also valuable as it gave our finished product the usefulness that we had envisaged at the start of the creation process. In order to add the translation links we simply added a **primarylanguage** property to our city schema and made this the same as the duolingo web address for that particular language - this allowed us to direct the user to a given page from each different city featured on the app.  Finally, we focussed heavily on styling - ensuring that there was consistency across the site in terms of colours, fonts, motifs, and layout, and working together to make sure that the One Day In… user experience was as intuitive and enjoyable as possible.

## Featured Code
The city schema for _One Day In…_ was vital to our project and, as such, provides a useful illustration of how we went about designing the user experience.

![City Schema](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/City%20Schema.png)

The above schema, when populated in **citiesData.js** looked like this:

![Cities Data](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/City%20Database.png)

Getting the backend of _One Day In…_  right was crucial to our success in the project. The below (from the **api.js** file) illustrates how we used our base url and **node.js** to access our city data, whilst the second image (also from **api.js**) illustrates the use of a bearer token to authorise one of our put requests.

![Get Request](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Get%20Request.png)

![Put Request](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Put%20Request.png)

**Nav.js** contains the hamburger feature:

![Hamburger](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Hamburger.png)

Finally, this section of **RecommendationForm.js** shows part of the form  that (when logged in) the user can fill out to recommend a particular attraction within a city. This final screenshot complements the first pieces of featured code as, as mentioned throughout, we always envisaged _One Day In…_ as a site that pushed both editorial and user recommendations.

![Recommendation Form](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Recommendation%20Form.png)

## One Day In... - Walkthrough
### Homepage
The map on the homepage is animated and continents are highlighted as the cursor moves over them.

![Home Page](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Home%20Page.png)

### Hamburger
The hamburger animates in and out from the corner of the screen.

![Hamburger Screenshot](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Hamburger%20Screenshot.png)

### All Cities
All Cities is an alphabetically sorted list of all of the cities currently featured on _One Day In..._'s database. This view is accessed via the hamburger on the homepage. Selecting a continent on the map on the homepage would result in just the cities from that continent being displayed.

![All Cities](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/All%20Cities.png)

### Gdansk, City Guide
Each city guide features Eat, Drink, Stay, See, Walk, and Secret recommendations.

![Gdansk City Guide](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Gdansk%20Information.png)

### Gdansk, User Recommendation Form
Users can sign in and add their own recommendations...

![User Recommendation Form](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Recommendation%20Form%20Gdansk.png)

### Gdansk, City Guide with User Recommendation
The top rated of these recommendations for any given city is then displayed within the relevant city guide...

![Gdansk Recommendation Form](https://github.com/sclemson/OneDayIn/blob/main/client/src/assets/readme_images/Gdansk%20User%20Recommendation.png)

## Wins and Wishes
Working on _One Day In…_ was an overwhelmingly positive experience - we had a clear idea of what we wanted to achieve and we were able to execute this well over the course of the week. I am particularly proud of both the look and the functionality of the site - of all the projects I was involved in on the GA course, _One Day In…_ felt like the project that brought together both design elements and capabilities in the most comprehensive way. The addition of features like the map, the animated logo and, of course, the vast expanse of the cities database really meant that the app felt ‘complete’ and something fulfilled its brief really well.

Given more time, we would have liked to build in additional features such as a gallery function for each city and, potentially, the addition of **super user ** functionality which would have allowed a user to create cities in addition to being able to post recommendations. The addition of a ‘mobile view’ would also have been a bonus.  These were very much additional ‘nice-to-have’ goals however and, overall the app works exactly as intended. 

## Key Takeaways
As mentioned, we were very pleased with the way that _One Day In…_ turned out. As a process, it taught me the importance of setting clear goals, of having real clarity of expectation and instruction, and it gave me further experience of coding in a collaborative environment - a method of working that I really enjoy. 



