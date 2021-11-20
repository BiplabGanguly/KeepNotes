import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Notes = () => {

    const [notes, setNote] = useState([]);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    useEffect(() => {
        loadNotes();
    }, [])

    useEffect(() => {
        setOutput([])
        notes.filter(note => {
            if (note.title.toLowerCase().includes(input.toLowerCase())) {
                setOutput(output => [...output, note])
            }
        })
    }, [input])

    const loadNotes = async () => {
        const text = await axios.get("http://localhost:3004/notes");
        setNote(text.data);
    }

    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:3004/notes/${id}`)
        loadNotes();
    }

    return (
        <div className='noteBody container'>
            <input type='text' placeholder='search'
                className='search'
                onChange={(e) => { setInput(e.target.value) }}
            />
            <div className="row">
                {
                     input === '' ?
                        notes.map((note) => (

                            <div className='notes'>
                                <Link className='btn' to={`/View/${note.id}`}>
                                    <i class="fa fa-arrow-left"></i>
                                </Link>
                                <button onClick={() => deleteNote(note.id)} className='btndelete'>
                                    <i class="fa fa-close"></i>
                                </button>
                                <h4 className='linkTitle'>
                                    {note.title}
                                </h4>    
                            </div>


                        ))
                        :
                        output.map((note) => (

                            <div className='notes'>
                                <Link className='btn' to={`/View/${note.id}`}>
                                    <i class="fa fa-arrow-left"></i>
                                </Link>
                                <button onClick={() => deleteNote(note.id)} className='btndelete'>
                                    <i class="fa fa-close"></i>
                                </button>
                                <h4 className='linkTitle'>
                                    {note.title}
                                </h4>
                            </div>

                        ))
                }
            </div>
            <div className="btnaddNotes">
                <Link className='btnAdd' to='/Add/Note'>
                    <i class="fa fa-plus"></i>
                </Link>
            </div>
        </div>
    )
}
