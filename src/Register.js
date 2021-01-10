import React, {useState} from 'react'
import Title from './common/Title'
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Button, Fade, Modal, FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import ModalItem from "./common/ModalItem";
import { withRouter } from 'react-router-dom';

// style
const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
        position: "relative",
      },
    margin:{
        marginBottom: 70,
    },
    area:{
      marginBottom:20,
    },
    input:{
      display: "block",
      minWidth: 150,
    },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    display: "block",
    margin: "0 auto",
    marginTop: 10,
    marginBottom: 10,
  },
  }));

const Register = (props) => {
    const classes = useStyles();

    //各項目を管理
    const [lastname, setLastname] = useState(''); 
    const [firstname, setFirstname] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [userflg, setUserflg] = useState(''); 
    const [nickname, setNickname] = useState(''); 
    // modal
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };
    const handleOpen = (e) => {
        // 画面が遷移しないようにpreventDefault
        e.preventDefault();
        setOpen(true);
      };

//登録処理
const handleSubmit=()=>{
    // 送信した内容が届いているか確認
    console.log(lastname, "姓");
    console.log(firstname, "名");
    console.log(email, "メール");
    console.log(password, "パスワード");
    console.log(userflg, "登録種別");
    console.log(nickname, "ニックネーム");
  // dbに入れる処理を書く


  props.history.push({
    // detailに遷移。idを渡す。
    pathname: '/',
});
};      

    return (
        <div>
        <Title title="新規登録"/>
        <div className={classes.margin}></div>
        <div className={classes.box}>
        <form onSubmit={handleOpen}>
          <div className={classes.area}>
            <FormControl component="fieldset" className={classes.input}>
              <TextField
                label="姓"
                required
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl component="fieldset" className={classes.input}>
              <TextField
                label="名"
                required
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl component="fieldset" className={classes.input}>
              <TextField
                label="メールアドレス"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl component="fieldset" className={classes.input}>
              <TextField
                label="パスワード"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>                                           
            <FormControl component="fieldset" className={classes.input}>
              <InputLabel shrink id="userFlg" required>
                登録種別
              </InputLabel>
              <Select
                labelId="userFlg"
                id="userFlg"
                value={userflg}
                onChange={e => setUserflg(e.target.value)}
                displayEmpty
              >
                <MenuItem value="">
                  <em>ゲスト/ボランティア</em>
                </MenuItem>
                <MenuItem value="0">ゲスト</MenuItem>
                <MenuItem value="1">ボランティア</MenuItem>
              </Select>
              </FormControl>
            <FormControl component="fieldset" >
            <TextField
                label="ニックネーム"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                />
          </FormControl>
          </div>
              <Button variant="contained" color="primary" type="submit">登録</Button>
              </form>        
        </div>

        {/* modal */}
        <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
              timeout: 500,
              }}
            >
        <Fade in={open}>
        <ModalItem
          title="登録確認"
          text="この内容で登録しますか？"
          buttonText="登録する"
          handleClose={handleClose}
          onSubmit={handleSubmit}
          />
        </Fade>
        </Modal>


        </div>
    )
}

export default withRouter(Register)

