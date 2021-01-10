import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Img from "../../img/noimage.jpg";
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Button,  FormControl, TextField} from "@material-ui/core";

// style
const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
        position: "relative",
      },
    revise:{
        position: "absolute",
        top: 7,
        right: 5,
    },
    image: {
        width: "8rem",
        height: "8rem",
        marginBottom: "10px",
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        cursor: "pointer",
        position: "relative",
        verticalAlign: "middle",
        textAlign: "center",
        display: "table-cell",
        '&:hover': {backgroundColor:'rgba(128,128,128,0.3)'},
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
    inputFile: {
        display: "none",
      },
    imgIcon:{
        position: "absolute",
        left: 50,
        top: 52,
        color: "white",
      },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    margin:{
        marginBottom: 70,
    },
    reviewarea:{
        backgroundColor: "#f5f5f5",
        width: "100%",
    },
    update:{
        textAlign: "right",
    },
    account:{
        minWidth: 300,
    },
    description:{
        minWidth: "100%",
    },
  }));

const ProfileItem = ({id, nickname, picture, account, description, update_at}) => {
    const classes = useStyles();

    // 各項目を監視
    const [newpicture, setNewpicture] = useState(null);
    const [newnickname, setNewnickname] = useState(nickname);
    const [newaccount, setNewaccount] = useState(account);
    const [newdescription, setNewdescription] = useState(description);
    const [newupdate, setNewupdate] = useState(update_at);
    // disableを管理
    const [disabled, setDisabled] = useState(true); 
    const onDisabled = () => {
        setDisabled(false);
      };
    const offDisabled = () => {
        setDisabled(true);
        setNewpicture(null);
        setNewnickname(nickname);
        setNewaccount(account);
        setNewdescription(description);
      };
    
    // 画像の処理
    const onChangeImageHandler = (e) => {
        if (e.target.files[0]) {
          setNewpicture(e.target.files[0]);
          // サムネイル表示処理
          const reader = new FileReader();
          reader.onload = function(e) {
            document.getElementById('thumbnail').setAttribute('src', e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
        }
          e.target.value = "";        
      };
    
    // 登録処理
    const handleSubmit=(e) =>{
        e.preventDefault();
        // ここに登録処理を書く
        const profile=[{
            nickname: newnickname,
            description:newdescription,
            picture:newpicture,
            account:newaccount,
            update_at:newupdate,
          }]
          console.log(profile);
        setDisabled(true);
        setNewpicture(null);
        setNewnickname(nickname);
        setNewaccount(account);
        setNewdescription(description);
    };

    
    return (
        <>
        <div className={classes.margin}></div>
        <div className={classes.box}>
        {disabled===true &&
            <Button variant="contained" color="primary" className={classes.revise} onClick={onDisabled}>
                修正する
            </Button>}
        {disabled===false &&
            <Button variant="outlined" color="primary" className={classes.revise} onClick={offDisabled}>
                中断して元に戻す
            </Button>}
        <form onSubmit={handleSubmit}>
            <label>
            <div className={classes.image}>
                {/* 画像を選択したら、サムネイル表示 */}
                { newpicture &&
                    <img id="thumbnail" src="" alt="選択中の画像" className={classes.img} />
                } 
                {/* 既に入っている画像があれば表示するが、新しいのが入ったら表示しない */} 
                {!newpicture && picture &&  
                <img id="thumbnail" src={picture} alt="選択中の画像" className={classes.img}/>}
                {disabled===false &&
                    <AddAPhotoIcon className={classes.imgIcon}/>  }
                    {/* 画像を入れる時は、type=file */}
                    <input
                    type="file"
                    onChange={onChangeImageHandler}
                    className={classes.inputFile}
                    disabled={disabled}
                    /> 
            </div>
            </label>

            <Typography variant="subtitle1" display="block">
            ■ニックネーム
            </Typography>
            <FormControl>
                  <TextField
                    value={newnickname}
                    onChange={(e) => setNewnickname(e.target.value)}
                    disabled={disabled}
                  />
            </FormControl>
            <Typography variant="subtitle1" display="block">
            ■SNSアカウント
            </Typography>
            <FormControl className={classes.account}>
                  <TextField
                    value={newaccount}
                    onChange={(e) => setNewaccount(e.target.value)}
                    disabled={disabled}
                  />
            </FormControl>

            <Typography variant="subtitle1" display="block">
                ■その他（自由記述）
            </Typography>
            <FormControl className={classes.description}>
                    <TextField
                        value={newdescription}
                        multiline
                        rows={5}
                        variant="outlined"
                        margin="normal"
                        //  外だしせずにここで書く方法
                        onChange={(e) => setNewdescription(e.target.value)}
                        disabled={disabled}
                    />
                    </FormControl>

        <Typography variant="body2" display="block" className={classes.update}>
            更新日：{newupdate}
        </Typography>
        <Button variant="contained" color="primary" disabled={disabled} type="submit">修正登録</Button>

        </form>
        </div>
        </>
    )
}

export default ProfileItem
