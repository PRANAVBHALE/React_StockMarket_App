import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {formatedData} from '../helpers'
import {lookSouceData} from '../actions'

import Websocket from 'react-websocket'
import Table from '../components/tableView'
import '../styles/app.css';






class App extends Component{

  constructor(props){
    super(props);
    this.socket = new WebSocket('ws://stocks.mnet.website');
  }

  updateStockList(data){
    const niceData = formatedData(JSON.parse(data))
    console.log(niceData);
  this.props.lookSouceData(niceData)

  }

  componentWillUnmount(){
    this.socket.close();
  }

  render(){
    return(
      <div className = 'app'>
        <div className = 'header'>
          StockMarket App
        </div>
        <Websocket url='ws://stocks.mnet.website'  onMessage={this.updateStockList.bind(this)}  />
        <div className = 'main-container' >
          <Table data= {this.props.tickerData} />
        </div>
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    tickerData : state.tickerData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({lookSouceData:lookSouceData},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
