'use strict';

const Note = require('../model/note.js');
const router = require('../lib/router.js');

let notes = [];

let sendStatus = (res, status, text) => {
    res.writehead(status);
    res.write(text);
    res.end();
};

let sendJSON = (res, status, text) => {
    res.writehead(status, {
        'Content-Type':'application/json'
    });
    res.end();
};

router.post('/api/notes', (req,res) => {
    if ( ! req.body.title ) {
        return sendStatus(res, 400, "Missing Title");
    }
    if ( ! req.body.content ) {
        return sendStatus(res, 400, "Missing Content");
    }
    let note = new Note(req.body);
    notes.push(note);

    sendJSON(res, 201, note);

});

//router.get stuff

//more router stuff coming


