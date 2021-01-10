import React from 'react'
import Title from '../../common/Title'
import ProfileItem from './ProfileItem'
import Review from './Review'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// 自分の自己紹介を編集するページ。
// profilesの情報とevaluatesの情報を取得して表示させる
// style
const useStyles = makeStyles((theme) => ({
  reviewarea:{
      backgroundColor: "#f5f5f5",
      width: "100%",
  },
  box: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 500,
  },
}));

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
      description:"Hello.Im TOm from US.",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg: 0,
      create_at:"2021/07/20",
      update_at:"2021/07/22",
    },

  ];

const evaluates = [
    {
      id: "5",
      guest_id:"zzz",
      volunteer_id:"aaa",
      escort_id: "",
      evaluate:4,
      comment:"とても親切で助かりました。最高のオリンピックになりました！",
      create_at:"2021/07/21",
    },
    {
      id: "6",
      guest_id:"xxx",
      volunteer_id:"aaa",
      escort_id: "",
      evaluate:5,
      comment:"Thank you so much.",
      create_at:"2021/07/22",
    },
  ];
 

const Profile = ({myId}) => {
  const classes = useStyles();
    // dbの中からidがmyIdに一致するものを取得
    const filteredprofile = profiles.filter((profileItem) => (profileItem.user_id === myId));
    const filteredevaluate = evaluates.filter((evaluateItem) => (evaluateItem.volunteer_id === myId));

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
        <div className={classes.reviewarea}>
          <div className={classes.box}>
            <Typography variant="subtitle1" display="block">
            ■レビュー
            </Typography>
            {filteredevaluate.map((item) => (
            <Review
            key={item.id}
            id={item.id}
            evaluate={item.evaluate}
            comment={item.comment}
            create_at={item.create_at}
            />
            ))}   
          </div>
        </div>
    
        </>
    )
}

export default Profile
