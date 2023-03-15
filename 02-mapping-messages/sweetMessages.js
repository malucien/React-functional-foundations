const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

//const sweetMessages = `${messages[0]}, sweetie?`;

//const sweetMessages =[];

//for (let i = 0; i < message.length; i++) {
//    const newMessage = `${messages[i]}, sweetie?`;
//    sweetMessages.push(newMessage);
//}

const sweetMessages = messages.map((message) => `${message}, sweetie?`)

console.log(sweetMessages)
