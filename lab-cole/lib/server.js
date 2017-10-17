'use strict';

const http = require("http");
const router = require("./router");
const note = require("../route/note.js");

let isRunning = false;

// Just get a server running
const app = http.createServer( router.route );

module.exports = {
    start: () => {
        return new Promise( (resolve, reject) => {
            // Running?
            // Start
            // Handle error
            if ( ! isRunning ) {
                app.listen( port, (err) => {
                    if ( err ) {
                        reject(err);
                    }
                    else {
                        isRunning = true;
                        resolve(`Server up on port ${port}`);
                    }
                });
            }
            else {
                reject("Server is already running");
            }

        })
    },
    
    stop: () => {
        return new Promise( (resolve,reject) => {
            // Running?
            // Kill
            // Handle error
            // Check
            if ( ! isRunning ) {
                reject("Server is already off");
            }
            else {
                app.close( err => {
                    if ( err ) {
                        reject(err);
                    }
                    else {
                        isRunning = false;
                        resolve("Shutting Down");
                    }
                });
            }
        });
    }
}