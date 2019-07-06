import React, { Component } from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { TabContainer } from '@ui5/webcomponents-react/lib/TabContainer';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';

class Header extends Component {

  onTabItemSelect = (e) => {
    const filterType = e.getParameter('item').getAttribute('data-filter-type');

    this.props.tabPress(filterType);
  };

  render() {
    return (
      <header className="detail-page-header">
        <div className="detail-page-header-bar">
          <Title>Inventory</Title>
          <Button design="Transparent" icon="sap-icon://action" className="action-button" />
        </div>

        <TabContainer fixed collapsed className="detail-page-header-menu" onItemSelect={this.onTabItemSelect}>
          <Tab data-filter-type="all" text="All Items" additionalText={this.props.products.length} />
          <Tab data-filter-type="noPerishable" text="Non-Perishable"
               additionalText={this.props.nonPerishableCount} />
          <Tab data-filter-type="perishable" text="Perishable" additionalText={this.props.perishableCount} />
          <Tab data-filter-type="alerts" text="Alerts" additionalText={this.props.alertCount} />
        </TabContainer>
      </header>
    );
  }
}

export default Header;
