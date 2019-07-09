const fs = require ('fs')

//List all notes
const listNotes = () =>
{
    const notes =  loadNotes()
    //console.log(notes)
    //const noteToReturn = notes.filter((note)=>note.title === title)
    console.log(notes)
    notes.forEach(note => {
        console.log(note.title)
    });
}

//read note
const readNote = (title) =>
{
    const notes =  loadNotes()
    //MY WAY :HOW I MADE READ NOTES
    // const noteToReturn = notes.filter((note)=>note.title === title)
    // noteToReturn.forEach((note)=>
    // {
    //     console.log(note.title)
    //     console.log(note.body)
    // } )
    
    //HOW ITS MADE IN COURSE USING FIND FN

    const note = notes.find((note)=>note.title===title)

    if(note)
    {
        console.log(note.title)
        console.log(note.body)
    }
    else{
            console.log("Note not found")
        }

    
    

    
}
//add note : FILTER fn returns a new array it does not alter the existing array which is passed to it for manipulations
// filter method even if it finds the record it will look through all the items in array.Thus,find method is more suitable for add notes

const addNotes = (title,body) => {
    
        const notes = loadNotes()
        
       // const duplicateNotes = notes.filter((note)=>note.title===title)
       const duplicateNotes = notes.find((note)=>note.title===title) //find stops when it finds the match
       debugger
        if (duplicateNotes.length === 0) // in case of find if(duplicateNotes === undefined) also works as find returns undefined if it didnt find any duplicate records
        {
            notes.push({
                title: title,
                body:body
            })
            saveNotes(notes)
        }
        else {
                console.log('Title exists')
        }   
       
        
        
    }


    // Remove Note
const removeNote =  (title) =>{
    
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title!==title)
    
    if(notes.length===notesToKeep.length)
    {
        console.log('Note Not Found')
    }
       else{
           console.log("Note Removed")
           saveNotes(notesToKeep)
       }
}

//Load notes common fn
const loadNotes = () =>
{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
}
}

//save notes common fn
const saveNotes =  (note) =>
{
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json',dataJSON)
}
//exporting fns which are to be accessed outside the file
module.exports = {
    addNotes : addNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote: readNote
}