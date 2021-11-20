import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export const EditNotes = () => {

    const history = useHistory();
    const {id} = useParams();

    const [notes,setNote] = useState({
        title : '',
        description:''
    })

    useEffect(() => {
        loadNotes();
    }, [])

    const AddNotes = (e) => {
        setNote({ ...notes, [e.target.name]: e.target.value });
    }

    const loadNotes = async () => {
        const text = await axios.get(`http://localhost:3004/notes/${id}`)
        setNote(text.data)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3004/notes/${id}`, notes);
        history.push(`/view/${id}`);
    }

    const {title, description} = notes;
    return (
        <div>
        <br/>
          <Link className='btnBack-add' to='/'>
                <i class="fa fa-arrow-circle-left back-arrow"></i>
            </Link>
        <br /> <br />
        <form className='container addnotes' 
        onSubmit={e => submitForm(e)}
        >
            <input type='text' placeholder='Title'
                className=' inputTitle form-control'
                name='title'
                value={title}
                onChange={(e) => AddNotes(e)} 
                />
            <br />
            <textarea className='form-control area'
                name='description'
                value={description}
                onChange={(e) => AddNotes(e)} 
                />
            <br />
            <button type='submit' className='btnPublish'>
                <i class="fa fa-plus-square"></i>
            </button>
        </form>
    </div>

    )
}
