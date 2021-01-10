import React,{useState} from "react";
import { withRouter } from 'react-router-dom';
import Title from './common/Title'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControl, TextField} from '@material-ui/core';

// ログイン時に取得したidを連れまわす
    // 仮id
    const volunteerId= "aaa";
    const guestId= "zzz";

// style
const useStyles = makeStyles((theme) => ({
  margin:{
      marginBottom: 150,
  },
  button:{
    display: "block",
    margin: "0 auto",
    marginTop: 10,
    marginBottom: 10,
  },
  text:{
    textAlign: "center",
  },
  input:{
    display:"block",
    width: 260,
    margin: "0 auto",
    textAlign: "center",
  },
  link:{
    display: "block",
    width: 65,
    margin: "0 auto",
    marginTop: 20,
  },
}));

const App = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

      //ゲストへ遷移
      const gotoGuest=()=>{
        props.history.push({
            // detailに遷移。idを渡す。
            pathname: '/guest',
            state: { myId: guestId }
        });
    }

    // ボランティアへ遷移
    const gotoVolunteer=()=>{
        props.history.push({
            //vulnteerに遷移。値を渡す。
            pathname: '/volunteer',
            state: {myId: volunteerId}
        })
    }

    //登録処理
    const handleSubmit=(e)=>{
      e.preventDefault();


    };   

  return (
    <>
      <Title title="ログイン（仮）"/>
      <div className={classes.margin}></div>
      <form onSubmit={handleSubmit}>
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
                disabled
              />
            </FormControl><br/>
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
                disabled
              />
            </FormControl>   
            <Button variant="contained" color="primary" className={classes.button} type="submit" disabled>ログイン</Button>
          </form>  

        <Button variant="contained" color="primary" size="large" onClick={gotoVolunteer} className={classes.button}>
          ボランティア
        </Button>
        <p className={classes.text}>or</p>
        <Button variant="contained" color="secondary" size="large" onClick={gotoGuest} className={classes.button}>
          ゲスト
        </Button>
        <a href="/register" className={classes.link}>新規登録</a>
    </>
  );
};

export default withRouter(App);
