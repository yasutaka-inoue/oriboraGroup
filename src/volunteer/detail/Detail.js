import React from 'react'
import Title from '../../common/Title'
import DetailItem from './DetailItem'

// detailのデータを取得するコンポーネント

// ダミーデータ
const request = [
    {
      id: 1,
      picture:"",
      nickname: "Tom",
      guest_id:"xxx",
      volunteer_id:"",
      rikkouho_id:[],
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
      guest_id:"yyy",
      volunteer_id:"",
      rikkouho_id:[],
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
      guest_id:"zzz",
      volunteer_id:"",
      rikkouho_id:[],
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
      guest_id:"www",
      volunteer_id:"",
      rikkouho_id:[],
      es_date: "2021/07/21",
      start_time:"10:00",
      end_time:"12:00",
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
      guest_id:"vvv",
      volunteer_id:"",
      rikkouho_id:["aaa", "bbb", "ccc", "ddd", "eee"],
      es_date: "2021/07/22",
      start_time:"13:00",
      end_time:"14:00",
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
      emergency: 0,
    },
  ];


const Detail = (props) => {
    // idを前ページから受け取る。
    const escortId = props.location.state.escortId;
    const myId = props.location.state.myId;
    
    // dbの中からidがgotidに一致するものを取得
    const getdetail = request.filter((requestItem) => (requestItem.id === escortId));

    return (
        <>
        <Title title="詳細"/>        
            {/* requestの中身をrequestItemに入れて表示処理 */}
            {getdetail.map((item) => (
            // requestItemコンポーネントに各プロパティを渡す
            <DetailItem
                key={item.id}
                id={item.id}
                picture={item.picture}
                nickname= {item.nickname}
                rikkouho_id={item.rikkouho_id}
                guest_id={item.guest_id}
                volunteer_id={item.volunteer_id}
                es_date= {item.es_date}
                start_time= {item.start_time}
                end_time= {item.end_time}
                departure= {item.departure}
                departure_lat={item.departure_lat}
                departure_lon={item.departure_lon}
                destination={item.destination}
                destination_lat={item.destination_lat}
                destination_lon={item.destination_lon}                
                number={item.number}
                lan_1={item.lan_1}
                lan_2={item.lan_2}
                lan_3={item.lan_3}
                status= {item.status}
                status_2={item.status_2}
                emergency={item.emergency}
                history={props.history}
                myId={myId}
            />
            ))}
        </>
    )
}

export default Detail
