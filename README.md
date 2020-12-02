# Stock Site #
This is a website to search up the lates stock, forex, cryptocurrency, and commodity prices.

It is built with React and uses the Financial Modeling Prep API (https://financialmodelingprep.com/developer/docs/).

## Skills Developed ##
This was my first larger project built with React and I developed a variety of skills:
- Learned how to use __functional components__ with __hooks__ (as well as __custom hooks__)
- Developed ability to __fetch__ data from an __API__, store it in __state__, and display it in a component
- Practiced using the __Context API__
- Experienced why it's important to keep code __organized__ (especially in large projects)
- Learned the different styling methods (__styled components, CSS modules, SCSS__). I chose to create a stylesheet for each component and use the __BEM naming convention__.
- Became more familiar with the __git workflow__

## Real Data Context - Explained ##
The _useFetch_ custom hook, as well as the _fetchQuote_ function in _QuoteContext_ check to see if the API returns an error. If this is the case, _realData_ is set to false and the entire site will use the dummy data stored in _dummyData.js_. This data would typically be stored in a database, but that was out of the scope of this project.

Once the site is no longer using real data, a warning will be displayed at the top in the header. It will contain a tooltip which reports the exact error that caused the site to revert to using dummy data (most often out of daily API requests).

## Check It Out! ##
Visit the webiste live: https://cocky-mayer-6414d2.netlify.app
