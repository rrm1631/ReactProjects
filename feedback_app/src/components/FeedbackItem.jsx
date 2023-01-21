import React, { useContext } from 'react';
// import {useState} from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item, /*handleDelete*/}) {

    const {handleDelete, editFeedback} = useContext(FeedbackContext);
    // const [rating, setRating] = useState(item.rating);
    // const [text, setText] = useState(item.text);

    return (
        // <div className='card'>
        //     <div className='num-display'> {item.rating} </div>
        //     <div className='text-display'>{item.text} </div>
        // </div>

        <Card>
            <div className='num-display'> {item.rating} </div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'></FaTimes>
            </button>
            <button className="edit" onClick={()=>{editFeedback(item)}}>
                <FaEdit color='purple'></FaEdit>
            </button>
            <div className='text-display'>{item.text} </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem
