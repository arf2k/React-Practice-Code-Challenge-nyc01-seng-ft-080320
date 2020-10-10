import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  function renderSushi(){
    return props.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eat={props.eat} taken={props.eaten.includes(sushi)}/>)
  }
  
  return (
    <Fragment>
      <div className="belt">
        {
        renderSushi()
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer