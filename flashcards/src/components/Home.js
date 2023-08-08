import React from 'react';
import Deck from './Deck';

class Home extends React.Component {
    render() {
        
        return (
            <div className="p-12 grid grid-cols-4 gap-4">
                <Deck />

            </div>
        )
    }
}

export default Home;