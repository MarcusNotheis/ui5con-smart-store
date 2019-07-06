import React, { Component } from 'react';

import { Title } from '@ui5/webcomponents-react/lib/Title';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';

class FilterBar extends Component {
  dialog = React.createRef();
  nameInput = React.createRef();
  priceInput = React.createRef();
  locationInput = React.createRef();
  dateInput = React.createRef();
  imageInput = React.createRef();
  statusInput = React.createRef();
  rbPerishable = React.createRef();

  handleOnInput = (e) => {
    const value = e.getParameter('value');
    this.props.filter(value);
  };

  openDialog = () => {
    this.dialog.current.open();
  };

  submitNewProduct = () => {
    const newEntry = {
      name: this.nameInput.current.value,
      price: this.priceInput.current.value,
      location: this.locationInput.current.value,
      img: this.imageInput.current.value,
      status: [].filter.call(this.statusInput.current.children, el => el.selected)[0].textContent,
      orderDate: this.dateInput.current.value,
      perishable: !!this.rbPerishable.current.selected
    };

    this.props.createProduct(newEntry);
    this.dialog.current.close();
  };

  closeDialog = () => {
    this.dialog.current.close();
  };

  render() {
    return (
      <div className="details-page-filter-bar">
        <Title level="H3">Products</Title>

        <div className="details-page-filter-bar-actions">
          <Input className="details-page-searchfield" placeholder="Search" onInput={this.handleOnInput}
                 icon={<Icon slot="icon"
                             src="sap-icon://search" />} />
          <Button onClick={this.openDialog} design="Transparent" title="Create Product">Create</Button>
          <Button onClick={this.props.sortDesc} icon="sap-icon://sort-descending" design="Transparent"
                  title="Sort By Status" />
          <Button onClick={this.props.sortAsc} icon="sap-icon://sort-ascending" design="Transparent"
                  title="Sort By Status" />
          <Button icon="sap-icon://excel-attachment" design="Transparent" />
        </div>

        <Dialog headerText="Add a new product" ref={this.dialog}>
          <div className="dialog-content">

            <div className="dialog-section">
              <Label>Product name:</Label>
              <Input ref={this.nameInput} />
            </div>

            <div className="dialog-section">
              <Label>Product price:</Label>
              <Input ref={this.priceInput} />
            </div>

            <div className="dialog-section">
              <Label>Product location:</Label>
              <TextArea ref={this.locationInput} showExceededText maxLength="100" />
            </div>

            <div className="dialog-section">
              <Label>Order date:</Label>
              <DatePicker ref={this.dateInput} />
            </div>

            <div className="dialog-section">
              <Label>Image URL:</Label>
              <Input ref={this.imageInput} type="URL" placeholder="https://..." />
            </div>

            <div className="dialog-section">
              <Label>Status:</Label>

              <Select ref={this.statusInput}>
                <Option>In-Stock</Option>
                <Option>Re-Stock</Option>
                <Option>Deterioating</Option>
              </Select>
            </div>
            <div className="dialog-section horizontal-flex">
              <RadioButton selected name="perishable" text="Perishable" ref={this.rbPerishable} />
              <RadioButton name="perishable" text="Non-Perishable" />
            </div>
          </div>

          <div slot="footer" className="dialog-footer">
            <Button design="Emphasized" onClick={this.submitNewProduct}>OK</Button>
            <Button onClick={this.closeDialog}>Cancel</Button>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default FilterBar;
