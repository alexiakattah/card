import React from 'react';
import api from './services/api';
import Card from './components/Card';
import './styles/main.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compra: [] };
  }

  async componentDidMount() {
    const response = await api.get();
    let arrayCorrigido = [];
    response.data.events.forEach(event => {
      const transactionIdIndex = event.custom_data.findIndex(x => x.key === 'transaction_id');
      const transaction_id = event.custom_data[transactionIdIndex].value;
      const arrayIndex = arrayCorrigido.findIndex(x => x.transaction_id === transaction_id);

      let store_name, product;

      if (event.custom_data.findIndex(x => x.key === 'store_name') === -1) {
        product = this.formatProduct(event.custom_data);
      } else {
        store_name = event.custom_data[event.custom_data.findIndex(x => x.key === 'store_name')].value;
      }
      if (arrayIndex === -1) {
        let products = [];
        if (product !== undefined && product != null && product !== {}) {
          products.push(product);
        }
        (store_name && store_name.length) ? arrayCorrigido.push({ created_on: event.timestamp, total_price: event.revenue, transaction_id, products, store_name }) : arrayCorrigido.push({ created_on: event.timestamp, total_price: event.revenue, transaction_id, products });
      } else {
        let productListing = arrayCorrigido[arrayIndex];
        if (product !== undefined && product != null && product !== {}) {
          productListing.products.push(product);
        }
        if (!productListing.store_name && store_name && store_name.length) {
          productListing.store_name = store_name;
        }
        if (!productListing.total_price && event.revenue) {
          productListing.total_price = event.revenue
        }
        arrayCorrigido[arrayIndex] = productListing;
      }
    });
    this.setState({ compra: arrayCorrigido.reverse(this.state.compra.created_on) });
  };

  formatProduct(product) {
    let productFormatted = {};
    productFormatted.name = product[product.findIndex(x => x.key === 'product_name')].value;
    productFormatted.price = product[product.findIndex(x => x.key === 'product_price')].value;
    return productFormatted;
  }

  render() {
    return (
      <div className="container" >
        <div className="row">
          <div className="col-md-6">
            <Card data={this.state.compra} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
