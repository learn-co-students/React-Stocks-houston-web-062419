import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor(){
    super(),
    this.state = {
      stocks: [],
      stocksMaster: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(stocks => {
      let stocksArr = stocks.map(stock => {return{...stock, portfolio: false}})
      this.setState ({
        stocks: stocksArr,
        stocksMaster: stocksArr,
        sortName: false,
        sortPrice: false,
        filterType: "",
        stocksHolder: stocksArr
      })
    })
  }

  addStock = (e) => {
    let stocksArr = this.state.stocks.map(stock => {
      if (stock.id == e.target.id) {
       stock.portfolio = true
       return stock
      } else {
       return stock
      }
    })
    this.setState({
      stocks: stocksArr,
      stocksHolder: stocksArr
    })
  }

  deleteStock = (e) => {
    let stocksArr = this.state.stocks.map(stock => {
      if (stock.id == e.target.id) {
       stock.portfolio = false
       return stock
      } else {
       return stock
      }
    })
    this.setState({
      stocks: stocksArr,
      stocksHolder: stocksArr
    })
  }

  sortName = (e) => {
    if (e.target.value == 'Alphabetically') {
      let newArr = this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        sortName: !this.state.sortName,
        stocks: newArr
      })
    }
  }

  sortPrice = (e) => {
    if (e.target.value == 'Price') {
      let newArr = this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
      this.setState({
        sortName: !this.state.sortPrice,
        stocks: newArr
      })
    }
  }

  filterType = (e) => {
    // if (e.target.value == "Tech") {let newArr = this.state.stocksHolder.filter(stock => stock.type == "Tech") this.setState({stocks: newArr})}
    // if (e.target.value == "Sportswear") {let newArr = this.state.stocksHolder.filter(stock => stock.type == "Sportswear")this.setState({stocks: newArr}}
    // if (e.target.value == "Finance") {let newArr = this.state.stocksHolder.filter(stock => stock.type == "Finance")this.setState({stocks: newArr}}
    if (e.target.value != "All") {
    let newArr = this.state.stocksHolder.filter(stock => stock.type == e.target.value)
    this.setState({
      filterType: e.target.value,
      // stocksHolder: this.state.stocks,
      stocks: newArr
    })
  } else {
    return this.setState({
      stocks: this.state.stocksHolder
    })
  }
  }

  render() {
    console.log(this.state.stocksHolder)
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} addStock={this.addStock} deleteStock={this.deleteStock} sortName={this.sortName} sortPrice={this.sortPrice} filterType={this.filterType} name={this.state.sortName} price={this.state.sortPrice}/>
      </div>
    );
  }
}

export default App;
