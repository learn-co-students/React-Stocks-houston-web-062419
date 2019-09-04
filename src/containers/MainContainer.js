import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()

    this.state={
      stocks: [],
      portfolioStocks: [],
      displayStocks: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks: data,
        displayStocks: data
      })
    })
  }

  buyStock = (stock) => {
    let arr = this.state.portfolioStocks
    arr.push(stock)
    this.setState({
      portfolioStocks: arr
    })
    
  }

  sellStock = (stock) => {
    let arr = this.state.portfolioStocks.filter(s => s !== stock)

    this.setState({
      portfolioStocks: arr
    })
  }

  filterStocks = (type) => {
    
    if(type !== 'All') {this.setState({
      displayStocks: this.state.stocks.filter(stock => stock.type === type)
    })}
    else { 
       this.setState({
        displayStocks: this.state.stocks
      })
    }
    
  }

  sortStocks = (sortBy) => {
    let arr = []
    switch(sortBy){
      case 'Alphabetically':
        arr = this.state.displayStocks.sort((a,b) => a.name > b.name ? 1 : -1)
        break;
      case 'Price':
          arr = this.state.displayStocks.sort((a,b) => a.price > b.price ? 1 : -1) 
        break;
      default:console.log('wrong choice')
    }
    this.setState({
      displayStocks: arr
    })
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolioStocks} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
