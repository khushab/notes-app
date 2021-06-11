const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return "Your Notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNote(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }

}

const removeNote = (title) => {
    notes = loadNotes();
    notesToKeep = notes.filter(note => note.title !== title);
    if (notesToKeep.length == notes.length) {
        console.log(chalk.red.inverse('Note not found'))
    }
    else {
        saveNote(notesToKeep);
        console.log(chalk.green.inverse("Note Removed"));
    }
}

const listNotes = () => {
    notes = loadNotes();
    console.log(chalk.blue.inverse("Your Notes"));
    notes.forEach(element => {
        console.log("--------------------")
        console.log("Title: ", element.title);
        console.log("Body: ", element.body);
        console.log("--------------------")
    });
}

const readNote = (title) => {
    notes = loadNotes();
    myNote = notes.find(note => note.title == title);
    if (!myNote) {
        console.log(chalk.red.inverse("Note now found"));
    } else {
        console.log(chalk.blue.inverse("Note found"));
        console.log("--------------------")
        console.log("Title: ", myNote.title);
        console.log("Body: ", myNote.body);
        console.log("--------------------")
    }
}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];

    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}