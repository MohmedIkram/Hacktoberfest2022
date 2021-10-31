const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your Notes...'

const addNotes = (title, body) => {

    //to add notes, we need a list/Array of notes in which we will add out new note
    const notes = loadNotes()

    //return ARRAY of objectes with same title
    // const duplicateNotes = notes.filter((notes) => notes.title === title)//checks complete array

    const duplicateNote = notes.find((notes) => notes.title === title) //stops when title found

    // debugger

    // if (duplicateNotes.length == 0) {   //no duplicates found
    if (!duplicateNote) {
        //we are pushing so the file will write the new array in JSON
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green('Note Added!'));

    }
    else {
        console.log(chalk.red('Title Already Taken'));
    }
}

//return an array of notes
const loadNotes = () => {
    //get notes from JSON

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const dataObject = JSON.parse(dataJSON)
        return dataObject
    } catch (e) {   //catch is called if any line in try gives error (eg- accessing notes.json which is not there)
        return []
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const removeNote = (title) => {
    const notes = loadNotes()

    const toKeep = notes.filter((notes) => notes.title != title)

    if (toKeep.length < notes.length) {
        console.log(chalk.green(title + ' Note Removed'));
        saveNotes(toKeep)
    }
    else {
        console.log(chalk.red(title + ' Note Not Found'));
    }
}

const listNotes = () => {
    const notesList = loadNotes()

    if (notesList.length === 0)
        console.log(chalk.bgRed('No Notes Present'));
    else {
        console.log(chalk.inverse('Your Notes'));

        notesList.forEach(currNote => {
            console.log(currNote.title);
            // console.log( currNote.body);
        });
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const toRead = notes.find((notes) => {
        return notes.title === title
    })

    if (toRead) {
        console.log(toRead.body);
    } else {
        console.log(chalk.red('No such Note Present'));
    }
}

//exporting single function
// module.exports = getNotes

//exporting multiple things => object
module.exports = {
    //name: to export
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}