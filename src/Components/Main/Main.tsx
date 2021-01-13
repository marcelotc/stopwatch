import { useEffect, useState } from 'react';
import './Main.css'
import calculateTimer from '../../Helper/Timer';
import Controls from '../Controls/Controls';

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]); 
 
    useEffect(() => {

        let timerArray: Array<number | string> = calculateTimer(timeInSeconds);
        setTimerArray(timerArray);
    }, [timeInSeconds])

    return (
        <main>
            <section className="time-container">
                <p className="timer-text">{timerArray[0]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[1]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[2]}</p>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds}></Controls>
        </main>
    );
  }
  
  export default Main;
  