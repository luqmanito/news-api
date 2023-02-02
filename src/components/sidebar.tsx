import React from "react";
import { Input, Select, List, Tag, Calendar } from "antd";

const SidebarContent: React.FC = () => {
  const { Search } = Input;
  const { Option } = Select;

  const categories = [
    { value: "technology", label: "Technology" },
    { value: "sports", label: "Sports" },
    { value: "politics", label: "Politics" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
  ];

  const recentNews = [
    { title: "New iPhone model released", category: "technology" },
    { title: "Tiger Woods wins Masters tournament", category: "sports" },
    {
      title: "President announces new policy on climate change",
      category: "politics",
    },
    { title: "Movie star wins Academy Award", category: "entertainment" },
    { title: "Breakthrough in cancer research", category: "health" },
  ];



  const tags = [
    { value: "iphone", label: "iPhone" },
    { value: "tiger woods", label: "Tiger Woods" },
    { value: "climate change", label: "Climate Change" },
    { value: "academy award", label: "Academy Award" },
    { value: "cancer research", label: "Cancer Research" },
  ];

  return (
    <div className="sidebar">
      <Search className="search-inp" placeholder="Search news" />
      <div className="categories">
        <h3>Categories</h3>
        <Select className="list-cat" defaultValue="all">
          <Option value="all">All</Option>
          {categories.map((category) => (
            <Option key={category.value} value={category.value}>
              {category.label}
            </Option>
          ))}
        </Select>
      </div>
      <div className="recent-news">
        <h3>Recent News</h3>
        <List
          dataSource={recentNews}
          renderItem={(item) => (
            <List.Item>
              <a href="#">{item.title}</a>
              <Tag className="category-tag" color="blue">
                {item.category}
              </Tag>
            </List.Item>
          )}
        />
      </div>
      <div className="archives">
        <h3>Archives</h3>
        <Calendar fullscreen={false} />
      </div>
      <div className="tags">
        <h3>Tags</h3>
        {tags.map((tag) => (
          <Tag key={tag.value} className="tag">
            {tag.label}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default SidebarContent;
