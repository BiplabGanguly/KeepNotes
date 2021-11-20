import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const ViewNotes = () => {

    const { id } = useParams();

    const [notes, setNote] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        loadNotes();
    }, [])

    const loadNotes = async () => {
        const text = await axios.get(`http://localhost:3004/notes/${id}`)
        setNote(text.data)
    }
    return (
        <div className='noteText container'>
            <Link className='btnBack' to='/'>
                <i class="fa fa-arrow-circle-left back-arrow"></i>
            </Link>
            <Link className='btnedit' type='button' to={`/Edit/${id}`}>
                <i class="fa fa-edit"></i>
            </Link>
            <h4 className='textTitle'>{notes.title}</h4>
            <hr />
            <h5 className='para'>{notes.description}</h5>
        </div>
    )
}
