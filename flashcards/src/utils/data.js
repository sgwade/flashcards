let decks = {
    Sam: {
        title: 'Sam',
        questions: [
            {
                question: 'What is Sam\'s last name',
                answer: 'Wade'
            },
            {
                question: 'Where does Sam live',
                answer: 'Long Beach'
            }
        ]
    },
    Gon: {
        title: 'Gon',
        questions: [
            {
                question: 'Who is Gon looking for?',
                answer: 'Ging'
            },
            {
                question: 'Who is Gon\'s best friend?',
                answer: 'Killua'
            }
        ]
    }
}

const formatDec = function(title) {
    return {
        [title]: {
            title,
            questions: [],
        },
    };
}

const getDecks = function() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...decks}), 1000);
    });
}

const getDeck = function(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            decks[id] !== undefined
            ? res({...decks[id]})
            : rej(Error("Deck not found!!"));
        }, 500);
    });
}

const saveDeckTitle = function(title) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            decks[title] !== undefined
            ? rej(Error("That deck name already exists"))
            : decks[title] = formatDeck(title), res(decks[title]);
        }, 500);
    });
}

const addCardToDeck = function(title, card) {
    return new Promise((res, rej) => {
        decks[title] !== undefined
        ? decks[title] = {
            ...decks[title],
            "questions": decks[title].questions.concat([card]),
        }
        : rej(Error("Deck not found!!"));
    })
}

export {
    getDecks,
    getDeck,
    saveDeckTitle,
    addCardToDeck,
};