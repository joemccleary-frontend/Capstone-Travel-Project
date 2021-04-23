# Capstone - Travel Planning Project

This project is the final part of the Udacity Front End nanodegree, the goal of it is to create an app that uses Geonames, Pixabay, Weatherbit APIs. Upon entering a destination and travel date it wll return the following pieces of information in the format of a postcard:
-Image of destination
-Current Weather
-Currency
-Language spoken
-Number of days to your trip

The feature added to make my project stand out was the use of the REST Countries API, to provide information such as the Flag, currency and language.

If a destination shares its name with another place in another area it is worth adding a country/state/region after the place name to prevent this. For instance 'Newcastle' will yield results for Newcastle in Australia, when you may instead be trying to search for Newcastle, UK.

If a place does not have any images on Pixabay it is not possible to create a Postcard yet. 

## How to run the project

1. Download the project

2. Install the package dependencies using
	```
	npm install
	```

3. Build the project in production mode using
	```
	npm run build-prod
	```

4. Run the project using
	```
	npm run start
	``` 
	
5. Open browser at http://localhost:2020/

6. Click start, then enter the desintation in the 'to' form and the departure date in the calender form. Upon entering create your postcard will be viewable at the bottom of the page

7. If you wish to test the express server and formHandler function the following command can be used:
	```
	npm test
	```
