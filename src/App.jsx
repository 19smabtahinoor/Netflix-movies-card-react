import React from 'react'
import Monster from './Monster'
import Eden from './Eden'
import Badtrip from './Badtrip'

const seriesName = prompt('Enter Movie Name : Monster / Eden / Badtrip', 'Monster')

 const Filtering = () => {
  if(seriesName === 'Monster'){
    return <Monster/>
  }else if(seriesName === 'Eden'){
    return <Eden/>
  }else if(seriesName === 'Badtrip'){
    return <Badtrip/>
  }else{
    alert('Nothing found')
  }
 }

function App(){
    return(

        <>
        <div className="container">

            {/* {cardDatas.map( (value) => {
            return(
                <Card
                key = {value.id}
                image = {value.image}
                subtitle = {value.subtitle}
                title = {value.title}
                seriesLink = {value.seriesLink}
                />
            )
            })} */}
            <Filtering/>
        </div>
       
        </>

    )
}
export default App