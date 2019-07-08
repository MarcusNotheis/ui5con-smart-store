# Smart Store app

The [Smart Store app](http://marcusnotheis.github.io/ui5con-smart-store) is a [React](https://reactjs.org/) sample application, demonstrating the usage of the [UI5 Web Components for React](https://github.com/SAP/ui5-webcomponents-react). You can find a step by step tutorial below on how to build the app by yourself. You don't have to clone the repo, the app will be built from scratch.

Note: no previous experience with [UI5 Web Components for React](https://github.com/SAP/ui5-webcomponents-react) is required.
To take the most of the tutorial, a basic knowledge with [React](https://reactjs.org/) is desirable.

## Prerequisites
- [Node.js](https://nodejs.org/) - **version 8.10 or later** (check the version with `node -v`)
- npm - **version 6 or later** (check the version with `npm -v`)

## Short story

The Smart Store app enables a store manager to control his/her multiple stores. It provides the most important information and status of the stores and urgent tasks that should be addressed by the store manager.

## Getting started

1. Bootstrap the app with [Create React App](https://github.com/facebook/create-react-app#creating-an-app) executing the following commands in your terminal.

	```sh
	npm init react-app smart-store-app
	cd smart-store-app
	```

2. Install the UI5 Web Components for React library.

	```sh
	npm install @ui5/webcomponents-react
	```

3. Consume the UI5 Web Components for React.

	All the components can be imported from `"@ui5/webcomponents-react/lib/<component_name>";`
	Import one of the available components in the `src/App.js`.
	```js
	import "@ui5/webcomponents-react/lib/Button"; //
	```
 
	Then, you can add the `Button` in `src/App.js` and that`s it! 

	```js
	function App() {
		return (
			<Button>Hello world!</Button>
		);
	}
	```
4. Launch the app and you should see the `Button` rendered on the screen.
	```sh
	npm start
	```
## Build the Smart Store app

### [Step #1 - The App Bar](./docs/Step1_The_App_Bar.md)
### [Step #2 - The Home Component](./docs/Step2_The_Home_Component.md)
### [Step #3 - The Routing](./docs/Step3_The_Routing.md)
### [Step #4 - The Profile Area](./docs/Step4_The_Profile_Area.md)
### [Step #5 - Detail Page](./docs/Step5_Details.md)
### [Step #6 - Detail Page Header](./docs/Step6_Detail_Header.md)
### [Step #7 - Detail Page Filter Bar](./docs/Step7_Detail_FilterBar.md)
### [Step #8 - Detail Page Create Item Dialog](./docs/Step8_Detail_add_new_item.md)

## Resources
[Smart Store app](http://marcusnotheis.github.io/ui5con-smart-store)

[Sources of Smart Store App](https://github.com/MarcusNotheis/ui5con-smart-store)

[List of all available UI5 Web Components for React](https://sap.github.io/ui5-webcomponents-react)
