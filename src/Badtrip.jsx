import React from 'react'
import cardDatas from './CardDatas'
import Card from './Card'

function Badtrip(){
    return(
        <>
        <Card
        key = {cardDatas[2].id}
        image = {cardDatas[2].image}
        subtitle = {cardDatas[2].subtitle}
        title = {cardDatas[2].title}
        seriesLink = {cardDatas[2].seriesLink}
        />
        </>
    )
}
export default Badtrip