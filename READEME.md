
Setup Instructions

Project Title

One Paragraph of project description goes here
*** Currency_Exchange ***


***Getting Started***

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


***Description***

# Currency Exchange #

## The purpose of this app is to allow a user to choose a currency type and amount, and choose which type of currency they would like the exchange rate for

### Written by Marcin Szopik 08/12/2020

**How it works**

1. the async callback function in main instantiates a new object called currency Exchanger.
2. A new variable called response is created, which calls the function callAPI(). https://api.exchangeratesapi.io/latest?symbols=USD,GBPA user 
Visit the ExchangeRate-API site. 
3. callAPI runs a try-catch case that calls the function getRate(). getRate() is a switch case with each case being a newUrl with the result we want to provide.
4. the newUrl is given to a fetch command as an argument. we then wait to see if the request was successful. If so, we return the response as the variable jsonifiedResponse.
5. Our jsonifiedResponse is given to getElements() as an argument. getElements invokes an if statement that returns a result if response is true.


Available Scripts

In the project directory, you can run:

npm start

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More







Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

 Contributors who participated in this project.

License

This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments




