# Stock Site #
This is a website to provide all the financial data you need.
- Latest stock market news
- Real time stock, forex, cryptocurrency, commodity quotes
- Keep track of your investments with a watchlist
- See which sectors are growing or shrinking
- Find the stocks that are active, gaining, or losing

The site is built with React/Redux/TypeScript and uses the Financial Modeling Prep API (https://financialmodelingprep.com/developer/docs/).

## Skills Developed ##
This was my first project built with React. When I started this project, I pretty much knew nothing. I made the site function without TypeScript/Redux because learning all of these technologies at once would have been too overwhelming. 

Once I had a functionting website, I refactored everything into TypeScript, I transfered the state to Redux, I began to write unit & integration tests, and I improved the file structure of the project. This project, along with the constant refactoring, allowed me to develop a variety of skills:
- Using __functional components__ with __hooks__ (as well as __custom hooks__)
- __Fetch__ data from a __REST API__, store it in __state__, and display it in a component
- Using the __Context API__ vs __Redux__
- Catching type errors with __TypeScript__
- Writing and recognizing the value of __unit & integration tests__
- Keeping file structure __organized__ and making components as __reusable__ as possible
- Using the __BEM naming convention__
- Keeping large and small screens in mind with __responsive design__

## Real Data Reducer - Explained ##
The Real Data Reducer is used to determine whether real or dummy data should be used, site-wide. Sometimes the API reaches the max number of free calls for the day and I want the site to still function.

If realData.status is false, dummy data is used and a warning will be displayed at the top in the header.

## Check It Out! ##
Visit the webiste live: https://cocky-mayer-6414d2.netlify.app
