const flights = {
    from: ['Atlanta', 'Dallas', 'Phoenix', 'Charlotte', 'Salt Lake City', 'Detroit'],
    to: ['New York City', 'Los Angeles', 'Denver', 'Miami', 'Vancouver', 'Toronto', 'Seattle', 'Chicago', 'Washington DC'],
    letter: ['A', 'B', 'C', 'D', 'E', 'F'],
    minute: [':00', ':10', ':15', ':20', ':30',':40', ':45', ':50'],
    ampm: ['AM', 'PM'],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    code: ['AA', 'DL', 'B6', 'NK', 'WN', 'UA', 'G4', 'F9'],
};

const numGenerator = (num) => Math.floor(Math.random() * num);
const numGenerator2 = (max) => Math.floor(Math.random() * (max) + 1);

const flightGenerator = () => {
    const row = numGenerator2(30);
    const letter = flights.letter[numGenerator(flights.letter.length)];
    const month = flights.month[numGenerator(flights.month.length)];
    const day = numGenerator2(28);
    const hour = numGenerator2(12);
    const minute = flights.minute[numGenerator(flights.minute.length)];
    const ampm = flights.ampm[numGenerator(flights.ampm.length)];
    const gateLet = flights.letter[numGenerator(flights.letter.length)];
    const gateNum = numGenerator2(26);
    const flightLet = flights.code[numGenerator(flights.code.length)];
    const flightNum = numGenerator2(999);

    return {
        from: flights.from[numGenerator(flights.from.length)],
        to: flights.to[numGenerator(flights.to.length)],
        seat: row + letter,
        time: hour + minute + ampm,
        date: day + month + '26',
        gate: gateLet + gateNum,
        code: flightLet + flightNum
    };
};

let button = document.querySelector('.generate-btn');
let section = document.querySelector('.ticket-container');

button.onclick = function() {
    section.classList.add('show');

    const flight = flightGenerator();

    document.querySelectorAll('.from').forEach(el => {
        el.textContent = flight.from;
    });
    document.querySelectorAll('.to').forEach(el => {
        el.textContent = flight.to;
    });
    document.querySelectorAll('.seat').forEach(el => {
        el.textContent = flight.seat;
    });
    document.querySelector('.time').textContent = flight.time;
    document.querySelector('.gate').textContent = flight.gate;
    document.querySelector('.date').textContent = flight.date;
    document.querySelectorAll('.flight-code').forEach(el => {
        el.textContent = flight.code;
    });
    
    button.textContent = 'New Flight';
};
