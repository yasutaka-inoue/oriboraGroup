import React from 'react'
import Title from '../../common/Title'
import GuestDetailItem from './GuestDetailItem'

// detailのデータを取得するコンポーネント

// ダミーデータ
const request = [
    {
      id: 1,
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
      lan_3:"フランス語",
      status: "募集中",
      status_2: "",
      emergency: 1,
    },
    {
      id: 2,
      picture:"",
      nickname: "",
      guest_id:"yyy",
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


const GuestDetail = (props) => {
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
            <GuestDetailItem
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

export default GuestDetail
