import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {





  render() {
    // console.log(this.props.stock)
    return (

      <div className="row">
        <div className="col">{this.props.stock.name}</div>
        <div className="col">{this.props.stock.ticker}</div>
        <div className="col">{this.props.stock.type}</div>
        <div className="col">{this.props.stock.price}</div>
        <div className="col"><button className="btn-sm btn-success" id={this.props.stock.id} onClick={(e) => this.props.addStock(e)}>Add</button></div>
      </div>
    );
  }

}

export default StockContainer;
