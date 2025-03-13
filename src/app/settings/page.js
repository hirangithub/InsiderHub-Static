"use client"; // Ensure this runs as a Client Component
import React, { useEffect, useState } from 'react';
import { Row, Col, Tabs, Flex, Menu, Dropdown } from "antd";
import Title from 'antd/es/typography/Title';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import MyOrders from './myorders';

export default function Cart() {
    const [isMobile, setIsMobile] = useState(false); // State to track if the screen is mobile-sized
    const [selectedTab, setSelectedTab] = useState('1'); // Track selected tab for mobile
    
    // Update the isMobile state based on screen width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992); // Set the breakpoint to 768px for mobile
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load
    
        return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
    }, []);
    
    // Function to generate tab content
    const getTabContent = (id) => {
        switch (id) {
        case '1': return <MyOrders />;
        case '2': return <div><h4>My Profile</h4><p>Your profile details and information.</p></div>;
        case '3': return <div><h4>My Requests</h4><p>Details about your requests.</p></div>;
        case '4': return <div><h4>Payments</h4><p>View and manage your payment history.</p></div>;
        case '5': return <div><h4>Returns/Refunds</h4><p>Manage your returns and refunds.</p></div>;
        case '6': return <div><h4>Feedback</h4><p>Give feedback about your experience.</p></div>;
        case '7': return <div><h4>Delivery Address</h4><p>Update or add a new delivery address.</p></div>;
        case '8': return <div><h4>Invite Friends</h4><p>Invite your friends to the platform.</p></div>;
        case '9': return <div><h4>Privacy & Safety</h4><p>Manage your privacy and safety settings.</p></div>;
        case '10': return <div><h4>Display</h4><p>Manage your display settings.</p></div>;
        case '11': return <div><h4>Help Center</h4><p>Find answers to common questions or contact support.</p></div>;
        default: return <div>Content for Tab {id}</div>;
        }
    };
    
    // Function to generate tab labels
    const getTabLabel = (id) => {
        switch (id) {
            case '1': return 'My Orders';
            case '2': return 'My Profile';
            case '3': return 'My Requests';
            case '4': return 'Payments';
            case '5': return 'Returns/Refunds';
            case '6': return 'Feedback';
            case '7': return 'Delivery Address';
            case '8': return 'Invite Friends';
            case '9': return 'Privacy & Safety';
            case '10': return 'Display';
            case '11': return 'Help Center';
            default: return `Tab ${id}`;
        }
    };

    // Handle the dropdown selection (for mobile view)
    const handleDropdownSelect = (key) => {
        setSelectedTab(key); // Update selected tab in state when user selects a tab
    };
      
    // Create the menu items for the dropdown on mobile
    const menu = (
        <Menu onClick={(e) => handleDropdownSelect(e.key)}>
            {Array.from({ length: 11 }, (_, i) => {
                const id = String(i + 1);
                return (
                <Menu.Item key={id}>
                    {getTabLabel(id)}
                </Menu.Item>
                );
            })}
        </Menu>
    );
      
    return (
        <>  
            <div className="settings-page">

                <Flex className="inner-header-bar">  
                    <Title level={5} style={{ marginBottom: 0 }}>Settings</Title>
                    {isMobile && <span> <RightOutlined /> </span>}
                </Flex>

                <div className="container-fluid">
                     <Row gutter={[30, 0]}>
                        <Col span={24}>

                            {/* Mobile Dropdown and content */}
                            {isMobile ? (
                                <>
                                    <Dropdown overlay={menu} trigger={['click']} className="m-settings-dropdown">
                                        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                                            {getTabLabel(selectedTab)} <DownOutlined />
                                        </a>
                                    </Dropdown>
                                    
                                    {getTabContent(selectedTab)}
                                </>
                            ) : (
                                // Regular Vertical Tabs for Desktop
                                <Tabs
                                    activeKey={selectedTab} // Use selectedTab for desktop as well
                                    onChange={setSelectedTab} // Handle tab change on desktop
                                    defaultActiveKey="1"
                                    tabPosition="left"
                                    style={{
                                        height: '100%',
                                        flex: 1,  // Tabs fill the available space
                                    }}
                                    items={Array.from({ length: 11 }, (_, i) => {
                                        const id = String(i + 1);  // Tab keys start from 1
                                        return {
                                            label: getTabLabel(id),
                                            key: id,
                                            disabled: false,
                                            children: getTabContent(id),  // Use the content generator function
                                        };
                                    })}
                                />
                            )}

                        </Col>
                    </Row>
                </div>

            </div>
        </> 
    );
  
}


  