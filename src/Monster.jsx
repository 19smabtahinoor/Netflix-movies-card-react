import React from 'react'
import cardDatas from './CardDatas'
import Card from './Card'

function Monster(){
    return(
        <>
        <Card
        key = {cardDatas[0].id}
        image = {cardDatas[0].image}
        subtitle = {cardDatas[0].subtitle}
        title = {cardDatas[0].title}
        seriesLink = {cardDatas[0].seriesLink}
        />
        </>
    )
}
export default Monster