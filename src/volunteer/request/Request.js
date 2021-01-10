import React from 'react'
import Title from '../../common/Title'
import RequestTab from './RequestTab'

// VolunteerのTop画面。
const Request = ({myId}) => {
    return (
        <>
            <Title title="リクエスト"/>
            <RequestTab myId={myId}/>
        </>
    )
}

export default Request
