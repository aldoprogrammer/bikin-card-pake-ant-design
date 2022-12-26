import React from 'react';
import './App.css';
import { Card, Button } from 'antd';
import { FacebookFilled } from '@ant-design/icons';
import { InstagramOutlined, TwitterOutlined, YoutubeFilled } from '@ant-design/icons/lib/icons';
import Avatar from 'antd/lib/avatar/avatar';
function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30
    }}>
      <Card 
      hoverable={true}
      style={{
        width: 320
      }}
      actions={[
        <FacebookFilled style={{ color: "blue"}}/>,
        <TwitterOutlined style={{ color: "skyblue"}}/>,
        <InstagramOutlined style={{ color: "purple"}}/>,
        <YoutubeFilled style={{ color: "red"}}/>,
        <p>5000 Stars</p>
      ]}
      title="Informasi Lebih Lanjut?!"
      extra={<Button type="primary">Details</Button>}
      cover={
      <div style={{
        height: 150,
        width: "100%",
        backgroundColor: "black",
        color: "white",
        fontSize: 30,
        paddingTop: 14,
        fontFamily: 'revert-layer'
      }}
      >
      
        Javascript User Only!
      </div>
      }
      >
      <Card.Meta
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: -60,
        }}
        avatar={
          <Avatar
            size={70}
            src={"https://thumbs.dreamstime.com/b/programmer-icon-vector-isolated-white-background-logo-concep-programmer-icon-vector-isolated-white-background-logo-concept-125792315.jpg"
            }
            ></Avatar>
        }
        title={"Aldo Lata Soba"}
        description="Web Programmer, Gamer, And Blogger"
      ></Card.Meta>

        <p style={{ marginTop: 30 }}>I'm currently still a student 
        college in a private university in Bengkulu.
        I learn about programming, playing game,
        and also writing articles on blog.
        </p>
      </Card>
    </div>
  );
};
export default App;