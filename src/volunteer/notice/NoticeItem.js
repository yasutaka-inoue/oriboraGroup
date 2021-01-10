import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import RoomIcon from '@material-ui/icons/Room';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { green, blue } from '@material-ui/core/colors';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import "../../style.css";

const useStyles = makeStyles((theme) => ({
    green: {
        color: '#fff',
        backgroundColor: green[500],
      },
    blue: {
        color: '#fff',
        backgroundColor: blue[500],
      },
    red: {
        color: '#fff',
        backgroundColor: "#f44336",
      },
    yellow: {
        color: '#fff',
        backgroundColor: "#ffc400",
      },
    black: {
        color: '#fff',
        backgroundColor: "black",
      },
  }));

const NoticeItem = ({id, escorts_id, notice, date, already_read, icon, history, myId}) => {
    const classes = useStyles();

    // clickイベント
    const handleClick=()=>{
        // already_readを1にして、dbを更新する処理を追加する（noticeに入れてもよいかも）

        history.push({
          // detailに遷移。idを渡す。
          pathname: '/volunteer/detail',
          state: { escortId: escorts_id ,
                   myId: myId}
        });
        
      }
    return (
        <div key={id} className={already_read}>
            {/* already_readが0なら、色変える */}
            <ListItem alignItems="center" button onClick={handleClick}>
                
                    {/* 内容によって、アイコンを変える */}
                    {/* ボランティアに選ばれた時 icon=0 */}
                    {icon===0 && 
                    <ListItemAvatar>
                        <Avatar className={classes.red}><PersonAddIcon /></Avatar>
                    </ListItemAvatar>}

                    {/* 選ばれなかった時 icon=1*/}
                    {icon===1 && 
                    <ListItemAvatar>
                        <Avatar className={classes.black}><PersonAddDisabledIcon/></Avatar>
                    </ListItemAvatar>}

                    {/* 到着確認の時 icon=2*/} 
                    {icon===2 && 
                    <ListItemAvatar>
                        <Avatar className={classes.green}><RoomIcon /></Avatar>
                    </ListItemAvatar>}       

                    {/* 完了確認の時 icon=3*/} 
                    {icon===3 && 
                    <ListItemAvatar>
                        <Avatar className={classes.yellow}><AssignmentTurnedInIcon /></Avatar>
                    </ListItemAvatar>}     

                    {/* リアルタイムリクエストを出した時 icon=4*/} 
                    {icon===4 && 
                    <ListItemAvatar>
                        <Avatar className={classes.blue}><WifiTetheringIcon /></Avatar>
                    </ListItemAvatar>}                             
                <ListItemText
                primary={notice}
                secondary={date}
                />
            </ListItem>
            <Divider component="li" /> 
        </div>
    )
}

export default withRouter(NoticeItem)