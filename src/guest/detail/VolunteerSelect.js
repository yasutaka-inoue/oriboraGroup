import React, {useState, useEffect} from 'react'
import Title from '../../common/Title'
import SelectItem from './SelectItem'
import { makeStyles } from '@material-ui/core/styles';

// style
const useStyles = makeStyles((theme) => ({
    margin:{
        marginBottom: 70,
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
      user_id: "ccc",
      nickname: "Nagai",
      description:"Hello. ",
      picture:"",
      account:"https://www.facebook.com/*****",
      user_flg: 1,
      create_at:"2021/07/20",
      update_at:"2021/07/22",
    },

  ];
const VolunteerSelect = (props) => {
    const classes = useStyles();
    // escort_idと立候補idを前ページから受け取る。
    const escortId = props.location.state.escortId;
    const rikkouho_id= props.location.state.rikkouho_id;

    const [list, setList] = useState([]);

    // 立候補idに入っているidを取得して、profilesからuser_idと一致するものの、nicknameとpictureを取得する。
    useEffect(() => {
        const getdata = rikkouho_id.map((item)=>{
            const profile = profiles.filter((filteredItem) => (filteredItem.user_id === item));
            // 一人分のprofileが取得できたので、
            // newProfileの中に、listの中身全部に、一人分のprofileを追加する
            const newProfile = list.push({
              id: profile.id,
              picture: profile.picture,
              nickname: profile.nickname,
              user_id: profile.user_id}); 
            setList([newProfile]);
            console.log(list); 
        });
        }, []);        
        // console.log(list);  

    return (
        <div>
            <Title title="ボランティア選択"/> 
            <div className={classes.margin}></div> 
            {list &&
              list.map((listItem) => (
                <SelectItem
                    key={listItem.id}
                    id={listItem.id}
                    picture={listItem.picture}
                    nickname={listItem.nickname}
                    user_id={listItem.user_id}
                    history={props.history}
                    escortId={escortId}
                />
              ))}
        </div>
    )
}

export default VolunteerSelect
