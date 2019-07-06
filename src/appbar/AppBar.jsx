import React, { Component } from 'react';
import profile from '../img/profile.png';
import logo from '../img/logo.png';
import { setTheme } from '@ui5/webcomponents-base/src/Theming';
import '@ui5/webcomponents/dist/ThemePropertiesProvider';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { List } from '@ui5/webcomponents-react/lib/List';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';

class AppBar extends Component {

  onLogoClick = () => {
    window.location.hash = '#/home';
  };

  onProfileClicked = (event) => {
    window['profile-popover'].openBy(event.getParameter('targetRef'));
  };

  onThemeSwitchPressed = (event) => {
    setTheme(event.getParameter('checked') ? 'sap_belize_hcb' : 'sap_fiori_3');
  };

  render() {
    return (
      <div className="app-bar">
        <ShellBar
          primaryTitle="Smart Store Manager"
          showNotifications
          showProductSwitch
          showCoPilot
          profile={profile}
          onProfileClick={this.onProfileClicked}
          logo={logo}
          onLogoClick={this.onLogoClick} />

        <Popover id="profile-popover" placement-type="Bottom" horizontal-align="Right">
          <div className="profile-header centered">
            <img src={profile} alt="" className="profile-img" />
            <Title level="3">Darius Cummings</Title>
            <Label>Store Manager</Label>
          </div>

          <div className="profile-content">

            <List separators="None">
              <CustomListItem type="Inactive">
                <div className="profile-hcb-switch centered">
                  <StandardListItem icon="sap-icon://palette" type="Inactive">High Contrast Black</StandardListItem>
                  <Switch onChange={this.onThemeSwitchPressed} />
                </div>
              </CustomListItem>
              <StandardListItem icon="sap-icon://settings">Settings</StandardListItem>
              <StandardListItem icon="sap-icon://sys-help">Help</StandardListItem>
              <StandardListItem icon="sap-icon://log">Sign out</StandardListItem>
            </List>
          </div>
        </Popover>
      </div>
    );
  }
}

export default AppBar;