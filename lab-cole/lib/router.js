'use strict';

const parser = require("./parse-request");

// Route Registry
// Store route handlers for each of the verbs ...
/*
    i.e.
    GET: {
        "/api/note" : (req, res) => {},  ....
    }
*/
const routeHandlers = {
    GET: {},
    PUT: {},
    POST: {},
    PATCH: {},
    DELETE: {}
};

module.exports = {
    get: (uri, callback) => {
        routeHandlers.GET[uri] = callback;
    },
    post: (uri, callback) => {
        routeHandlers.POST[uri] = callback;
    },
    put: (uri, callback) => {
        routeHandlers.PUT[uri] = callback;
    },
    patch: (uri, callback) => {
        routeHandlers.PATCH[uri] = callback;
    },
    delete: (uri, callback) => {
        routeHandlers.DELETE[uri] = callback;
    },
    route: (req, res) => {
        // parse the request
        // Return a 400 if the request itself is invalid
        // Find the handler
            // 404 if it's not there            
        // Execute Handler
        parser(req)
            .then( (reg) => {
                if ( handler ) {
                    return handler(reg, res);
                }
                else {
                    console.error("NOT_FOUND", req.url.pathname);
                    res.writeHead(404);
                    res.end();
                }
            })
            .catch( (err) => {
                console.error("INVALID_REQUEST", err);
                res.writeHead(400);
                res.end();
            });
    }
};