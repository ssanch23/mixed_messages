const flights = {
    from: ['Atlanta', 'Dallas', 'Phoenix', 'Charlotte', 'Salt Lake City', 'Detroit'],
    to: ['New York City', 'Los Angeles', 'Denver', 'Miami', 'Vancouver', 'Toronto', 'Seattle', 'Chicago', 'Washington DC'],
    seat: ['First Class', 'Business', 'Premium Economy', 'Economy']
};

/* 
const flightGenerator = () => {
    const fromSelection = flights.from[numGenerator()];
    const toSelection = flights.to[numGenerator()];
    const seatSelection = flights.seat[numGenerator()];

    return `Your flight departs from ${fromSelection}! You're flying to ${toSelection}! Seat type: ${seatSelection}.`
}
*/

const numGenerator = (num) => Math.floor(Math.random() * num);

const flightGenerator = () => {
    let flightInfo = [];

    for (category in flights) {
        const idx = numGenerator(flights[category].length);
        const selection = flights[category][idx];
        switch (category) {
            case 'from':
                flightInfo.push(`Your flight departs from ${selection}!`);
                break;
            case 'to':
                flightInfo.push(`You're flying to ${selection}!`);
                break;
            case 'seat':
                flightInfo.push(`Seat type: ${selection}`);
                break;
            default:
                flightInfo.push(`Could not generate flight.`);   
        }
    }

    return flightInfo.join('\n')
}


console.log(flightGenerator())