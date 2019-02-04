import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        // taking a copy of existing state
        const fishes = { ...this.state.fishes };
        // adding new fish to existing fishes object
        fishes[`fish${Date.now()}`] = fish;
        // set new fishes object to state
        this.setState({
            fishes
           // above is same as saying  fishes: fishes
        });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;