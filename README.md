This is a website to search up the lates stock, forex, cryptocurrency, and commodity prices.

It is built React and uses the Financial Modeling Prep API (https://financialmodelingprep.com/).

This was my first larger project built with React and I developed a variety of skills:

- Learned how to use functional components with hooks (as well as custom hooks)
- Developed ability to fetch data from an API, store it in state, and display it in a component
- Practiced using the Context API
- Experienced why it's important to keep code organized (especially in large projects)
- Learned the different styling methods (styled components, CSS modules, SCSS). I chose to create a stylesheet for each component and use the BEM naming convention.
- Became more familiar with the git workflow

Real Data Context Explained:
The free plan provided by Financial Modeling Prep allows for a certain amount of requests daily. The Real Data Context is used to determine whether the site should fetch from the API or use dummy data, which I have stored in a regular js file. This data would typically be stored in a database, but that was out of the scope of this project. The useFetch custom hook, as well as the fetchQuote function in QuoteContext check to see if the API returns an error. If this is the case, realData is set to false and the entire site will use the dummy data stored in dummyData.js

Visit the webiste live: https://cocky-mayer-6414d2.netlify.app
