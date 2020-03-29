var arrayOfQuotes = [
    {
        'author': 'Virginia Satir',
        'quote': 'We must not allow other peoples limited perceptions to define us.'

    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {
        'author': 'Friedrich Nietzsche',
        'quote': 'That which does not kill us makes us stronger.'
    },
    {
        'author': 'William Shakespeare',
        'quote': 'This above all, to thine own self be true.'
    },
    {
        'author': 'Napoleon Hill',
        'quote': 'If you cannot do great things, do small things in a great way.'
    },
    {
        'author': 'Milton Berle',
        'quote': 'If opportunity doesnt knock, build a door.'
    },
    {
        'author': 'John Wooden',
        'quote': 'Do not let what you cannot do interfere with what you can do.'
    },
    {
        'author': 'Maya Angelou',
        'quote': 'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        'author': 'Jim Rohn',
        'quote': 'Either you run the day, or the day runs you.'
    },
    {
        'author': 'Alan Kay',
        'quote': 'The best way to predict the future is to invent it.'
    },
    {
        'author': 'Rabbi Hillel',
        'quote': 'If I am not for myself, who is for me. And if I am only for myself, what am I. And if not now, when.'
    },
    {
        'author': 'Theodore Roosevelt',
        'quote': 'Believe you can and youre halfway there.'
    }
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById('quoteOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';

    document.getElementById('authorOutput').innerHTML = '"' + arrayOfQuotes[randomNumber].author;
}