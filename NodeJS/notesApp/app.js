// const FileSystem = require('fs');   //importing flieSystem module from node

//to run other files we need to import them
// const func = require('./utils'); //   ./ => parent folder(notesApp)
// console.log(func(2, 3));

// const validator = require('validator')  //search in node_modules folder


const notes = require('./notes') //search in ./(notesApp) folder (imports exported data)
const chalk = require('chalk')
const yargs = require('yargs')  //adds user defined commands   (--title, --body)
const { argv } = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//TODO: add, remove, read,  list
yargs.command({
    command: 'add',
    describe: 'Add a new note',

    //builder includes operations to be used with "add" command
    builder: {

        //1. Title of the note
        title: {
            describe: 'Note title',
            demandOption: true, //Required
            type: 'string'
        },

        //2. Body of the note
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',

    //builder includes operations to be used with "remove" command
    builder: {
        title: {
            describe: 'Delete Title',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',

    builder: {
        title: {    //-title
            describe: "Note to be read",
            demandOption: true,
            type: 'string'
        }
    },

    handler: () => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'lists all notes',

    handler: () => {
        notes.listNotes();
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()
