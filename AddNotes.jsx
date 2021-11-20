import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export const AddNotes = () => {
    let history = useHistory();
    const [notes, setNotes] = useState({
        title: '',
        description: ''
    })

    const AddNotes = (e) => {
        setNotes({ ...notes, [e.target.name]: e.target.value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3004/notes", notes);
        history.push('/');
    }

    const { title, description } = notes;
    return (
        <div>
            <br/>
              <Link className='btnBack-add' to='/'>
                    <i class="fa fa-arrow-circle-left back-arrow"></i>
                </Link>
            <br /> <br />
            <form className='container addnotes' onSubmit={e => submitForm(e)}>
                <input type='text' placeholder='Title'
                    className=' inputTitle form-control'
                    name='title'
                    value={title}
                    onChange={(e) => AddNotes(e)} />
                <br />
                <textarea className='form-control area'
                    name='description'
                    value={description}
                    onChange={(e) => AddNotes(e)} />
                <br />
                <button type='submit' className='btnPublish'>
                    <i class="fa fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}
