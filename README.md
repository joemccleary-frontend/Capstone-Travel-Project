# Evaluate A News Article with Natural Language Processing

This project is part of the Udacity nanodegree, the goal of it is to create an app that uses the meaningcloud sentiment analysis API to analyse news articles. Upon entering a URL the app will determine the polarity (positive/negative sentiment), the objectivity and the confidence in the result of an inputted source.

## How to run the project

1. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

2. Install the dotenv package using
	```
	npm install dotenv
	```

3. Create a `.env` file in project root

4. Add the API key to `.env` file:
	```
	API_KEY=**************************
	```

5. Build the project using
	`npm run build-prod` 

6. Run the project	using
	`npm start` 
	
7. Open browser at http://localhost:2020/

8. Enter the URL of the article you'd like to analyze into the input box.
