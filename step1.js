const fs = require('fs');
const process = require('process');



function cat(path) {
    fs.readFile('one.txt', 'utf8', function (err, data) {
        if (err) {
            // handle possible error
            console.error(`Error reading ${path}: ${err}`);
            // kill the process and tell the shell it errored
            process.exit(1);
        }
        // otherwise success
        console.log(`file contents: ${data}`);
    });
}
cat(process.argv[2]);

