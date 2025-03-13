"use client"; // Ensure this runs as a Client Component
import React from 'react';
import { Flex, Card, Dropdown, Space, Button, Tag, Image } from "antd";
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import {
    DownOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';

const items = [
    {
        label: 'All orders',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
    {
        label: '4rd menu item',
        key: '4',
    },
];
const menuProps = {
    items,
};

const MyOrders = () => (
    <>  
        <div className='tab-content-header'>
            <Title level={4} style={{ marginBottom: 0 }}>My orders</Title>
            <label>Here you can view your order history.</label>
        </div>

        <Card className="filter">
            <Flex>  
                <Space>
                    <Link href="#">View all</Link>
                    <Link href="#" className="custom-link">To Pay(0)</Link>
                    <Link href="#" className="custom-link">To Ship(1)</Link>
                    <Link href="#" className="custom-link">To Receive(1)</Link>
                </Space>
                <div>
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                            All orders
                            <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
            </Flex>
        </Card>

        <Flex className="order-list"> 

            {/* Record 1 */} 
            <Card className="card border-only">
                <ul className='order-card-header'>
                    <li>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 'lighter' }}>To ship</Title>
                    </li>
                    <li className="li-right">
                        <Space direction="horizontal" size={10}>
                            <label>Order date: Mar 02, 2025</label>
                            <label>Order ID: 10419762789044</label>
                        </Space>
                        <Button type="text">Order details <ArrowRightOutlined /></Button>
                    </li>
                </ul>
                <Flex className="order-item"> 
                    <ul className='col-left'>
                        <li>
                            <Image width={'120px'} src="/products/p-1.jpg" /> 
                        </li>
                        <li>
                            <Space direction='vertical'>
                                <label>Golden Nugget oil classic tshirt - gasoline.com partnership special edition Men's Tshirts Plain Short Sleeve Tee Oversized T Shirt Casual Male Top</label>
                                <Tag>White/M</Tag>
                                <label>LKR2376.54 x 1</label>
                            </Space>
                        </li>
                    </ul>
                    <ul className='col-right'>
                        <li><Title level={5} style={{ marginBottom: 0, fontWeight: 'lighter' }}>LKR 2376.54</Title></li>
                    </ul>
                </Flex>
            </Card>

            {/* Record 2 */} 
            <Card className="card border-only">
                <ul className='order-card-header'>
                    <li>
                        <Title level={5} style={{ marginBottom: 0, fontWeight: 'lighter' }}>Awaiting Delivery</Title>
                    </li>
                    <li className="li-right">
                        <Space direction="horizontal" size={10}>
                            <label>Order date: Feb 21, 2025</label>
                            <label>Order ID: 1027852789788</label>
                        </Space>
                        <Button type="text">Order details <ArrowRightOutlined /></Button>
                    </li>
                </ul>
                <Flex className="order-item"> 
                    <ul className='col-left'>
                        <li>
                            <Image width={'120px'} src="/products/p-4.jpg" /> 
                        </li>
                        <li>
                            <Space direction='vertical'>
                                <label>Linkin Park Official Japan Tour 2020 - Logo - Cap - “From Zero” World Tour Exclusive tour item - Unisex black featuring the From Zero Linkin Park logo</label>
                                <Tag>Gray/S</Tag>
                                <label>LKR998.00 x 1</label>
                            </Space>
                        </li>
                    </ul>
                    <ul className='col-right'>
                        <li>
                            <Title level={5} style={{ marginBottom: 0, fontWeight: 'lighter' }}>LKR 998.00</Title>
                            <Space direction='vertical' size={15}>
                                <Button type="primary">Confirm receipt</Button>   
                                <Button type="default" variant="outlined">Track order</Button>   
                            </Space>
                        </li>
                    </ul>
                </Flex>
            </Card>

            {/* Record 3 */} 
            <Card className="card border-only">
                <ul className='order-card-header'>
                    <li>
                        <Title level={5} style={{ marginBottom: 0, color: '#4ADE80', fontWeight: 'lighter' }}>Completed</Title>
                    </li>
                    <li className="li-right">
                        <Space direction="horizontal" size={10}>
                            <label>Order date: Feb 21, 2025</label>
                            <label>Order ID: 1027852789788</label>
                        </Space>
                        <Button type="text">Order details <ArrowRightOutlined /></Button>
                    </li>
                </ul>
                <Flex className="order-item"> 
                    <ul className='col-left'>
                        <li>
                            <Image width={'120px'} src="/products/p-3.jpg" /> 
                        </li>
                        <li>
                            <Space direction='vertical'>
                                <label>Linkin Park Official Japan Tour 2020 - Logo - Cap - “From Zero” World Tour Exclusive tour item - Unisex black featuring the From Zero Linkin Park logo</label>
                                <Tag>Gray/S</Tag>
                                <label>LKR998.00 x 1</label>
                            </Space>
                        </li>
                    </ul>
                    <ul className='col-right'>
                        <li>
                            <Space direction='vertical'>
                                <Button type="default" variant="outlined">Remove from the list</Button>   
                            </Space>
                        </li>
                    </ul>
                </Flex>
            </Card>

        </Flex>

    </>
);

export default MyOrders;