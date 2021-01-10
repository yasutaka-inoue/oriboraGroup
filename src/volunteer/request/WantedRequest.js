import React from 'react'
import Filter from "./Filter"

// Requestの募集中の部分 (データ取得)

// ダミーデータ
const request = [
    {
      id: 1,
      picture:"",
      nickname: "Tom",
      guest_id:"",
      volunteer_id:"",
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
      guest_id:"",
      volunteer_id:"",
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
      guest_id:"",
      volunteer_id:"",
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
      status: "成立済",
      status_2: "到着",
      emergency: 1,
    },
    {
      id: 4,
      picture:"",
      nickname: "Tiffany",
      guest_id:"",
      volunteer_id:"",
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
      guest_id:"",
      volunteer_id:"",
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
      status: "成立済",
      status_2: "待機中",
      emergency: 0,
    },
  ];


// statusに"募集中"が入っているやつだけを取得
const requestwanted = request.filter((item) => (item.status === "募集中"));
// dbからとるときに、条件をつける
  
const WantedRequest = ({myId, history}) => {
    return (
      <>
      <Filter
       request={requestwanted}
       history={history}
       myId={myId}
       />
      </>
    )
}

export default WantedRequest
