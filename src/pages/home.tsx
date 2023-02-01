import React, { useEffect, useState } from "react";
import { Layout, Space, Col, Row } from "antd";
import "../styles/app.css";
import News from "../components/news";
import { getNews } from "../utils";
const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {



useEffect(()=>{
getNews()
})

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>
          <Row>
            <Col span={6}>
              <img
                src="https://res.cloudinary.com/dwxujoxc7/image/upload/c_scale,w_55/v1674226188/project2/Mas_Ito_Frozen_transparan_mduci6.png"
                alt="logo"
              />
            </Col>
            <Col span={6}>Home</Col>
            <Col span={6}>Entertainment</Col>
            <Col span={6}>Shop</Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={350} style={siderStyle}>
            Categories
          </Sider>
          <Content style={contentStyle}>
            <News/>
            <News/>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default App;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
