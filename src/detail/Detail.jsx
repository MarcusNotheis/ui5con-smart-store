import React, { Component } from 'react';
import FilterBar from '../filterbar/FilterBar';
import Header from '../header/Header';
import './Detail.css';
import products from '../data/products.json';
import { Table } from '@ui5/webcomponents-react/lib/Table';
import { TableColumn } from '@ui5/webcomponents-react/lib/TableColumn';
import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';
import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Label } from '@ui5/webcomponents-react/lib/Label';

const getBadgeType = type => {
  switch (type) {
    case 'In-Stock':
      return '8';
    case 'Deterioating':
      return '2';
    case 'Re-Stock':
      return '1';
    default:
      return '0';
  }
};

class Detail extends Component {
  state = {
    products: [...products],
    filteredProducts: [...products],
    filterType: 'all',
  };

  get statusCriteriaMapping() {
    return {
      'In-Stock': 0,
      'Re-Stock': 1,
      'Deterioating': 2,
    };
  }

  filterPerishableProducts(items) {
    return items.filter(product => product.perishable);
  }

  filterNoPerishableProducts(items) {
    return items.filter(product => !product.perishable);
  }

  filterAlertProducts(items) {
    return items.filter(product => (product.status === 'Deterioating' || product.status === 'Re-Stock'));
  }

  filterItems(filterType, items) {
    let filteredProducts = [];

    switch (filterType) {
      case 'all':
        filteredProducts = items;
        break;
      case 'noPerishable':
        filteredProducts = this.filterNoPerishableProducts(items);
        break;
      case 'perishable':
        filteredProducts = this.filterPerishableProducts(items);
        break;
      case 'alerts':
        filteredProducts = this.filterAlertProducts(items);
        break;
      default:
        filteredProducts = items;
        break;
    }

    return filteredProducts;
  }

  applyFilter(filterType) {
    const products = this.filterItems(filterType, this.state.products);

    this.setState({
      ...this.state,
      filteredProducts: products,
      filterType: filterType,
    });
  }

  createProduct(entry) {
    const newItems = [...this.state.products, { key: (this.state.products.length + 1), ...entry }];

    this.setState({
      ...this.state,
      products: newItems,
      filteredProducts: this.filterItems(this.state.filterType, newItems),
    });
  }

  filterVisibleItemsByText(text) {
    const filteredByType = this.filterItems(this.state.filterType, this.state.products);
    const items = filteredByType.filter(item => item.name.toLowerCase().startsWith(text));

    this.setState({
      ...this.state,
      filteredProducts: items,
    });
  }

  filter(value) {
    this.filterVisibleItemsByText(value);
  }

  sortAsc() {
    const sortedItems = this.state.filteredProducts.sort((a, b) => {
      if (this.statusCriteriaMapping[a.status] > this.statusCriteriaMapping[b.status]) {
        return 1;
      } else if (this.statusCriteriaMapping[a.status] < this.statusCriteriaMapping[b.status]) {
        return -1;
      }

      return 0;
    });

    this.setState({
      ...this.state,
      filteredProducts: sortedItems,
    });
  }

  sortDesc() {
    const sortedItems = this.state.filteredProducts.sort((a, b) => {
      if (this.statusCriteriaMapping[a.status] > this.statusCriteriaMapping[b.status]) {
        return -1;
      } else if (this.statusCriteriaMapping[a.status] < this.statusCriteriaMapping[b.status]) {
        return 1;
      }

      return 0;
    });

    this.setState({
      ...this.state,
      filteredProducts: sortedItems,
    });
  }

  render() {
    return (
      <div className="detail-page">
        <Header
          products={this.state.products}
          nonPerishableCount={this.filterNoPerishableProducts(this.state.products).length}
          perishableCount={this.filterPerishableProducts(this.state.products).length}
          alertCount={this.filterAlertProducts(this.state.products).length}
          tabPress={this.applyFilter.bind(this)}
        />
        <main className="detail-page-content">

          <FilterBar
            createProduct={this.createProduct.bind(this)}
            filter={this.filter.bind(this)}
            sortAsc={this.sortAsc.bind(this)}
            sortDesc={this.sortDesc.bind(this)}
          />

          <Table className="items-table" noDataText="No Items available for search criteria" showNoData columns={[
            <TableColumn>
              <Label className="table-column-header-content">Product</Label>
            </TableColumn>,
            <TableColumn>
              <Label className="table-column-header-content">Price</Label>
            </TableColumn>,

            <TableColumn>
              <Label className="table-column-header-content">Location</Label>
            </TableColumn>,

            <TableColumn>
              <Label className="table-column-header-content">Order date</Label>
            </TableColumn>,

            <TableColumn>
              <Label className="table-column-header-content">Image</Label>
            </TableColumn>,

            <TableColumn>
              <Label className="table-column-header-content">Status</Label>
            </TableColumn>
          ]}>


            {
              this.state.filteredProducts.map((item) =>
                <TableRow key={item.key}>
                  <TableCell>
                    <Label className="table-cell-content"><b>{item.name}</b></Label>
                  </TableCell>
                  <TableCell>
                    <span className="table-cell-content">{item.price}</span>
                  </TableCell>
                  <TableCell>
                    <span className="table-cell-content">{item.location}</span>
                  </TableCell>
                  <TableCell>
                    <span className="table-cell-content">{item.orderDate}</span>
                  </TableCell>
                  <TableCell>
										<span className="table-cell-content">
											<img alt="" className="image-cell" src={process.env.PUBLIC_URL + item.img} />
										</span>
                  </TableCell>
                  <TableCell>
										<span className="table-cell-content">
											<Badge colorScheme={getBadgeType(item.status)}>{item.status}</Badge>
										</span>
                  </TableCell>
                </TableRow>)
            }
          </Table>
        </main>
      </div>
    );
  }
}

export default Detail;
