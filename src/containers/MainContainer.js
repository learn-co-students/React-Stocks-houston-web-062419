import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state ={
      stocks: [], // local copy to data
      displayStocks: [], // to display
      portfolioStocks: [] // to display

    }
  }


  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => { // check data
      this.setState({
        stocks:data,
        displayStocks: data, 

      })
    })
  }

  addPortfolio = (stock) => {
    // let newArr = this.state.portfolioStocks
    // newArr.push(stock)

    // this.setState({
    //   portfolioStocks: newArr
    // })

    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  removeStock = (stock) => {

    // let arr = this.state.portfolioStocks.filter(s => s !== stock )

    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(s => s !== stock )
    })

  }

  filterStocks = (type) => {
    // let arr = this.state.stocks.filter(stock => stock.type === type)

    if (type !== "All"){
      this.setState({
        displayStocks: this.state.stocks.filter(stock => stock.type === type)
      })
    }else{
      this.setState({
        displayStocks: this.state.stocks
      })
    }
  }

  sortStocks = (sortBy) => {
    switch(sortBy){
      case "Alphabetically":
        let a = this.state.displayStocks.sort((a,b) => a.name > b.name? 1:-1)
        this.setState({
          displayStocks: a
        })
        break;
      case "Price": 
        let b = this.state.displayStocks.sort((a,b) => a.price > b.price? 1:-1)
        this.setState({
          displayStocks: b
        })
        break;
    }

  }

  render() {
    return (
      <div>
        <SearchBar filterStocks = {this.filterStocks} sortStocks = {this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks = {this.state.displayStocks} addPortfolio={this.addPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks ={this.state.portfolioStocks} removeStock ={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
