import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
      },
      list2:{
        padding: "0 0 0 0",
        position:"relative",
        marginBottom: "0",
      },
      button:{
        boxShadow: "none",
        position: "absolute",
        right: "0",
        bottom: "0",
        pointerEvents: "none",
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
  }));

  const RequestItem = ({myId, history, id, picture,nickname, es_date, start_time, end_time, departure, destination, number, lan_1, lan_2, lan_3, status, emergency}) => {
    const classes = useStyles();

    // clickイベント
    const handleClick=()=>{
      history.push({
        // detailに遷移。idを渡す。
        pathname: '/volunteer/detail',
        state: { escortId: id ,
                 myId: myId}
      });
    }

    return (
        <>
        <div key={id} className={classes.root}>
  
            {/* 外枠 */}
            <Paper className={classes.paper}>
            <ListItem button className={classes.list} onClick={handleClick}>
              <ListItem className={classes.list2}>
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
                <ListItemText 
                    className={classes.text}
                    primary={`${nickname}さんのリクエスト`}
                    secondary={
                        <>
                        <Typography component="span" variant="body2" display="block">
                        ■日時：{emergency===1 ? (`今すぐ`):(`${es_date} ${start_time}～${end_time}`)}
                        </Typography>
                        </>
                    }/>
              </ListItem>
              <ListItem  className={classes.list2}>
              <ListItemText
              secondary={
                <>
                  <Typography component="span" variant="body2" display="block">
                  ■出発地：{departure} 
                  </Typography>
                  <Typography component="span" variant="body2" display="block">
                  ■目的地：{destination}
                  </Typography>
                  <Typography component="span" variant="body2" display="block">
                  ■言語：{lan_1}{ lan_2 && `、${lan_2}`}{ lan_3 && `、${lan_3}`}
                  </Typography>
                  <Typography component="span" variant="body2" display="block">
                  ■人数：{number}人
                  </Typography>
                </>
              }/>
              </ListItem>
              { status==="募集中" ? (
                <>
                  <Button variant="contained" color="primary" className={classes.button} size="small">
                      {status}
                  </Button>
                </>):(
                <>
                <Button variant="outlined" color="primary" className={classes.button} size="small">
                {status}
                </Button>
                </>)}
            </ListItem>
            </Paper>
        </div>
        </>
    )
  }

export default withRouter(RequestItem)
