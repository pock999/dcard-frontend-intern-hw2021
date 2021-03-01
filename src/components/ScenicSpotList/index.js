import React from 'react';

import {
  List,
  Card,
} from 'antd';

const ScenicSpotList = (props) => {

  const {
    data,
  } = props;

  return (
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
              description={item.Description}
            />
          </Card>
        </List.Item>
    )}
  />
  );
};

export default ScenicSpotList;