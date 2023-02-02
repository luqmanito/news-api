import { Layout } from "antd";
import React from "react";

interface NewsDetailsProps {
  title: string;
  description: string;
  content: string;
  id : string;
}

const NewsDetails: React.FC<NewsDetailsProps> = ({
    id,
    title,
    description,
    content
}) => {
  return (
    <Layout>
      <div>newsDetails</div>
    </Layout>
  );
};

export default NewsDetails;
