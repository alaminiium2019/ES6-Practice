// const person = {name: 'Jack William', age: 20, job: 'facebooker', gfName: 'Ema Watson', address: "Banani", phone:'01920915832',friends:['jowel','rakib','sohel','mahfuz','imtiaz','sayeed','shamim']};
// const {phone} = person;
// console.log(phone);

const friends = ['Sohel','Jowel','Opul','Rakib','Latif','Aminul'];
const [first,...nextFriend] = friends;
console.log(first,nextFriend);