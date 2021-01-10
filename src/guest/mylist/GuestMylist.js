import React from 'react'
import Title from '../../common/Title'
import MylistTab from './MylistTab'

const GuestMylist = ({myId}) => {
    return (
        <>
            <Title title="マイリスト"/>
            <MylistTab myId={myId}/>    
        </>
    )
}

export default GuestMylist
