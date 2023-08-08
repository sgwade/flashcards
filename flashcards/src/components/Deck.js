import React from 'react';
import DeckHeader from './DeckHeader';

// todo make clickable
class Deck extends React.Component {
    render() {
        const deck = this.props;
        return (
            <div className="h-64 w-48 pt-8 bg-purple-300 flex justify-center">
                <DeckHeader decktitle={deck.title} />
            </div>
        );
    }
}

export default Deck;