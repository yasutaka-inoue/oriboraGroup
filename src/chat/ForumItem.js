import React from 'react'

const ForumItem = (props) => {
        // escort_idを前ページから受け取る。
        const escortId = props.location.state.escortId;
        const myId= props.location.state.myId;

        console.log(escortId);
        console.log(myId);
        
    return (
        <div>
            ここに掲示板が表示される
        </div>
    )
}

export default ForumItem
