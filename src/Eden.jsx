import React from 'react'
import cardDatas from './CardDatas'
import Card from './Card'

function Eden(){
    return(
        <>
        <Card
        key = {cardDatas[1].id}
        image = {cardDatas[1].image}
        subtitle = {cardDatas[1].subtitle}
        title = {cardDatas[1].title}
        seriesLink = {cardDatas[1].seriesLink}
        />
        </>
    )
}
export default Eden