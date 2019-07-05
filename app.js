const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.command({
    command : 'add',
    describe : 'Adding a note',
    builder: {
                title: {
                    describe : 'Note Title',
                    demandOption : true,
                    type : 'string'
                },
                body: {
                    describe : 'Note Body',
                    demandOption : true,
                    type : 'string'
                }
    },
    handler (argv)
    {
        notes.addNotes(argv.title,argv.body)
    } 
})

//Remove Command

yargs.command({
    command : 'remove',
    describe : 'Removing a note',
    builder: {
                title: {
                    describe : 'Note Title',
                    demandOption : true,
                    type : 'string'
                }
                
    },
    handler (argv) 
    { 
        notes.removeNote(argv.title)
    }
    
})

//List Notes

yargs.command({
    command : 'list',
    describe : 'Listing a note',
    
    handler () 
    { 
        notes.listNotes()
    }
    
})

//read note
yargs.command({
    command : 'read',
    describe : 'Read a note',
    builder: {
                title: {
                    describe : 'Note Title',
                    demandOption : true,
                    type : 'string'
                }
                
    },
    handler (argv) 
    { 
        notes.readNote(argv.title)
    }
    
})


yargs.parse()
