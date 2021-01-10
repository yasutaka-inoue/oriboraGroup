import React from 'react'
import Title from '../../common/Title';
import NoticeItem from './NoticeItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

// お知らせのトップ。
// noticesの中からuser_id=myIDのデータを取得。日付順に並べて、テキストと日付、アイコンを一緒に表示させる

const notices =[
    {
     id: 0,
     escorts_id: 1,
     user_id: "aaa",
     notice:"Tomさんがあなたをボランティアに選びました！",
     date: "2021/07/25",
     already_read: 0,
     icon:0,
    },
    {
     id: 1,
     escorts_id: 2,
     user_id: "aaa",
     notice:"Bobさんのボランティアに選ばれませんでした。",
     date: "2021/07/24",
     already_read: 1,
     icon:1,
    },
    {
     id: 2,
     escorts_id: 3,
     user_id: "aaa",
     notice:"Simさんがあなたの到着報告を確認しました。",
     date: "2021/07/23",
     already_read: 1,
     icon:2,
    },
    {
     id: 3,
     escorts_id: 4,
     user_id: "aaa",
     notice:"Simさんがあなたの完了報告を確認しました",
     date: "2021/07/22",
     already_read: 1,
     icon:3,
    },
    {
     id: 4,
     escorts_id: 5,
     user_id: "aaa",
     notice:"Shellyさんがあなたをボランティアに選びました！",
     date: "2021/07/21",
     already_read: 1,
     icon: 0,
    },
    {
     id: 5,
     escorts_id: 3,
     user_id: "bbb",
     notice:"Shawnさんがあなたをボランティアに選びました！",
     date: "2021/07/21",
     already_read: 0,
     icon:0,
    },
    {
     id: 6,
     escorts_id: 2,
     user_id: "aaa",
     notice:"Shawnさんがリアルタイムリクエストを出しました！",
     date: "2021/07/20",
     already_read: 1,
     icon:4,
    },

];

// style
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '500px',
        backgroundColor: theme.palette.background.paper,
        margin: "0 auto",
      },
    margin:{
        marginBottom: 60,
    },
  }));

const Notice = ({myId, history}) => {
    const classes = useStyles();
    
    // dbの中からuser_idがmyIdに一致するものを取得
    const filtered = notices.filter((filtereditem) => (filtereditem.user_id === myId));

    return (
        <>
        <Title title="お知らせ"/>
        <div className={classes.margin}></div>   
        <List className={classes.root}>
        {/* filteredの中身をitemに入れて表示処理 */}
        {filtered.map((item) => (
            // requestItemコンポーネントに各プロパティを渡す
            <NoticeItem
                key={item.id}
                id={item.id}
                escorts_id={item.escorts_id}
                notice={item.notice}
                date={item.date}
                already_read={item.already_read ===0 ? ("colored"):("")}
                icon={item.icon}
                history={history}
                myId={myId}
            />
            ))}
        </List>          
        </>
    )
}

export default Notice

