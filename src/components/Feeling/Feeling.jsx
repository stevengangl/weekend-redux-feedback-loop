import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom';
import { useState } from "react";


function Feeling() {
    const dispatch = useDispatch();

    const [number, setNumber] = useState('')
 
    //still need to make next page
    const history = useHistory();
    const handleClick = () => {

        dispatch({
            type: 'FEELINGS',
            payload: number
        })
        // history.push('/understanding') //this will send the next button to the next page 
       }

       const handleFeelings = (event) => {
        setNumber(event.target.value)
       }


    return (
        <>
            <div>
                <h2>How are you feeling today?</h2>
                <h5>Feeling?</h5>
                <h3>put score for feelings here</h3>
                <input
                    type='number'
                    value={number} 
                    onChange={handleFeelings}
                    placeholder='0'
                    />


            </div>
            <div>
                <button id='nextBtn' onClick={handleClick}>Next</button>
            </div>

        </>
    )

};

export default Feeling;