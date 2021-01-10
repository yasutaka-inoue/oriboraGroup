import React from 'react'
import Title from '../../common/Title'
import GuestInfoItem from './GuestInfoItem'

    // ダミーデータ
    const profiles = [
    {
      user_id: "xxx",
      nickname: "Tom",
      description:"hello",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg:0,
    },
    {
        user_id: "yyy",
        nickname: "Shelly",
        description:"hello",
        picture:"",
        account:"https://www.facebook.com/*****",
        user_flg:0,
      },
      {
      user_id: "zzz",
      nickname: "Bob",
      description:"hellohello",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg:0,
    },
    {
        user_id: "www",
        nickname: "Tiffany",
        description:"hehehehe",
        picture:"",
        account:"https://www.facebook.com/*****",
        user_flg:0,
      },
      {
        user_id: "vvv",
        nickname: "Robin",
        description:"yeah",
        picture:"",
        account:"https://www.facebook.com/*****",
        user_flg:0,
      },
  ];

const GuestInfo = (props) => {
    // guest_idを前ページから受け取る。
    const guestId = props.location.state.guestId;
    // profilesからデータ呼び出し
    console.log(guestId);

 // dbからguestIdに一致するuser_idの情報を取得
  const guestinfo = profiles.filter((filtered) => (filtered.user_id === guestId));
    
    return (
        <div>
            <Title title="ゲストの自己紹介ページ"/>
            {/* guestinfoの中身をitemに入れて表示処理 */}
            {guestinfo.map((item) => (
            // GuestInfoItemコンポーネントに各プロパティを渡す
            <GuestInfoItem
            key={guestId}
            nickname={item.nickname}
            picture={item.picture}
            account={item.account}
            description={item.description}
            />
            ))}
        </div>
    )
}

export default GuestInfo
