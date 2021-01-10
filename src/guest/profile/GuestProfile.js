import React from 'react'
import Title from '../../common/Title'
import ProfileItem from '../../volunteer/profile/ProfileItem'

// 自分の自己紹介を編集するページ。
// profilesの情報とevaluatesの情報を取得して表示させる

// ダミーデータ
const profiles = [
    {
      id: "1",
      user_id: "aaa",
      nickname: "Hiroko",
      description:"¡Hola!¡Mucho gusto!Me llamo Hiroko.¡Te mostraré Tokio!",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg: 1,
      create_at:"2021/07/21",
      update_at:"2021/07/21",
    },
    {
      id: "2",
      user_id: "bbb",
      nickname: "Yasutaka",
      description:"Hello.",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg: 1,
      create_at:"2021/07/22",
      update_at:"2021/07/23",
    },
    {
      id: "3",
      user_id: "zzz",
      nickname: "Tom",
      description:"Hello.Im Tom from US.",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg: 0,
      create_at:"2021/07/20",
      update_at:"2021/07/22",
    },

  ];

const GuestProfile = ({myId}) => {
    // dbの中からidがmyIdに一致するものを取得
    const filteredprofile = profiles.filter((profileItem) => (profileItem.user_id === myId));
    return (
      
        <>
        <Title title="自己紹介"/>

        {filteredprofile.map((item) => (
        <ProfileItem
            key={item.id}
            id={item.id}
            nickname={item.nickname}
            picture={item.picture}
            account={item.account}
            description={item.description}
            update_at={item.update_at}
            />
            ))}
        </>
    )
}

export default GuestProfile
