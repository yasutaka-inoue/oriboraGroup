import React from 'react'
import RequestItem from './RequestItem';

// ここにdbからRequestのデータを取得するコードを書く（ひとまずはダミーのオブジェクト）
const request = [
    {
      id: 1,
      picture:"",
      nickname: "Tom",
      es_date: "",
      start_time:"",
      end_time:"",
      departure: "新宿駅",
      destination:"国立競技場",
      number:"2",
      lan_1:"英語",
      lan_2:"中国語",
      lan_3:"フランス語",
      status: "募集中",
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
      destination:"国立競技場",
      number:"2",
      lan_1:"英語",
      lan_2:"中国語",
      lan_3:"",
      status: "募集中",
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
      destination:"国立競技場",
      number:"2",
      lan_1:"英語",
      lan_2:"",
      lan_3:"",
      status: "募集中",
      emergency: 1,
    },
    {
      id: 4,
      picture:"",
      nickname: "Tiffany",
      es_date: "2021/07/20",
      start_time:"10:00",
      end_time:"12:00",
      departure: "新宿駅",
      destination:"国立競技場",
      number:"2",
      lan_1:"英語",
      lan_2:"中国語",
      lan_3:"フランス語",
      status: "募集中",
      emergency: 0,
    },
    {
      id: 5,
      picture:"",
      nickname: "Robin",
      es_date: "2021/07/20",
      start_time:"10:00",
      end_time:"12:00",
      departure: "新宿駅",
      destination:"国立競技場",
      number:"2",
      lan_1:"英語",
      lan_2:"中国語",
      lan_3:"フランス語",
      status: "募集中",
      emergency: 0,
    },
  ];
// emergencyに0がついてるやつだけを取得
const filtered = request.filter((item) => (item.emergency === 0));
// dbからとるときに、条件をつける


// RequestTopの直近部分
const RecentRequest = ({history, myId}) => {
    return (
        <div>
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

export default RecentRequest
