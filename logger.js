const fs = require('fs');
const path = require('path');

const logEvent = (message, requestPath = '/', statusCode) => {
    if (requestPath === '/' || requestPath === '/index.html') {
        return; // Do not log if it is the root path
    }

    // Determine log level based on status code
    let logLevel;
    if (statusCode >= 200 && statusCode < 300) {
        logLevel = 'Success';
        console.log(`${logLevel}: ${statusCode} - ${requestPath} - ${message}`);
    } else if (statusCode >= 400 && statusCode < 500) {
        logLevel = 'Client Error';
        console.warn(`${logLevel}: ${statusCode} - ${requestPath} - ${message}`);
    } else if (statusCode >= 500) {
        logLevel = 'Server Error';
        console.error(`${logLevel}: ${statusCode} - ${requestPath} - ${message}`);
    } else {
        logLevel = 'Info';
        console.info(`${logLevel}: ${requestPath} - ${message}`);
    }

    // Create a logs directory if it does not exist
    const logPath = path.join(__dirname, 'logs');
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }

    // Write log message to a file
    const logFile = path.join(logPath, `${new Date().toISOString().slice(0, 10)}.log`);
    const logMessage = `${new Date().toISOString()} - ${logLevel} - ${statusCode || ''} - ${requestPath} - ${message}\n`;

    // Append log message to the log file
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        }
    });
};

module.exports = { logEvent };
