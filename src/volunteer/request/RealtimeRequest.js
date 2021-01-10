import React from 'react'
import RequestItem from './RequestItem';
import { makeStyles } from '@material-ui/core/styles';

// ここにdbからrealtime Requestのデータを取得するコードを書く（ひとまずはダミーのオブジェクト）
// emergencyに指定の値が入っていて、statusが募集中のデータのうち、日時順（DB内で設定？）に上から3つ取得する
const request = [
    {
      id: 1,
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
      picture:"",
      nickname: "Shelly",
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
      lan_3:"",
      status: "募集中",
      status_2: "",
      emergency: 1,
    },
    {
      id: 3,
      picture:"",
      nickname: "Bob",
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
      lan_2:"",
      lan_3:"",
      status: "募集中",
      status_2: "",
      emergency: 1,
    },
    {
      id: 4,
      picture:"",
      nickname: "Tiffany",
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
      emergency: 0,
    },
    {
      id: 5,
      picture:"",
      nickname: "Robin",
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
      emergency: 0,
    },
  ];
// emergencyに１がついてるやつだけを取得
const filtered = request.filter((item) => (item.emergency === 1));
// dbからとるときに、条件をつける？

// style
const useStyles = makeStyles((theme) => ({
  box: {
      paddingBottom: 10,
    },
}));

// RequestTopのリアルタイム部分
const RealtimeRequest = ({history, myId}) => {
  const classes = useStyles();
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

export default RealtimeRequest
