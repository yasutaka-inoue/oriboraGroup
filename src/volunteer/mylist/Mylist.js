import React from 'react'
import Title from '../../common/Title'
import MylistTab from './MylistTab'

const Mylist = ({myId}) => {
    return (
        <>
        <Title title="マイリスト"/>
        <MylistTab myId={myId}/>           
        </>
    )
}

export default Mylist