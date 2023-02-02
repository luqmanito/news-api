import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";
const { Header } = Layout;

const HeaderContent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Header style={headerStyle}>
      <div onClick={() => navigate(`/`)} className="logo">
        EIGEN News
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item onClick={() => navigate(`/`)} key="1">
          Home
        </Menu.Item>
        <Menu.Item key="2">News</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderContent;

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 50px",
  height: "80px",
  backgroundColor: "white",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};
