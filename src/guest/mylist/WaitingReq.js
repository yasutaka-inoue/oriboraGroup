import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RequestItem from './RequestItem';

// 募集中のものが入る
// ダミーデータ
const request = [
  {
    id: 1,
    guest_id:"zzz",
    volunteer_id:"",
    nickname:"",
    rikkouho_id:["aaa", "bbb"],
    es_date: "今すぐ",
    start_time:"",
    end_time:"",
    departure: "新宿駅",
    departure_lat:"",
    departure_lon:"",
    destination:"国立競技場",
    destination_lat:"",
    destination_lon:"",
    number:"2",
    lan_1:"英語",
    lan_2:"中国語",
    lan_3:"フランス語",
    status: "募集中",
    status_2: "",
    emergency: 1,
  },
  {
    id: 2,
    picture:"",
    nickname:"",
    guest_id:"zzz",
    volunteer_id:"",
    rikkouho_id:["aaa", "bbb", "ccc"],
    es_date: "今すぐ",
    start_time:"",
    end_time:"",
    departure: "新宿駅",
    departure_lat:"",
    departure_lon:"",
    destination:"国立競技場",
    destination_lat:"",
    destination_lon:"",
    number:"2",
    lan_1:"英語",
    lan_2:"中国語",
    lan_3:"",
    status: "募集中",
    status_2: "",
    emergency: 1,
  },
  {
    id: 3,
    picture:"",
    nickname: "Hiroko",
    guest_id:"zzz",
    volunteer_id:"aaa",
    rikkouho_id:[],
    es_date: "2021/07/21",
    start_time:"11:00",
    end_time:"",
    departure: "新宿駅",
    departure_lat:"",
    departure_lon:"",
    destination:"国立競技場",
    destination_lat:"",
    destination_lon:"",
    number:"2",
    lan_1:"英語",
    lan_2:"スペイン語",
    lan_3:"",
    status: "成立済",
    status_2: "待機中",
    emergency: 0,
  },
  {
    id: 4,
    picture:"",
    nickname: "Katyou",
    guest_id:"zzz",
    volunteer_id:"bbb",
    rikkouho_id:[],
    es_date: "2021/07/22",
    start_time:"10:00",
    end_time:"",
    departure: "新宿駅",
    departure_lat:"",
    departure_lon:"",
    destination:"国立競技場",
    destination_lat:"",
    destination_lon:"",
    number:"2",
    lan_1:"英語",
    lan_2:"中国語",
    lan_3:"フランス語",
    status: "成立済",
    status_2: "到着",
    emergency: 0,
  },
  {
    id: 5,
    picture:"",
    nickname: "Yasu",
    guest_id:"zzz",
    volunteer_id:"ccc",
    rikkouho_id:[],
    es_date: "今すぐ",
    start_time:"",
    end_time:"",
    departure: "新宿駅",
    departure_lat:"",
    departure_lon:"",
    destination:"国立競技場",
    destination_lat:"",
    destination_lon:"",
    number:"1",
    lan_1:"英語",
    lan_2:"",
    lan_3:"",
    status: "成立済",
    status_2: "完了報告",
    emergency: 1,
  },
  {
      id: 6,
      picture:"",
      nickname: "Hiroko",
      guest_id:"zzz",
      volunteer_id:"aaa",
      rikkouho_id:[],
      es_date: "今すぐ",
      start_time:"",
      end_time:"",
      departure: "新宿駅",
      departure_lat:"",
      departure_lon:"",
      destination:"国立競技場",
      destination_lat:"",
      destination_lon:"",
      number:"1",
      lan_1:"英語",
      lan_2:"スペイン語",
      lan_3:"",
      status: "成立済",
      status_2: "完了",
      emergency: 1,
    },
];


// style
const useStyles = makeStyles((theme) => ({
  box: {
      paddingBottom: 10,
    },
}));

const WaitingReq = ({history, myId}) => {
    const classes = useStyles();
    // escortsの中で、募集中で、guest_idにmyIdが入っているものを日時順に表示
    const filtered = request.filter((item) => (item.status ==="募集中" && item.guest_id === myId));

    return (
        <div className={classes.box}>
                {/* requestが あったときだけ、表示処理をする*/}
                { filtered && (
                <>
                {/* requestの中身をrequestItemに入れて表示処理 */}
                {filtered.map((requestItem) => (
                    // requestItemコンポーネントに各プロパティを渡す
                    <RequestItem
                    key={requestItem.id}
                    id={requestItem.id}
                    picture={requestItem.picture}
                    nickname= {requestItem.nickname}
                    es_date= {requestItem.es_date}
                    start_time= {requestItem.start_time}
                    end_time= {requestItem.end_time}
                    departure= {requestItem.departure}
                    destination={requestItem.destination}
                    number={requestItem.number}
                    rikkouho_id={requestItem.rikkouho_id}
                    lan_1={requestItem.lan_1}
                    lan_2={requestItem.lan_2}
                    lan_3={requestItem.lan_3}
                    status= {requestItem.status}
                    emergency={requestItem.emergency}
                    history={history}
                    myId={myId}
                    />
                ))}
                </>
            )}


        </div>
    )
}

export default WaitingReq
