const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


//create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }

});

//create remove command
yargs.command({
    command: "remove",
    describe: "Removes a note",
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: "list",
    describe: "Lists all the notes",
    handler() {
        notes.listNotes();
    }
})

//create read command
yargs.command({
    command: "read",
    describe: "Reads the note",
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
// or 
yargs.parse();