import React, { useEffect, useState } from "react";
import { Layout, Space, Col, Row } from "antd";
import "../styles/app.css";
import { retrieveNews } from "../utils";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import { useParams } from "react-router-dom";
import HeaderContent from "../components/header";
import SidebarContent from "../components/sidebar";
import FooterContent from "../components/footer";
const { Sider, Content } = Layout;

const NewsDetailPage: React.FC = () => {
  const [newsDatas, setNewsDatas] = useState<any[]>([]);
  const [ellipsis, setEllipsis] = useState(true);
  const getAllNews = async () => {
    try {
      const { data } = await retrieveNews();
      return setNewsDatas(data.articles);
    } catch (error) {
      if (error) {
        console.log("error message: ", error);
        return error;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };
  const readMore = () => {
    setEllipsis(!ellipsis);
  };

  const { id } = useParams();
  const byTitle = id ? id.substring(1) : null;

  const output = newsDatas.filter((el: any) => el.title === byTitle);

  const convertedDate = moment(output[0] ? output[0].publishedAt : null)
    .utc()
    .format("YYYY-MM-DD");

  const [year, month, day] = convertedDate.split("-");
  const dateResult = [day, month, year].join("-");

  const eksternalLink = output[0] ? output[0].url : "https://google.com";

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <HeaderContent />
        <Layout>
          <Sider width={350} style={siderStyle}>
            <SidebarContent />
          </Sider>
          <Content style={contentStyle}>
            <div>
              <div className="set">
                <img
                  className="newsImg"
                  src={
                    !output[0] || output[0].urlToImage === null
                      ? "https://res.cloudinary.com/dwxujoxc7/image/upload/c_scale,w_493/v1675227632/project2/news-intro-template_zsztvr.jpg"
                      : output[0].urlToImage
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                      "https://res.cloudinary.com/dwxujoxc7/image/upload/c_scale,w_493/v1675227632/project2/news-intro-template_zsztvr.jpg";
                  }}
                  alt="news-img"
                />
                <Paragraph className="newsTitleDetail">
                  {output[0] ? output[0].title : "News Title"}{" "}
                </Paragraph>
                <Row className="newsGenre">
                  <Col span={12}>
                    Published at : {dateResult} author By :
                    {output[0] ? output[0].author : "News Author"}
                  </Col>
                  <Col className="genre" span={12}>
                    categories : Politics, Insider, Article
                  </Col>
                </Row>

                <Paragraph onClick={readMore} className="newsContent">
                  {output[0] ? output[0].content : "News Content"}
                </Paragraph>
                <Paragraph
                  onClick={() => {
                    window.location.href = eksternalLink;
                  }}
                  className="readMore-eksternal"
                >
                  Read full article here{" "}
                </Paragraph>
              </div>
            </div>
          </Content>
        </Layout>
        <FooterContent />
      </Layout>
    </Space>
  );
};

export default NewsDetailPage;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};

const siderStyle: React.CSSProperties = {
  textAlign: "left",
  paddingLeft: "3vw",
  lineHeight: "120px",
  fontSize: "2vw",
  color: "black",
  backgroundColor: "white",
};
