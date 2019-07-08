# Home component

In this step we will make use of ```Card``` as main building block for our home view. We will create the "Featured" section. As you can see below, it consists of two "cards" - "Inventory" and "Security". Each of them has a header and content section with a list of important information.

![Alt text](./step2.png?raw=true "Home")

1. Create `home` folder under `src`.

2. Create `Home.jsx` file under `src/home/`.

3. Copy the `data.json` file in `src/home/`
from [Sources of Smart Store](https://github.com/MarcusNotheis/ui5con-smart-store/blob/master/src/home/). The file has some mockup data, that we will need to fill into the cards.

4. Let's start with the "Featured" section.
Create the `Home` component in `src/home/Home.jsx`. Note that we import the `data.json`, so we can use it later.

	```js
	// Home.js
	import React, { Component } from "react";
	import data from "./data.json";
    import { Card } from '@ui5/webcomponents-react/lib/Card';
	import { Title } from '@ui5/webcomponents-react/lib/Title';
	import { Label } from '@ui5/webcomponents-react/lib/Label';
	import { List } from '@ui5/webcomponents-react/lib/List';
	import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
	import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';

	class Home extends Component {
  
		render(){

			return(
				<div className="app-content">
					{/* Featured */}
					<Title level="H3">Featured</Title>
					<section className="section">
					</section>
				</div>
			);
		}
	}

	export default Home;
	```

5. Now, let's add the `Card`. We will also use `List` and `StandardListItem` for the `Card` content. 
You can get familiar with the API of those components - [Card API](https://sap.github.io/ui5-webcomponents-react/?path=/story/ui5-web-components-card--default-story) and [List API](https://sap.github.io/ui5-webcomponents-react/?path=/story/ui5-web-components-list--generated-default-story). What is going below?
We are just using the API of the UI5 WebComponents ("heading", "subtitle" and "status") and the JSX syntax to map the data and the cards will render nicely.

	```html
	return(
		<div className="app-content">

			<Title level="H3">Featured</ui5-title>
			<section className="section">
			{data.featured.map((dataObj, index) => 
			<Card
				key={dataObj.key}
				heading={dataObj.heading}
				subtitle={dataObj.subtitle}
				status={dataObj.status}
				className="ui5card">
					<List separators="Inner">
					{dataObj.items.map(item =>
					<StandardListItem
						key={item.key}
						icon={item.icon}
						description={item.description}
						info={item.info}
						infoState={item.infoState}
						className="ui5list-item">{item.title}</StandardListItem>
					)}
					</List>
			</Card>
			)}
			</section>
		</div>
	);
	```

6. Import the `Home` component into the `src/App.jsx` (note that we added an outer DIV element as React component always should return a single element). You should be able to see the cards with data inside.  OK, the cards are currently expanded to full width and the layout does not look like the picture in the begining - we will handle it in the following step.
	```js 
	// App.js
	import profile from "./img/profile.png";
	import logo from "./img/logo.png";
	import { ShellBar } from '@ui5/webcomponents-react/lib/Shellbar';
	import Home from "./home/Home";

	function App() {
		return (
			<div className="App">
                <ShellBar
                    primaryTitle="Smart Store Manager"
                    showNotifications
                    showProductSwitch
                    showCoPilot
                    profile={profile}
                    logo={logo}>
                </ShellBar>
				<Home />
			</div>
		);
	}
	```

7. The layouting and ordering of the cards is responsibility of the app developer. Replace the content of `src/App.css` with the content of [Sources of Smart Store](https://github.com/MarcusNotheis/ui5con-smart-store/blob/master/src/App.css). Nothing magical, we make use of `display:flex` for the layouting and setting some `min-width` to the `ui5-card`.

8. You can copy the rest of the sections in the `Home` component from [Sources of Smart Store (Home.jsx)](https://github.com/MarcusNotheis/ui5con-smart-store/blob/master/src/home/Home.jsx), but don`t forget to copy all the imports of UI5 Web Components for React.

### [Step #3 - The Routing](./Step3_The_Routing.md)
