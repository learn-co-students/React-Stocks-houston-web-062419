import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stock: [],
      showstock: [],
      portfolioStock:[],
      filter:"none",
      checked:"Price"
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(res => this.setState({stock: res, showstock: res}, ()=> console.log(this.state.stock)))
  }

  handleClick = ( stock) =>{
    //debugger
    if (this.state.portfolioStock.find(s => s === stock)) {
      let arr = this.state.portfolioStock
      arr  = arr.filter(s => s !== stock)
      this.setState({portfolioStock: arr}, console.log(this.state.portfolioStock, arr, stock))
    }else{
      let arr = this.state.portfolioStock
      arr.push(stock)
      this.setState({portfolioStock: arr})
    }
    
  }

  changeFilter = (filter) =>{
    this.setState({filter: filter})

    let showstock = this.state.stock.filter(s => s.type === filter)
    this.setState({showstock: showstock})
  }

  sortPrice=()=>{
    console.log("price")
    this.setState({checked:"Price"})
    let showstock = this.state.stock.sort((a, b) => (a.price > b.price)? -1: 1)
    this.setState({showstock: showstock})
  }
  sortAlphabetically = () => {
    console.log("apl")
      this.setState({checked:"Alphabetically"})
      let showstock = this.state.stock.sort((a, b) => (a.name > b.name)? 1: -1)
    this.setState({showstock: showstock})

  }

  render() {
    return (
      <div>
        <SearchBar checked = {this.state.checked} changeFilter = {this.changeFilter} sortAlphabetically={this.sortAlphabetically} sortPrice={this.sortPrice}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stock={this.state.showstock} handleClick={this.handleClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stock={this.state.portfolioStock} handleClick={this.handleClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
