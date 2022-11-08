import React , { useState , useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';

function Alarm() {

  var time = new Date().toLocaleTimeString();
  var audiostart = document.getElementById('audiostart');
  
  const [timecount,timeupdate] = useState(time);
  const [alarmtime , setTime] = useState('');
  

  const UpdateTime = () => {
    var time = new Date().toLocaleTimeString();
    timeupdate(time);
  }
  setInterval(UpdateTime, 1000);


  useEffect(() => {
    setTime(moment(alarmtime, ["h:mm:ss A"]).format("h:mm:ss A"))
    if (alarmtime === timecount){
      audiostart.play();
    }
  },[alarmtime,timecount,audiostart]);


  return (
    <div className='page-layout'>
        <div className='container-1440 text-center'>
            <h1 className='text-heading'>{timecount}</h1>
            <input type="time" id='time' onChange={(e) => setTime(e.target.value)}></input>
            <ReactAudioPlayer id='audiostart' src="subahhogayi.mp3" />
        </div>
    </div>
  )
}

export default Alarm