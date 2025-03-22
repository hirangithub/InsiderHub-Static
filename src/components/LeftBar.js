'use client';
import React from 'react';
import {
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, Avatar } from 'antd';
import Link from 'next/link';

const items = [
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
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
          label: <Link href="/">Home</Link>,
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
          label: <Link href="/settings">Settings</Link>,
        },
        {
          key: 'membership',
          label: 'Memberships',
          type: 'group',
          children: [
            {
              key: 'member1',
              icon: <Avatar size={24} src="/bob.jpg" />,
              label: <Link href="/">Bob Seger</Link>,
            },
            {
              key: 'member2',
              icon: <Avatar size={24} src="/rob.jpg" />,
              label: <Link href="/">Robert Downey Jr</Link>,
            },
          ],
        },
      ]}
    />

  )
}

export default LeftBar;