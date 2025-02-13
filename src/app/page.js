"use client"; // Ensure this runs as a Client Component

import { useState, useEffect } from "react";

import { Button, Card, Col, Flex, Row, Space, Affix, Avatar, Tooltip, Dropdown } from "antd";
//import Avatar from "antd/es/avatar/avatar";
import {
  EllipsisOutlined,
  ShareAltOutlined,
  FilterOutlined,
  HeartOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  SaveOutlined,
  AntDesignOutlined,
  UserOutlined,
  DownOutlined
} from '@ant-design/icons';
import Title from 'antd/es/typography/Title';


const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Copy link post',
    key: '1',
  },
  {
    label: 'Share this post',
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: 'Hide users posts from feed',
    key: '3',
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};


export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);

    checkScreenSize(); // Run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  {/* Sticky Content Block */} 
  const content = (
    <>
      <Card bordered={false} style={{ width: '100%', marginTop: '1rem' }} className="card-mycollection">
        <Title level={5} style={{ margin: 0 }}>My collection</Title>
        <Space style={{ width: '100%', flexDirection: 'column', gap: '.8rem', paddingTop: '.5rem' }}>
          <div className="inner">
            <Avatar className="product-img" style={{ backgroundImage: `url('/p1.jpg')` }} />
            <div>
              <label className="product-name">Trail Running Jacket Nike Windrunner</label>
              <figure>$99</figure>
            </div>
          </div>
          <div className="inner">
            <Avatar className="product-img" style={{ backgroundImage: `url('/p2.jpg')` }} />
            <div>
              <label className="product-name">Wild Stitches</label>
              <figure>$245</figure>
            </div>
          </div>
          <div className="inner">
            <Avatar className="product-img" style={{ backgroundImage: `url('/p1.jpg')` }} />
            <div>
              <label className="product-name">Trail Running Jacket Nike Windrunner</label>
              <figure>$99</figure>
            </div>
          </div>
        </Space>
      </Card>

      <Card bordered={false} style={{ width: '100%', marginTop: '1rem' }} className="card-sr">
        <Title level={4} style={{ margin: 0 }}>Want to Make your Event Unforgettable with Golden Nugget</Title>
        <Button size="large" className="white">Try now</Button>
      </Card>
    </>
  );
  
  return (
    <>
      <Row>
          <Col span={24} className="cover">&nbsp;</Col>
      </Row>
      <Row className="upper">
          <Col
            xs={{ span: 24 }}
            md={{ span: 16 }}
          >
              <Flex className="about-creator-panel">  
                <Avatar shape="square" size={120} src="/avatar.jpg" className="profile-avatar" />
                <div className="inner">
                  <Title level={3}>Golden Nugget LC</Title>
                  <label style={{ paddingRight: '2rem' }}>Crafting Soundscapes, Inspiring Connections</label>
                </div>
              </Flex>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
          >
            <Flex className="right-panel"> 
              <Button type="primary" size="large">Subscribe</Button>
              <Button type="default" variant="outlined" shape="circle" icon={<ShareAltOutlined />} size="large" />
              <Button type="default" variant="outlined" shape="circle" icon={<EllipsisOutlined />} size="large" />
            </Flex>
          </Col>
      </Row>
      <Row>
          <Col span={24}>
              <div className="container">
                <Row gutter={[30, 0]}>
                  <Col
                    xs={{ span: 24, order: 2 }}
                    sm={{ span: 24, order: 2 }}
                    md={{ span: 15, order: 1 }}
                    lg={{ span: 15, order: 1 }}
                    className="container-left-panel"
                  >
                    <Flex className="post-filter"> 
                        <Title level={4} style={{ margin: 0 }}>My Posts</Title>
                        <Button variant="outlined" shape="circle" icon={<FilterOutlined />} size="large" />
                    </Flex>
                    <Flex className="post-list"> 
                        <Card bordered={false} className="card-post">
                            <div className="post-header">
                                <ul>
                                  <li>
                                      <Space direction="horizontal" size={10}>
                                          <Avatar size={45} src="/avatar.jpg" />
                                          <Space direction="vertical" style={{ rowGap: 0 }}>
                                              <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}>Golden Nugget LC</Title>
                                              <label className="lbl-username">@goldennuggetlc</label>
                                          </Space>
                                      </Space>
                                  </li>
                                  <li className="li-right">
                                      <Space direction="horizontal" size={0}>
                                          <label>10min</label>
                                          <Dropdown menu={menuProps} trigger={['click']}>
                                            <Button shape="circle" icon={<EllipsisOutlined />} size="large" className="icon-button-border0" />
                                          </Dropdown>
                                      </Space>
                                  </li>
                                </ul>
                            </div>
                            <div className="post-body">
                                <p>Golden Nugget LC Live | A Musical Journey 🎶✨ <br />Get ready for an unforgettable night as Golden Nugget LC takes the stage for a breathtaking performance! With a fusion of Sri Lankan, Indian classical, and Western music, we’re bringing you an electrifying symphony like never before.</p>
                                <p>#LiveMusic #MusicalFusion #CulturalHarmony #OrchestraExperience</p>

                                <div className="post-content-holder">
                                    <video controls preload="none">
                                        <source src="/video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="post-footer">
                               <ul>
                                  <li>
                                      <Space direction="horizontal" size={10}>
                                        <Button shape="circle" icon={<HeartOutlined />} className="icon-button-border0" />
                                        <Button shape="circle" icon={<MessageOutlined />} className="icon-button-border0" />
                                        <Button shape="circle" icon={<ShareAltOutlined />} className="icon-button-border0" />
                                      </Space>
                                  </li>
                                  <li className="li-right">
                                      <Space direction="horizontal" size={10}>
                                          <Button shape="circle" icon={<ShoppingCartOutlined />} className="icon-button-border0" />
                                          <Button shape="circle" icon={<SaveOutlined />} className="icon-button-border0" />
                                      </Space>
                                  </li>
                                </ul>
                                <div className="interact-panel">
                                  <ul>
                                    <li className="panel-likes">
                                        <Space direction="horizontal" size={0}>
                                              <Avatar
                                                style={{
                                                  backgroundColor: '#1890ff',
                                                }}
                                                icon={<AntDesignOutlined />}
                                              />
                                              <Avatar
                                                style={{
                                                  backgroundColor: '#f56a00',
                                                }}
                                              >
                                                K
                                              </Avatar>
                                              <Tooltip title="Ant User" placement="top">
                                                <Avatar
                                                  style={{
                                                    backgroundColor: '#87d068',
                                                  }}
                                                  icon={<UserOutlined />}
                                                />
                                              </Tooltip>
                                        </Space>
                                        <a href="#">235 Likes</a>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li><a href="#" className="custom-link">View all 34 comments</a></li>
                                  </ul>
                                </div>
                            </div>
                        </Card>

                        <Card bordered={false} className="card-post">
                            <div className="post-header">
                                <ul>
                                  <li>
                                      <Space direction="horizontal" size={10}>
                                          <Avatar size={45} src="/avatar.jpg" />
                                          <Space direction="vertical" style={{ rowGap: 0 }}>
                                              <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}>Golden Nugget LC</Title>
                                              <label className="lbl-username">@goldennuggetlc</label>
                                          </Space>
                                      </Space>
                                  </li>
                                  <li className="li-right">
                                      <Space direction="horizontal" size={0}>
                                          <label>10min</label>
                                          <Dropdown menu={menuProps} trigger={['click']}>
                                            <Button shape="circle" icon={<EllipsisOutlined />} size="large" className="icon-button-border0" />
                                          </Dropdown>
                                      </Space>
                                  </li>
                                </ul>
                            </div>
                            <div className="post-body">
                                <p>Golden Nugget LC Live | A Musical Journey 🎶✨ <br />Get ready for an unforgettable night as Golden Nugget LC takes the stage for a breathtaking performance! With a fusion of Sri Lankan, Indian classical, and Western music, we’re bringing you an electrifying symphony like never before.</p>
                                <p>#LiveMusic #MusicalFusion #CulturalHarmony #OrchestraExperience</p>

                                <div className="post-content-holder">
                                    <img src="/grand-img.jpg" alt="" />
                                </div>
                            </div>
                            <div className="post-footer">
                               <ul>
                                  <li>
                                      <Space direction="horizontal" size={10}>
                                        <Button shape="circle" icon={<HeartOutlined />} className="icon-button-border0" />
                                        <Button shape="circle" icon={<MessageOutlined />} className="icon-button-border0" />
                                        <Button shape="circle" icon={<ShareAltOutlined />} className="icon-button-border0" />
                                      </Space>
                                  </li>
                                  <li className="li-right">
                                      <Space direction="horizontal" size={10}>
                                          <Button shape="circle" icon={<ShoppingCartOutlined />} className="icon-button-border0" />
                                          <Button shape="circle" icon={<SaveOutlined />} className="icon-button-border0" />
                                      </Space>
                                  </li>
                                </ul>
                                <div className="interact-panel">
                                  <ul>
                                    <li className="panel-likes">
                                        <Space direction="horizontal" size={0}>
                                              <Avatar
                                                style={{
                                                  backgroundColor: '#1890ff',
                                                }}
                                                icon={<AntDesignOutlined />}
                                              />
                                              <Avatar
                                                style={{
                                                  backgroundColor: '#f56a00',
                                                }}
                                              >
                                                K
                                              </Avatar>
                                              <Tooltip title="Ant User" placement="top">
                                                <Avatar
                                                  style={{
                                                    backgroundColor: '#87d068',
                                                  }}
                                                  icon={<UserOutlined />}
                                                />
                                              </Tooltip>
                                        </Space>
                                        <a href="#">235 Likes</a>
                                    </li>
                                  </ul>
                                  <ul>
                                    <li><a href="#" className="custom-link">View all 34 comments</a></li>
                                  </ul>
                                </div>
                            </div>
                        </Card>
                    </Flex>
                  </Col>

                  <Col 
                    xs={{ span: 24, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    md={{ span: 9, order: 2 }}
                    lg={{ span: 9, order: 2 }}
                    className="container-right-panel"
                  >
                      <Card bordered={false} style={{ width: '100%' }} className="card-aboutcreator">
                        <Title level={5} style={{ margin: 0 }}>About me</Title>
                        <p>Golden Nugget LC is more than just a band we're a powerhouse of energy, passion and musical excellence.
                            With roots in USA we've made it our mission to deliver unforgettable performances that blend electrifying melodies with hearfelt lyrics.</p>
                        <Space className="about-figures">
                          <div>
                            <Title level={5} style={{ margin: 0 }}>50k</Title>
                            <label>Members</label>
                          </div>
                          <div>
                            <Title level={5} style={{ margin: 0 }}>3.5k</Title>
                            <label>Paid users</label>
                          </div>
                          <div>
                            <Title level={5} style={{ margin: 0 }}>46</Title>
                            <label>Posts</label>
                          </div>
                        </Space>
                      </Card>
                      
                      {/* Sticky Content - Desktop & Mobile */} 
                      {isMobile ? (
                        <div>{content}</div>  // No Affix, simple content for mobile
                      ) : (
                        <Affix offsetTop={10}>{content}</Affix>  // Use Affix for desktop
                      )}                  
                      
                  </Col>
                </Row>
              </div>

          </Col>
      </Row>
    </>
  );
}
