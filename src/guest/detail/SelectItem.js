import React from 'react'
import Paper from '@material-ui/core/Paper';
import Img from "../../img/noimage.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import "../../style.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 8,
      },
      paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
      },
      large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
      avatar:{
        paddingRight:"10px",
      },
      list:{
        flexDirection: "column",
        padding: "0 0 0 0",
        alignItems: 'start',
      },
      image: {
        width: "5rem",
        height: "5rem",
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      flex: {
        display: "flex",
      },
      button:{
          marginRight: 10,
      },
  }));

const SelectItem = ({id, picture, user_id, nickname, history, escortId}) => {
    const classes = useStyles();

    //ゲスト紹介ページへ遷移
    const gotoVol=()=>{
         history.push({
            // 紹介ページに遷移。idを渡す。
            pathname: '/guest/volunteerprofile',
            state: { volunteerId: user_id }
        });
    }
    // 決定処理
    const selectVol=()=>{
        // dbからescortsのidに対して、statusを"成立済"に、status_2に待機中、volunteer_idにuser_id、noticesにお知らせを入れる。
   }


    return (
        <div key={id}>
            <div className={classes.root}>
            {/* 外枠 */}
            <Paper className={classes.paper}>
            <div className={classes.flex}>
                <ListItemAvatar className={classes.avatar}>
                    { picture ? (
                    <>
                        <Avatar variant="rounded" src={picture} alt={`${nickname}のプロフィール画像`}  className={classes.large}/>
                    </>
                    ) : (
                    <>
                        <Avatar variant="rounded" src={Img} alt="画像はありません"  className={classes.large}/>
                    </>
                    )}
                </ListItemAvatar>
                <ListItem className={classes.list}>
                <ListItemText 
                primary={`${nickname}さん`}
                /> 
                <ListItemText
                    secondary={
                    <>
                    <Button variant="outlined" color="primary" size="small" className={classes.button} onClick={gotoVol}>
                        紹介ページ
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={selectVol}>
                        この人に決定
                    </Button>
                    </>
                    }/>         
                </ListItem>
            </div>
            </Paper>
            </div>            
        </div>
    )
}

export default withRouter(SelectItem)
