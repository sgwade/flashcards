import React from 'react';

//note: use tailwind
const DeckHeader = ({ decktitle }) => {
    return (
        <div className="bg-ppink-300">
            <div className="text-2xl font-bold">{decktitle}</div>
        </div>
    )
}
export default DeckHeader;