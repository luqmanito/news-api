import React, { useState } from "react";
import { Col, Row } from "antd";
import "../styles/app.css";
import Paragraph from "antd/es/typography/Paragraph";
// const { Header, Footer, Sider, Content } = Layout;

const News: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);

  const readMore = () => {
    setEllipsis(!ellipsis);
  };
  return (
    <div className="set">
      <img
        className="newsImg"
        src="https://res.cloudinary.com/dwxujoxc7/image/upload/v1675227632/project2/news-intro-template_zsztvr.jpg"
        alt="news"
      />
      <h1 className="newsTitle">Judul Berita</h1>
      <Row className="newsGenre">
        <Col span={12}>Published at : 12-12-2022 author By : Admin </Col>
        <Col span={12}>categories : Politics, Insider, Article</Col>
      </Row>

      <Paragraph onClick={readMore} ellipsis={ellipsis} className="newsContent">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique unde
        consectetur autem possimus accusamus quasi voluptatem provident in
        suscipit omnis cum aperiam doloribus deleniti reprehenderit tempore
        atque dolorem enim ipsa mollitia consequuntur assumenda veritatis, ut
        nisi! Nesciunt impedit sequi, architecto beatae eos quo unde cumque
        totam suscipit sit, iusto hic.
      </Paragraph>
      <div>
      <hr className="separator" />
      </div>
    </div>
    
  );
};

export default News;

