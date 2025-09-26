const numGenerator = () => Math.floor(Math.random() * 4)


console.log(numGenerator())

const flights = {
    from: ['Atlanta', 'Dallas', 'Phoenix', 'Charlotte'],
    to: ['New York City', 'Los Angeles', 'Denver', 'Miami'],
    seat: ['First Class', 'Business', 'Premium Economy', 'Economy']
}

const flightGenerator = () => {
let fromSelection;
for (let i = 0; i < flights.from.length; i++) {
    fromSelection = flights.from[numGenerator()];
};

let toSelection;
for (let i = 0; i < flights.to.length; i++) {
    toSelection = flights.to[numGenerator()];
};

let seatSelection;
for (let i = 0; i < flights.seat.length; i++) {
    seatSelection = flights.seat[numGenerator()];
};

return `Your flight departs from ${fromSelection}! You're flying to ${toSelection}! Seat type: ${seatSelection}.`
}

console.log(flightGenerator())