import React from 'react'
import Propssss from './propssss'
import Propsarray from './proparray'

function Props(props) {
  return (
    <div className='page-layout'>
        <div className='container-1440 text-center'>
            <Propssss name="Zeeshan" nickname='Zee'/>
            <Propssss name="Waris" nickname='Waris'/>
            <Propssss name="Usama Ghani" nickname='PoopUp'/>
            <Propsarray array={['Hello','Yellow','Red']}/>
        </div>
    </div>
  )
}

export default Props