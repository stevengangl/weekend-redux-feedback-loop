import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {

const dispatch = useDispatch();
const history = useHistory();


const resetReducers = () => {

    dispatch({
        type: 'CLEAR',
        payload: []
    })

    history.push('/')

}

    return (
       <>
        <div className='feedback'>
            <h1>Feedback!</h1> 
            <h6>need a star and flex box</h6>
        </div>

        <div className='feedback2' >
        <h1>Thankyou!</h1>
        <button id='feedbackBtn' onClick={resetReducers}>Leave New Feedback</button>
            
        </div>
       </>
    )
}

export default Success;