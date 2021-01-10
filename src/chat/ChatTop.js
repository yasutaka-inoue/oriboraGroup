import React from 'react'
import Title from '../common/Title'
import ChatTab from './ChatTab'

const ChatTop = ({myId}) => {
    return (
        <>
        <Title title="チャット"/>
        <ChatTab myId={myId}/>           
        </>
    )
}

export default ChatTop
