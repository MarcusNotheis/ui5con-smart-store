# App Routing

In this step we will create an empty Detail component and set up a routing and navigation between the Home and Detail component.


1. Create `detail` folder under `src/`.

2. Create `Detail.jsx` file under `src/detail/`.

3. Create the `Detail` component, that will return just the words "Hello World" for now.

	```js 
	// Detail.jsx
	import React, { Component } from "react";

	class Detail extends Component {
		render() {
			return (
				<div className="detail-page">Hello World</div>
			)
		}
	}

	export default Detail;
	```
4. Install the `react-router-dom`.
	```js
	npm install react-router-dom --save
	```
	Note: if the app shows an error after installing the above, you have to restart the dev server.

5. Import the `HashRouter` from `react-router-dom` and wrap the root component in `index.js` file as below:
    ```js 
	// index.js
	import { HashRouter } from 'react-router-dom';

	ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));
	```
	
6. Import the `Switch`, `Route`, `Redirect` from `react-router-dom` in `src/App.jsx`  and import the `Detail` component.
Then, use the `Switch` to set up the paths and which component to be displayed respectively. After you add the code below, you should get the `Home` component on the `/#/home` path and the `Detail` component on the `/#/detail` path.
In addition to that, let's add the `onLogoClick` event to the ShellBar in order to navigate back to the start page.
    ```js 
	// App.js
	import React, { Component } from "react";
	import { Switch, Route, Redirect } from "react-router-dom";
	import "./App.css";
	import profile from "./img/profile.png";
	import logo from "./img/logo.png";
	import { ShellBar } from '@ui5/webcomponents-react/lib/Shellbar';
    import Home from "./home/Home";
    import Detail from './detail/Detail';
    
    const onLogoClick = () => {
        window.location.hash = '#/home';
    };

    function App() {
        return (
            <div className="App">
                <ShellBar
                    primaryTitle="Smart Store Manager"
                    showNotifications
                    showProductSwitch
                    showCoPilot
                    profile={profile}
                    logo={logo}
                    onLogoClick={onLogoClick}>
                </ShellBar>
                
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/detail' component={Detail}/>
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        );
	}
	```

7. Now, let's navigate to the `Detail` component by clicking the header of our "Inventory" card.  This would require changes in the `Home` component.
   First of all, we need to attach the `onHeaderClick` event to the Card and change the route.

	```jsx
	// Home.js
	import React, { Component } from "react";
	...

	class Home extends Component {

	    // Change the hash and let the router switch the views
	    navToDetail() {
	    	this.props.history.push("/detail");
	    }
    
	    render() {
	    	return(
                <div className="app-content">
                    {/* Featured */}
                    <Title level="H3">Featured</Title>
                    <section className="section">
                      {
                        data.featured.map((dataObj) =>
                          <Card
                            key={dataObj.key}
                            onHeaderClick={this.navToDetail}
                            heading={dataObj.heading}
                            subtitle={dataObj.subtitle}
                            status={dataObj.status}
                            headerInteractive
                            className="ui5card">
                            <List separators="Inner">
                              {
                                dataObj.items.map(item =>
                                  <StandardListItem
                                    key={item.key}
                                    icon={item.icon}
                                    description={item.description}
                                    info={item.info}
                                    infoState={item.infoState}
                                    className="ui5list-item">{item.title}</StandardListItem>
                                )
                              }
                            </List>
                          </Card>
                        )
                      }
                    </section>
                </div>
            );
	}

	export default Home;
	```

	Now, you can click the header of the "Inventory" card and navigate to the `Detail` component.

### [Step #4 - The Profile Area](./Step4_The_Profile_Area.md)
