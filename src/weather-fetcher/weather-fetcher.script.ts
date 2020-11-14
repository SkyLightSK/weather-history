import * as http from 'http';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

const cities = JSON.parse( fs.readFileSync(__dirname + '/data/cities.json').toString() ) ;
const allWeek = [];
const urls = [];

let completed_req = 0;
let uncompleted_req = 0;
let counter = 0;

// Generate last 7 days from current day
function Last7Days() {
    return '0123456'.split('').map( ( n: string ) => {
        const d = new Date();
        d.setDate(d.getDate() - (+n) );
        return ( (day, month, year) => {
            return [day<10 ? '0'+day : day, month<10 ? '0'+month : month, year].join('-');
        })(d.getFullYear(), d.getMonth()+1, d.getDate());
    });
}

// Finish and write data
function finish() {
    // All download done, process responses array
    fs.writeFile(__dirname + '/data/data.json', JSON.stringify( allWeek ) , (err) => {
        if (err) throw err;
        console.info('Data written to file');
        console.log("HAPPY NEW YEAR!!");
    });
}

// Log status of script
function logStatus () {
    console.log(`Completed req: ${completed_req} Uncompleted req: ${uncompleted_req} Total: ${(completed_req+uncompleted_req)}/${urls.length}`);
}

// Create urls based on amount of cities
cities.forEach( city => Last7Days()
    .map( date => urls.push(`${process.env.API_URL}?key=${process.env.API_KEY}&q=${city},%20US&dt=${date}`))
);

console.info(`Amount of weather to be fetched ${urls.length}`);

const newYearCountdown = setInterval(() => {

    http.get( urls[counter], (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            completed_req++;
            allWeek.push(data);
            logStatus();
            if ( (completed_req+uncompleted_req) === urls.length) {
                finish();
            }
        });


    }).on("error", (err) => {
        uncompleted_req++;
        logStatus();
        console.error("Error: " + err.message);
        if ( (completed_req+uncompleted_req) === urls.length) {
            finish();
        }
    });

    counter++;

    if (counter === urls.length) {
        clearInterval(newYearCountdown);
    }

}, 500);
