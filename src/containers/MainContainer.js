import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {



  render() {
    let portStock = this.props.stocks.filter(stock => stock.portfolio == true)
    return (
      <div>
        <SearchBar sortName={this.props.sortName} sortPrice={this.props.sortPrice} filterType={this.props.filterType} name={this.props.sortName} price={this.props.sortPrice}/>

          <div className="row">
            <div className="col-8">
              <h2>Stocks</h2>
              <div className="row">
                <div className="col">Company Name</div>
                <div className="col">Stock Ticker</div>
                <div className="col">Company Type</div>
                <div className="col">Price</div>
                <div className="col">Track in Portfolio</div>
              </div><br/>
              {this.props.stocks.map(stock => <StockContainer stock={stock} addStock={this.props.addStock}/>)}
              

            </div>
            <div className="row">
              <div className="col">
                <h2>My Portfolio</h2>
                <div className="row">
                  <div className="col">Company Name</div>
                  <div className="col">Price</div>
                  <div className="col">Remove</div>

                </div><br/>
                  {portStock.map(stock => <PortfolioContainer stock={stock} deleteStock={this.props.deleteStock}/>)}
              </div>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
