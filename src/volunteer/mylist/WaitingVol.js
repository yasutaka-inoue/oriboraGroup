import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RequestItem from '../request/RequestItem';

// 募集中で、立候補中（rikkouho_idの中にmyIdが入っている）のものが入る
const request = [
    {
      id: 1,
      volunteer_id:"",
      rikkouho_id:["aaa", "bbb", "ccc", "ddd", "eee"],
      picture:"",
      nickname: "Tom",
      es_date: "",
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
      volunteer_id: "",
      rikkouho_id:["aaa", "bbb", "ccc", "ddd", "eee"],
      picture:"",
      nickname: "Sim",
      es_date: "2021/07/23",
      start_time:"11:00",
      end_time:"12:00",
      departure: "渋谷駅",
      departure_lat:"",
      departure_lon:"",
      destination:"東京駅",
      destination_lat:"",
      destination_lon:"",
      number:"1",
      lan_1:"英語",
      lan_2:"",
      lan_3:"",
      status: "募集中",
      status_2: "",
      emergency: 0,
    },
    {
      id: 3,
      volunteer_id: "",
      rikkouho_id:["bbb", "ccc", "ddd", "eee"],
      picture:"",
      nickname: "Shawn",
      es_date: "2021/07/25",
      start_time:"15:00",
      end_time:"17:00",
      departure: "東京スカイツリー",
      departure_lat:"",
      departure_lon:"",
      destination:"東京タワー",
      destination_lat:"",
      destination_lon:"",
      number:"3",
      lan_1:"スペイン語",
      lan_2:"",
      lan_3:"",
      status: "募集中",
      status_2: "",
      emergency: 0,
    },
    {
      id: 4,
      volunteer_id: "",
      rikkouho_id:["bbb", "ccc", "ddd", "eee"],
      picture:"",
      nickname: "Mary",
      es_date: "",
      start_time:"",
      end_time:"",
      departure: "品川プリンスホテル",
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
      id: 5,
      volunteer_id: "bbb",
      rikkouho_id:["aaa", "bbb", "ccc", "ddd", "eee"],
      picture:"",
      nickname: "Tom",
      es_date: "",
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
      status: "成立済",
      status_2: "待機中",
      emergency: 1,
    },
  ];

// style
const useStyles = makeStyles((theme) => ({
  box: {
      paddingBottom: 10,
    },
}));

const WaitingVol = ({history, myId}) => {
    const classes = useStyles();
    // escortsの中で、募集中で、rikkouho_idにmyIdが入っているものを日時順に表示
    const filtered = request.filter((item) => (item.status ==="募集中" && item.rikkouho_id.includes(myId) === true));

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

export default WaitingVol
