"use client"; // Ensure this runs as a Client Component

import { useEffect } from "react";
import { Layout, Menu, Image, Space, Button, Col, Row, Flex, Card, Avatar, Dropdown, Tooltip, Divider } from 'antd';
import Title from 'antd/es/typography/Title';
import { Content } from "antd/es/layout/layout";
const { Header } = Layout;
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
import Link from 'next/link';

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const items2 = [
    {
        label: 'Copy link post',
        key: '1',
    },
    {
        label: 'Share this post',
        key: '2',
    },
];
const menuProps = {
    items2,
    onClick: handleMenuClick,
};

const items = [
    {
        label: <Link href="/">Home</Link>,
        key: '1',
    },
    {
        label: 'Creators',
        key: '2',
    },
    {
        label: 'Support',
        key: '3',
    },
];

export default function GuestUser() {
  useEffect(() => {
    // Add class to hide sidebar on this page
    document.body.classList.add('guestuser-controller');

    // Cleanup when leaving the page
    return () => {
      document.body.classList.remove('guestuser-controller');
    };
  }, []);

  return (
    <>
        {/* Not Logged-In Header */}
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Image
                    src="/logo.png"
                    alt="InsiderHub"
                    height={30} 
                    className="logo"
                />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'center',
                    }}
                />
                 <Space style={{ flexDirection: 'row', gap: '.8rem' }}>
                    <Button type="text">Login</Button>
                    <Button size="large" className="white">Get started</Button>
                </Space>
            </Header>
            
            <Layout>
                <Content>
                    <div className="container">
                        <Row gutter={[30, 0]} justify="center">
                            <Col 
                                xs={{ span: 24 }}
                                sm={{ span: 24 }}
                                md={{ span: 18 }}
                                lg={{ span: 15 }}
                            >
                                <Flex className="post-list"> 

                                    <Card className="card-post">
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

                                            <div className="post-content-holder blur-on">
                                                <img src="/post-blur.jpg" alt="" />
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

                                    <Divider />

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

                                            <div className="post-content-holder blur-on">
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
                        </Row>
                    </div>
                </Content>
            </Layout>
        </Layout>
    </>
  );
}
