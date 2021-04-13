import React from 'react';

import { useParams } from 'react-router-dom';

import {
  PageHeader,
  List,
  Card,
  Select,
} from 'antd';

const cityMap = [
  {value: '', name: '全部'},
  {value: 'Taipei', name: '臺北市'},
  {value: 'NewTaipei', name: '新北市'},
  {value: 'Taoyuan', name: '桃園市'},
  {value: 'Taichung', name: '臺中市'},
  {value: 'Tainan', name: '臺南市'},
  {value: 'Kaohsiung', name: '高雄市'},
  {value: 'Keelung', name: '基隆市'},
  {value: 'Hsinchu', name: '新竹市'},
  {value: 'HsinchuCounty', name: '新竹縣'},
  {value: 'MiaoliCounty', name: '苗栗縣'},
  {value: 'ChanghuaCounty', name: '彰化縣'},
  {value: 'NantouCounty', name: '南投縣'},
  {value: 'YunlinCounty', name: '雲林縣'},
  {value: 'ChiayiCounty', name: '嘉義縣'},
  {value: 'Chiayi', name: '嘉義市'},
  {value: 'PingtungCounty', name: '屏東縣'},
  {value: 'YilanCounty', name: '宜蘭縣'},
  {value: 'HualienCounty', name: '花蓮縣'},
  {value: 'TaitungCounty', name: '臺東縣'},
  {value: 'KinmenCounty', name: '金門縣'},
  {value: 'PenghuCounty', name: '澎湖縣'},
  {value: 'LienchiangCounty', name: '連江縣'},
];

const findCity = (city) => {
  if(!city) {
    return '全部';
  } else {
    try {
      const cityName = cityMap.find(e => e.value === city).name;
      return cityName;
    } catch(e) {
      return '全部';
    }
  }
  
};

const ScenicSpotList = (props) => {

  const {
    data,
    historyPush,
  } = props;

  const {
    City,
  } = useParams();

  return (
    <>
      <PageHeader
        className="site-page-header"
        title={findCity(City)}
        // subTitle="This is a subtitle"
        extra={[
          <Select
            style={{ width: 120 }}
            defaultValue={findCity(City)}
            onChange={(value) => {
              if(value === '') {
                historyPush('/scenicSpot');
              } else {
                historyPush(`/scenicSpot/${value}`);
              }
            }}
          >
            {
              cityMap.map((item) => (
                <Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>
              ))
            }
          </Select>
        ]}
      />
      <List
        grid={{ gutter: 16, column: 3 }}
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item
          >
            <Card
              style={{flex:1}}
              hoverable
              // cover={
              //   <img
              //     style={{ width: '100%', height: 300}}
              //     alt={item.Name}
              //     src={global._.isEmpty(item.Picture) ? '' : item.Picture.PictureUrl1}
              //   />
              // }
            >
              <Card.Meta
                title={item.Name}
                description={global._.has(item, 'Description') ? item.Description : item.DescriptionDetail}
              />
            </Card>
          </List.Item>
      )}
    />
  </>
  );
};

export default ScenicSpotList;