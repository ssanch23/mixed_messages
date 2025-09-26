const numGenerator = () => Math.floor(Math.random() * 4)


console.log(numGenerator())

const flights = {
    from: ['Atlanta', 'Dallas', 'Phoenix', 'Charlotte'],
    to: ['New York City', 'Los Angeles', 'Denver', 'Miami'],
    seat: ['First Class', 'Business', 'Premium Economy', 'Economy']
}

const flightGenerator = () => {
    const fromSelection = flights.from[numGenerator()];
    const toSelection = flights.to[numGenerator()];
    const seatSelection = flights.seat[numGenerator()];

    return `Your flight departs from ${fromSelection}! You're flying to ${toSelection}! Seat type: ${seatSelection}.`
}

console.log(flightGenerator())