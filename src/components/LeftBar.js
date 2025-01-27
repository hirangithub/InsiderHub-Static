import React from 'react';
import {
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import "./leftbar.css";

const items = [
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));


function LeftBar() {
  return (
  
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <HomeOutlined />,
          label: 'Home',
        },
        {
          key: '2',
          icon: <SearchOutlined />,
          label: 'Explore',
        },
        {
          key: '3',
          icon: <BellOutlined />,
          label: 'Notifications',
        },
        {
          key: '4',
          icon: <MessageOutlined />,
          label: 'Messages',
        },
        {
          key: '5',
          icon: <SettingOutlined />,
          label: 'Settings',
        },
      ]}
    />

  )
}

export default LeftBar;