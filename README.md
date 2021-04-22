# Capstone - Travel Planning Project

This project is part of the Udacity nanodegree, the goal of it is to create an app that uses a number of API's to allow you to input a travel destination and departure date and it will return a few pieces of information in return.
The feature added to make my project stand out was the use of the REST Countries API.

## How to run the project

1. Sign up for an API key at [geonames.org](https://www.geonames.org/), [weatherbit.io](https://www.weatherbit.io/account/create), [pixabay.com](https://pixabay.com/)

2. Install the dotenv package using
	```
	npm install dotenv
	```

3. Create a `.env` file in project root

4. Add the API keys to `.env` file:
	```
	geonames API:
	geonames=**********

	weatherbit API:
	weatherbit=***********************************

	Pixabay API:
	pixabay=***********************************

	```

5. Build the project using
	`npm run build-prod` 

6. Run the project	using
	`npm start` 
	
7. Open browser at http://localhost:2020/

8. Enter the desintation and departure date!
