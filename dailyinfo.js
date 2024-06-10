const http = require('http');

const getDailyInfo = (callback) => {
    const url = 'http://worldtimeapi.org/api/timezone/Etc/UTC';

    http.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const json = JSON.parse(data);
            const info = `
                <h1>Daily Information</h1>
                <p>Current UTC Date and Time: ${json.datetime}</p>
                <a href="/">Home</a>
            `;
            callback(null, info);
        });

    }).on('error', (err) => {
        callback(err);
    });
};

module.exports = { getDailyInfo };
