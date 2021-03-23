# Evaluate A News Article with Natural Language Processing

This project is part of the Udacity nanodegree, the goal of it is to create an app that uses the meaningcloud sentiment analysis API to analyse news articles. Upon entering a URL the app will determine the polarity (positive/negative sentiment), the objectivity and the confidence in the result.

## How to run the project

1. Install npm
```
npm install
```
2. Install loaders and plugins
```
Install following loaders&plugins:
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```
3. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

4. Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	API_KEY=**************************
	```
5. Start the project
	1. `npm run build-prod` | Will build the project
	2. `npm start` | Will run the project

6. Open browser at http://localhost:2020/
