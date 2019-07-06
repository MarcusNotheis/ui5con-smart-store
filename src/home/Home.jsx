import React, { Component } from 'react';
import managerImg from '../img/profile.png';
import data from './data.json';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { Timeline } from '@ui5/webcomponents-react/lib/Timeline';
import { TimelineItem } from '@ui5/webcomponents-react/lib/TimelineItem';

class Home extends Component {

  navToDetail = () => {
    this.props.history.push('/detail');
  };

  render() {

    return (
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

        {/* Today */}
        <Title level="H3">Today at a glance</Title>
        <section className="section">

          <Card
            heading="Upcoming Activities"
            subtitle="28 Jun 2019"
            className="ui5card">
            <Timeline>
              {data.activities.map(item =>
                <TimelineItem
                  key={item.key}
                  icon={item.icon}
                  titleText={item.title}
                  subtitleText={item.subtitle}
                  className="ui5list-item">
                  <div>{item.location}</div>
                </TimelineItem>
              )}
            </Timeline>
          </Card>

          <Card
            heading="Energy Efficiency"
            subtitle="Smart Store A"
            className="ui5card">
            <List separators="Inner">
              {data.energystats.map(item =>
                <StandardListItem
                  key={item.key}
                  icon={item.icon}
                  description={item.description}
                  info={item.info}
                  className="ui5list-item">
                  {item.title}
                </StandardListItem>
              )}
            </List>
          </Card>

          <Card
            avatar="sap-icon://retail-store"
            heading="Smart Stores"
            subtitle="Bulgaria"
            status="6 of 6"
            className="ui5card ui5card-large">
            <div className="card-content">
              <List separators="Inner" className="card-content-child">
                {data.storesa.map(store =>
                  <StandardListItem key={store.key} image={managerImg}
                                    description={store.description}>{store.title}</StandardListItem>
                )}
              </List>
              <List separators="Inner" className="card-content-child">
                {data.storesb.map(store =>
                  <StandardListItem key={store.key} image={managerImg}
                                    description={store.description}>{store.title}</StandardListItem>
                )}
              </List>
            </div>
          </Card>
        </section>

        {/* Actions Required */}
        <Title level="H3">Action Required</Title>
        <section className="section">

          {data.actions.map(action =>
            <Card key={action.key} heading="Smart Store 1" subtitle="today" status="3 of 6"
                      className="ui5card ui5card-large">
              <Table columns={action.columns.map(column =>
                <TableColumn key={column.key}>
                  <div>
                    <Label>{column.name}</Label>
                  </div>
                </TableColumn>
              )}>
                {
                  action.rows.map(dataObj =>
                    <TableRow key={dataObj.key}>
                      {
                        dataObj.cells.map(cell =>
                          <TableCell key={cell.key}>
                            <Label className={cell.error}>{cell.text}</Label>
                          </TableCell>
                        )
                      }
                    </TableRow>
                  )
                }
              </Table>
            </Card>
          )}

          {/* Alerts */}
          {data.alerts.map(alert => {
            return <Card
              key={alert.key}
              heading={alert.heading}
              subtitle={alert.subtitle}
              className="ui5card ui5card-alert">
              <div className="ui5card-alert-content">
                <Icon src={alert.icon} className="ui5icon-size ui5card-alert-icon"/>
                <Label className="ui5label-size error">{alert.text}</Label>
              </div>
            </Card>;
          })}
        </section>
      </div>
    );
  }
}

export default Home;
