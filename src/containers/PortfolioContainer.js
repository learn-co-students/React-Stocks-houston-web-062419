import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <div className="row">
        <div className="col">{this.props.stock.name}</div>
        <div className="col">{this.props.stock.price}</div>
        <div className="col"><button className="btn-sm btn-danger" id={this.props.stock.id} onClick={(e) => this.props.deleteStock(e)}>Remove</button></div>
      </div>
      </div>
    );
  }

}

export default PortfolioContainer;
