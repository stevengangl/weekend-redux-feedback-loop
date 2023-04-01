import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Comments() {

    const [commentInfo, setCommentInfo] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {

        dispatch({
            type: 'COMMENTS',
            payload: commentInfo
        })
        history.push('/review')
    }



const handleComments = (event) => {
    setCommentInfo(event.target.value)
    console.log('heres the comment:', commentInfo)
}

    return (
        <>
        <div>
            <h2>Any comments you want to leave?</h2>
            <h5 id="comments">Comments</h5>
            <input 
            type='text'
            value={commentInfo}
            onChange={handleComments}
            placeholder='Comments'
            />
        </div>

        <div>
            <button className='nextBtn' onClick={handleClick}>next</button>
        </div>
        </>
    )
}

export default Comments;