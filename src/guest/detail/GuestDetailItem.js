import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Img from "../../img/noimage.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Map from "../../volunteer/detail/Map";
import { withRouter } from 'react-router-dom';
import Done from "./Done";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

// style
const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
        position: "relative",
      },
    button:{
        position: "absolute",
        top: 0,
        right: 5,
    },
    image: {
        width: "6rem",
        height: "6rem",
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    volList:{
        display: "flex",
    },
    volInfo:{
        paddingLeft: "10px",
    },
    vol:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    button2:{
        marginLeft: 10,
    },
    margin:{
        marginBottom: 70,
    },
    margin2:{
        marginBottom: 10,
    },
  }));
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const GuestDetailItem = ({
    id, picture, nickname, volunteer_id,rikkouho_id, es_date, start_time, end_time,
    departure, departure_lat, departure_lon, destination, destination_lat, destination_lon,               
    number, lan_1, lan_2, lan_3, status, status_2, emergency, history, myId}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    // ボタンmenu
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    
    //リクエスト編集
    const reviseRequest=()=>{
        // statusを募集中に。status2を空に。volunteer_idとrikkouhoを空に。
        // noticeにリクエストがキャンセルされた
    }
    //リクエストキャンセル
    const canselRequest=()=>{
        // escortsからidの項目を削除。トップに遷移
         // noticeにリクエストがキャンセルされた
    }
    
    
    //ゲスト紹介ページへ遷移
    const gotoVol=()=>{
        history.push({
            // 紹介ページに遷移。idを渡す。
            pathname: '/guest/volunteerprofile',
            state: { volunteerId: volunteer_id }
        });
    }
    //ボランティア選択画面へ遷移
    const gotoSelectVol=()=>{
        history.push({
            // ボランティアセレクトに遷移。立候補idを渡す。
            pathname: '/guest/volunteerselect',
            state: { rikkouho_id: rikkouho_id, 
                     escortId: id,
            }
        });
    }

    // 掲示板へ遷移
    const gotoForum=()=>{
        history.push({
            //forumに遷移。値を渡す。
            pathname: '/forum',
            state: {escortId: id,
                    myId: myId,
                    }
        })
    }

    //チャットへ遷移
    const gotoChat=()=>{
        history.push({
            //forumに遷移。値を渡す。
            pathname: '/chat',
            state: {escortId: id,
                    myId: myId,
                    }
        })
    }
    
    return (
        <>
        <div className={classes.margin}></div>
        <div className={classes.box}>

            { status==="募集中" ? (
                <>
                  <Button variant="contained" color="primary" className={classes.button} size="large" endIcon={<ArrowDropDownIcon/>} onClick={handleClick}>
                      {status}
                  </Button>
                </>):(
                <>
                <Button variant="outlined" color="primary" className={classes.button} size="large" endIcon={<ArrowDropDownIcon/>} onClick={handleClick}>
                    {status}
                </Button>
                </>)}
                <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <StyledMenuItem onClick={reviseRequest}>
                <ListItemText primary="リクエストをやり直す" />
                </StyledMenuItem>
                <StyledMenuItem onClick={canselRequest}>
                <ListItemText primary="リクエストを削除する" />
                </StyledMenuItem>
            </StyledMenu>

            <Typography variant="subtitle1" display="block">
            ＜基本情報＞
            </Typography>
            <Typography variant="subtitle2" display="block">
            ■日時：{emergency===1 ? (`今すぐ`):(`${es_date} ${start_time}～${end_time}`)}
            </Typography>
            <Typography variant="body2" display="block">
            ■言語：{lan_1}{ lan_2 && `、${lan_2}`}{ lan_3 && `、${lan_3}`}
            </Typography>
            <Typography variant="body2" display="block">
            ■人数：{number}人
            </Typography>
            <Typography variant="subtitle1" display="block">
            ＜コース＞
            </Typography>
            <Typography variant="body2" display="block">
            ■出発地：{departure} 
            </Typography>
            <Typography variant="body2" display="block">
            ■目的地：{destination}
            </Typography>

            {/* mapコンポーネントを読み込み */}
            <Map
                departure_lat={departure_lat}
                departure_lon={departure_lon}
                destination_lat={destination_lat}
                destination_lon={destination_lon}
            />

            <div className={classes.vol}>
            {/* ボランティア成立前はボランティア選択画面へのボタンを表示 */}
            { status==="募集中" && 
            <>
                <Button variant="contained" onClick={gotoSelectVol}>ボランティア選択</Button>
                <Button variant="contained" color="primary" size="small" onClick={gotoForum} className={classes.button2}>
                    掲示板
                </Button>
            </>
            }
             {/* ボランティア成立後はボランティア情報 */}
             { status==="成立済" && 
                <>
                <Typography variant="subtitle1" display="block">
                    ＜ボランティア情報＞
                </Typography>
                <div className={classes.volList}>
                    <div>
                    { picture ? (
                        <>
                        <div className={classes.image}>
                            <img src={picture} alt={`${nickname}のプロフィール画像`} className={classes.img}/>
                        </div>
                        </>
                        ) : (
                        <>
                        <div className={classes.image}>
                            <img src={Img} alt="画像はありません" className={classes.img}/>
                        </div>
                        </>
                        )
                    }
                    </div>
                    <div className={classes.volInfo}>
                    <Typography variant="body2" display="block">
                        ■ニックネーム：{nickname}
                    </Typography>
                    <div className={classes.margin2}></div>
                    <Button variant="outlined" color="primary" size="small" onClick={gotoVol}>
                        紹介ページ
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={gotoChat} className={classes.button2}>
                        チャット
                    </Button>
                    </div>
                </div>                
                </>
            }
            </div>

            {/* ボタンと登録等の処理はコンポーネントを分ける */}
            {/* 到着後に、完了確認・評価ボタンが表示される */}
            { status === "成立済" && status_2 === "完了報告" &&
            <Done
                id={id} 
                volunteer_id={volunteer_id}
                myId={myId}/>
            }
        </div>
        </>
    )
}

export default withRouter(GuestDetailItem)
