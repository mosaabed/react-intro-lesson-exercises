import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return 'Mosa Abde Elhady'
  }

  getMorningGreeting() {
  }

  getEveningGreeting() {
  }

  showCompany(name, revenue) {
    return <div>{name} makes {revenue} every year </div>
  }

  getClassName(temperature) {
    if(temperature<=15){return 'freezing'}
    if(temperature>15 && temperature<30){
      return "fair"
    }
    if(temperature>=30){return 'hell-scabe'}

  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <h4>{this.getStuff()}</h4>
          <div className="exercise" id="spotcheck-1">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Companies 2</h4>
          {companies.map(p => this.showCompany(p.name , p.revenue))}
          <div className="exercise" id="spotcheck-2">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>tempreture 3</h4>
          <div id="weatherBox" class={this.getClassName(15)}>aaaaaaa</div>
          <div className="exercise" id="spotcheck-3">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {/* your code here */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* your code here */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
