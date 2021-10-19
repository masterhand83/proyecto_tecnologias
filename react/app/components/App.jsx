import React from 'react'
import Notes from './Notes.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: "fe",
                    task: 'Learn Webpack'
                },
                {
                    id: "fee",
                    task: 'Learn React'
                },
                {
                    id: "af",
                    task: 'Do laundry'
                },
            ]
        }
    }
    addNote = () => {
        this.setState({
            notes: [...this.state.notes,
                {
                    id: new Date().getMilliseconds().toString(),
                    task: 'New Task'
                }
            ]
        })

    }
    editNote = (id, task) => {
        if(!task.trim()) {
            return;
        }
        const notes = this.state.notes.map(note => {
            if(note.id === id && task){
                note.task = task;
            }
            return note;
        })

        this.setState({notes})
    }
    deleteNote = (id, e) => {
        e.stopPropagation()
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        })
    }

    render() {
        const notes = this.state.notes
        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes
                    notes={notes}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote} />
            </div>
        )
    }
}
