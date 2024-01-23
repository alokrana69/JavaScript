console.log('Person1: show ticket');
console.log('Person2: show ticket');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('Popcorn'));
    const getButter = new Promise((resolve, reject) => resolve('Butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('ColdDrinks'));

    const ticket = await promiseWifeBringingTickets;

    let [popcorn, butter, colddrinks] = await Promise.all([getPopcorn, getButter, getColdDrinks]);
    console.log(`${popcorn}-${butter}-${colddrinks}`);
    return ticket;
}

preMovie().then((m) => console.log(`person3: show ${m}`));

console.log('person4: show ticket');
console.log('person5: show ticket');
