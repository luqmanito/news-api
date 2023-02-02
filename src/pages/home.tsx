import React, { useEffect, useState } from "react";
import { Layout, Space, Col, Row, Button } from "antd";
import "../styles/app.css";
import { retrieveNews } from "../utils";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import HeaderContent from "../components/header";
import FooterContent from "../components/footer";
import SidebarContent from "../components/sidebar";
const { Sider, Content } = Layout;

const App: React.FC = () => {
  const [newsDatas, setNewsDatas] = useState<any[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
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

  const pageSize = 5;
  let page = pageIndex;
  const totalPages = newsDatas ? newsDatas.length / pageSize : 0;
  const pageData = newsDatas.slice(page * pageSize - pageSize, page * pageSize);

  const nextData = () => {
    const tempCount = pageIndex + 1;
    setPageIndex(tempCount);
  };

  const prevData = () => {
    const tempCount = pageIndex - 1;
    setPageIndex(tempCount);
  };
  const navigate = useNavigate();

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
              {pageData.map((el) => {
                const convertedDate = moment(el.publishedAt)
                  .utc()
                  .format("YYYY-MM-DD");

                const [year, month, day] = convertedDate.split("-");
                const dateResult = [day, month, year].join("-");
                return (
                  <div className="set">
                    <img
                    onClick={() => navigate(`/news-detail/:${el.title}`)}
                      className="newsImg"
                      src={
                        el.urlToImage === null || undefined
                          ? "https://res.cloudinary.com/dwxujoxc7/image/upload/c_scale,w_493/v1675227632/project2/news-intro-template_zsztvr.jpg"
                          : el.urlToImage
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          "https://res.cloudinary.com/dwxujoxc7/image/upload/c_scale,w_493/v1675227632/project2/news-intro-template_zsztvr.jpg";
                      }}
                      alt="news-img"
                    />
                    <Paragraph
                      onClick={() => navigate(`/news-detail/:${el.title}`)}
                      className="newsTitle"
                    >
                      {el.title}
                    </Paragraph>
                    <Row className="newsGenre">
                      <Col span={12}>
                        Published at : {dateResult} author By :{el.author}{" "}
                      </Col>
                      <Col className="genre" span={12}>
                        categories : Politics, Insider, Article
                      </Col>
                    </Row>

                    <Paragraph
                      onClick={readMore}
                      ellipsis={ellipsis}
                      className="newsContent"
                    >
                      {el.description}
                    </Paragraph>
                    <Paragraph
                      onClick={() => navigate(`/news-detail/:${el.title}`)}
                      className="readMore"
                    >
                      Read More
                    </Paragraph>
                    <div>
                      <hr className="separator" />
                    </div>
                  </div>
                );
              })}
            </div>
            <Content className="wrapper">
              <Row className="btn-wrap">
                <Col span={12}>
                  <Button
                    onClick={prevData}
                    className={pageIndex === 1 ? "pagelink2" : "pagelink1"}
                    disabled={pageIndex === 1 ? true : false}
                  >
                    Previous Page
                  </Button>
                </Col>
                <Col span={12}>
                  <Button
                    className={
                      pageIndex === totalPages ? "pagelink2" : "pagelink1"
                    }
                    disabled={pageIndex === totalPages ? true : false}
                    onClick={nextData}
                  >
                    Next Page
                  </Button>
                </Col>
              </Row>
            </Content>
          </Content>
        </Layout>
        <FooterContent />
      </Layout>
    </Space>
  );
};

export default App;

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
  background: "white",
};
