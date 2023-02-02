import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const FooterContent: React.FC = () => {
  return (
    <Footer style={footerStyle}>
      <div className="copyright">
        <p>&copy; 2023 News Website. All rights reserved.</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com">
          <i className="fa fa-facebook-square">facebook</i>
        </a>
        <a href="https://twitter.com">
          <i className="fa fa-twitter-square">twitter</i>
        </a>
        <a href="https://instagram.com">
          <i className="fa fa-instagram">instagram</i>
        </a>
      </div>
    </Footer>
  );
};

export default FooterContent;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "40px 0",
  color: "#fff",
  backgroundColor: "#333",
  
};
