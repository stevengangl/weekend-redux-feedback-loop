import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Supported() {

    const history = useHistory();
    const dispacth = useDispatch();
    const [supportNumber, setSupportNumber] = useState('')

    const handleClick = () => {

        dispacth({
            type: 'SUPPORT',
            payload: supportNumber
        })
        history.push("/comments")
    }



    const handleSupport = (event) => {
        setSupportNumber(event.target.value)
        console.log('supportnumber:', supportNumber)
    }


    return (
        <>
            <div>
                <h2>How well are you being supported?</h2>
                <h5 id='support'>Support?</h5>
                <input 
                type='number'
                value={supportNumber}
                onChange={handleSupport}
                placeholder='0'
                />
            </div>
            <div>
                <button className="nextBtn" onClick={handleClick}>Next</button>
            </div>
        </>
    )
};

export default Supported;