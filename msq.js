const questions = [{
    "negative_mark": -1,
    "isMultipleOpt": true,
    "correct_mark": 2,
    "options": [{
        "_id": "63f864a67e30ff30803f6f96",
        "value": "A big terrible lizard",
        "isCorrect": true
    },
    {
        "_id": "63f864a67e30ff30803f6f97",
        "value": "ex gf",
        "isCorrect": false
    },
    {
        "_id": "63f864a67e30ff30803f6f98",
        "value": "your mum",
        "isCorrect": false
    },
    {
        "_id": "63f864a67e30ff30803f6f99",
        "value": "Prehistoric creature",
        "isCorrect": true
    }
    ]
}];

let answer_id = [
    "63f864a67e30ff30803f6f96",
    "63f864a67e30ff30803f6f99"
];

if (questions[0].isMultipleOpt === true) {
    questions.forEach(question => {
        const isAnswerGiven = answer_id.length > 0;

        const isCorrect = isAnswerGiven && question.options.every(option => {
            return answer_id.includes(option._id) ? option.isCorrect : true;
        });

        const isIncorrect = isAnswerGiven && question.options.some(option => {
            return answer_id.includes(option._id) && !option.isCorrect;
        });

        if (!isAnswerGiven) {
            console.log('No answer given');
        } else if (isIncorrect) {
            console.log('Fail');
        } else if (isCorrect && answer_id.length === question.options.filter(option => option.isCorrect).length) {
            console.log('Pass');
        } else {
            console.log('Fail');
        }
    });
}

