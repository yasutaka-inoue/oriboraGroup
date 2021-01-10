import React from 'react'
import Title from '../../common/Title'
import VolunteerInfoItem from './VolunteerInfoItem'
import Review from '../../volunteer/profile/Review'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

const VolunteerInfo = (props) => {
    const classes = useStyles();
    // volunteer_idを前ページから受け取る。
        const volunteerId = props.location.state.volunteerId;
    
     // dbからvolunteerIdに一致するuser_idの情報を取得
      const volinfo = profiles.filter((filtered) => (filtered.user_id === volunteerId));
      const filteredevaluate = evaluates.filter((evaluateItem) => (evaluateItem.volunteer_id === volunteerId));
        
    return (
        <div>
            <Title title="ボランティアの自己紹介ページ"/>
            {/* guestinfoの中身をitemに入れて表示処理 */}
            {volinfo.map((item) => (
            // GuestInfoItemコンポーネントに各プロパティを渡す
            <VolunteerInfoItem
            key={volunteerId}
            nickname={item.nickname}
            picture={item.picture}
            account={item.account}
            description={item.description}
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
        </div>
    )
}

export default VolunteerInfo
