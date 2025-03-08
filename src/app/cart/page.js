"use client"; // Ensure this runs as a Client Component
import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, Flex, Button, Image, Rate, Radio, Card, Space, InputNumber, Progress, Avatar, Tag } from "antd";
import Title from 'antd/es/typography/Title';
import {
    PlusOutlined,
    MinusOutlined,
    HomeOutlined,
    DollarOutlined,
    ReloadOutlined,
    SafetyOutlined,
    TruckOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';

export default function Cart() {
    const [isClient, setIsClient] = useState(false);
    const [gutter, setGutter] = useState([30, 0]);

    const handleResize = () => {
        const width = window.innerWidth;
    
        if (width < 576) {
          setGutter([8, 0]);
        } else if (width < 768) {
          setGutter([16, 0]);
        } else if (width < 992) {
          setGutter([20, 0]);
        } else if (width < 1200) {
          setGutter([20, 0]);
        } else {
          setGutter([30, 0]);
        }
      };

    useEffect(() => {
        setIsClient(true);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    if (!isClient) return null; // Avoid SSR rendering

    const handleKeyPress = (e) => {
        // Allow only numeric keys (0-9)
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const staticData = [
        { rating: 5, percentage: 95 },
        { rating: 4, percentage: 80 },
        { rating: 3, percentage: 15 },
        { rating: 2, percentage: 5 },
        { rating: 1, percentage: 1 }
    ];

    return (
        <>  
            <div className="product-detail">

                <Flex className="inner-header-bar" style={{ flexDirection: 'column' }}>  
                    <Breadcrumb
                        items={[
                            {
                                title: <a href="/">Golden Nugget LC</a>,
                            },
                            {
                                title: <a href="#">My Collection</a>,
                            },
                            {
                                title: 'Product detail',
                            }
                        ]}
                    />

                     <Row align="bottom">
                        <Col span={20}>
                            <Flex className="sub-title" style={{ flexDirection: 'column' }}>
                                <Title level={4} style={{ marginBottom: 0 }}>Trail Running Jacket Nike Windrunner</Title>
                                <label>Content goes here</label>
                            </Flex>
                        </Col>
                        <Col span={4} style={{ justifyItems: 'flex-end' }}>
                            <Flex className="cart-holder" style={{ flexDirection: 'row', justifyItems: 'flex-end' }}>
                                <ShoppingCartOutlined style={{ fontSize: '34px', fontWeight: 'normal' }} />
                                <div>
                                    <Tag>0</Tag>
                                    <label>Cart</label>
                                </div>
                            </Flex>
                        </Col>
                     </Row>
                </Flex>

                <div className="container-fluid">
                    <Row gutter={[30, 0]}>
                        <Col span={24}>

                            <Row className="product-detail-upper">
                                <Col
                                    xs={{ span: 24, order: 1 }}
                                    sm={{ span: 24, order: 1 }}
                                    md={{ span: 24, order: 1 }}
                                    lg={{ span: 24, order: 1 }}
                                    xl={{ span: 17, order: 1 }}
                                >
                                    <Row className="inner" gutter={gutter}>
                                        <Col 
                                             xs={{ span: 24, order: 1 }}
                                             sm={{ span: 24, order: 1 }}
                                             md={{ span: 12, order: 1 }}
                                             lg={{ span: 12, order: 1 }}
                                        >
                                            <Flex className="product-images" style={{ flexDirection: 'column', rowGap: '1rem' }}>
                                                <Image width={'100%'} src="/products/p-l1.jpg" />
                                                <Flex className='product-thumbs' style={{ columnGap: '1rem', justifyContent: 'space-between' }}>
                                                    <Image width={'100%'} src="/products/p-t1.jpg" preview={false} />
                                                    <Image width={'100%'} src="/products/p-t4.jpg" preview={false} className='active' />
                                                    <Image width={'100%'} src="/products/p-t3.jpg" preview={false} />
                                                    <Image width={'100%'} src="/products/p-t5.jpg" preview={false} />
                                                    <Image width={'100%'} src="/products/p-t2.jpg" preview={false} />
                                                </Flex>
                                            </Flex>
                                        </Col>
                                        <Col className='product-sub-detail'
                                            xs={{ span: 24, order: 2 }}
                                            sm={{ span: 24, order: 2 }}
                                            md={{ span: 12, order: 2 }}
                                            lg={{ span: 12, order: 2 }}
                                        >
                                            <Title level={3} style={{ marginBottom: 0 }}>LKR 2605.74</Title>
                                            <Flex className="discount-price" style={{ flexDirection: 'row', columnGap: '1rem' }}>
                                                <Title level={5}>LKR 7,860.12</Title>
                                                <Title level={5} className="value">49% off</Title>
                                            </Flex>
                                            <p>Golden Nugget oil classic tshirt - gasoline.com partnership special edition Men's Tshirts Plain Short Sleeve Tee Oversized T Shirt Casual Male Top</p>
                                            
                                            <Flex className="figure-reviews" style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '12px' }} />
                                                <label>4.7 Reviews</label>
                                                <label>25 Sold</label>
                                            </Flex>
                                            <hr />
                                            <Flex className="product-color" style={{ flexDirection: 'column' }}>
                                                <label>Color: White</label>
                                                <Flex vertical gap="middle">
                                                    <Radio.Group defaultValue="a" buttonStyle="solid">
                                                        <Radio.Button value="a">
                                                            <Image width={'100%'} src="/products/p-t5.jpg" preview={false} />
                                                        </Radio.Button>
                                                        <Radio.Button value="b">
                                                            <Image width={'100%'} src="/products/p-t2.jpg" preview={false} />
                                                        </Radio.Button>
                                                        <Radio.Button value="c">
                                                            <Image width={'100%'} src="/products/p-t1.jpg" preview={false} />
                                                        </Radio.Button>
                                                        <Radio.Button value="d">
                                                            <Image width={'100%'} src="/products/p-t4.jpg" preview={false} />
                                                        </Radio.Button>
                                                        <Radio.Button value="e">
                                                            <Image width={'100%'} src="/products/p-t3.jpg" preview={false} />
                                                        </Radio.Button>
                                                    </Radio.Group>
                                                </Flex>
                                            </Flex>
                                            <hr />
                                            <Flex className="product-size" style={{ flexDirection: 'column' }}>
                                                <label>Size: M(54-63kg)</label>
                                                <Flex vertical gap="middle">
                                                    <Radio.Group defaultValue="a" buttonStyle="solid">
                                                        <Radio.Button value="s">S (45-54kg)</Radio.Button>
                                                        <Radio.Button value="m">M (54-63kg)</Radio.Button>
                                                        <Radio.Button value="l">L (63-70kg)</Radio.Button>
                                                        <Radio.Button value="xl">XL (70-78kg)</Radio.Button>
                                                        <Radio.Button value="xxl">XXL (78-88kg)</Radio.Button>
                                                        <Radio.Button value="xxxl">XXXL (88-93kg)</Radio.Button>
                                                    </Radio.Group>        
                                                </Flex>
                                            </Flex>
                                            <hr />
                                            <Flex className="control-qty" style={{ flexDirection: 'column', position: 'relative' }}>
                                                <label>Quantity</label> 
                                                <Space nowrap> 
                                                    <Button shape="circle" icon={<MinusOutlined />} className="icon-button-border0" />
                                                    <InputNumber 
                                                        min={1} 
                                                        max={100000} 
                                                        defaultValue={1}
                                                        onKeyPress={handleKeyPress} // Prevent non-numeric input
                                                        controls={false} /> 
                                                    <Button shape="circle" icon={<PlusOutlined />} className="icon-button-border0" />
                                                </Space>
                                                <label className="note"><i>Max. 50 pcs/shopper</i></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '1rem', marginTop: '1rem' }}>
                                                <Button type="primary" size="large" style={{ width: '100%' }}>Buy now</Button>
                                                <Button type="default" variant="outlined" size="large" style={{ width: '100%' }}>Add to cart</Button> 
                                            </Flex> 
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    xs={{ span: 24, order: 2 }}
                                    sm={{ span: 24, order: 2 }}
                                    md={{ span: 24, order: 2 }}
                                    lg={{ span: 24, order: 2 }}
                                    xl={{ span: 6, order: 2 }}
                                >
                                    <Card className="card product-order-oveview">
                                        <Title level={5} style={{ marginBottom: 0 }}>Delivery options</Title>
                                        <Flex style={{ flexDirection: 'row', marginTop: '1rem', alignItems: 'baseline' }}>
                                            <HomeOutlined />
                                            <label>Western, Colombo 1-15, Colombo 01 - Fort <a href="#"><u>Change</u></a></label>
                                        </Flex>
                                        <Flex style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                            <TruckOutlined />
                                            <label>Standard <span>Guaranteed by 10-12 Mar</span></label>
                                        </Flex>
                                        <Flex style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                            <DollarOutlined /> 
                                            <label>Cash on Delivery Available</label>
                                        </Flex>
                                        <hr />
                                        <Title level={5} style={{ marginBottom: 0 }}>Return & Warranty</Title>
                                        <Flex style={{ flexDirection: 'row', marginTop: '1rem' }}>
                                            <ReloadOutlined />
                                            <label>14 days easy return</label>
                                        </Flex>
                                        <Flex style={{ flexDirection: 'row' }}>
                                            <SafetyOutlined />
                                            <label>6 Months Agent Warranty</label>
                                        </Flex>
                                    </Card>
                                </Col> 
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Card className="card product-description">
                                        <Title level={5}>Description</Title>
                                        <p>This item is on pre-order and will ship mid to late October. All other items purchased with this order will be held until that time.
                                            Exclusive tour item. Unisex black hooded pullover featuring the From Zero Linkin Park logo and "LINKIN PARK // FROM ZERO // WORLD TOUR // 2024" on front left chest with tour dates and From Zero art on back.</p>
                                        <Image src="/products/p-size.jpg" />
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Title level={5}>4.9/15 reviews</Title>
                                    <ul className="review-progress">
                                        <li>
                                            <Flex
                                                vertical
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}>
                                                <p level={5}>Overall rating</p>
                                                {staticData.map((item) => (
                                                    <Flex horizontal key={item.rating}>
                                                    <span>{item.rating}</span>
                                                    <Progress percent={item.percentage} size="small" />
                                                    </Flex>
                                                ))}
                                            </Flex>
                                        </li>
                                        <li className="review-stats">
                                            <div>
                                                <label>Fit:</label>
                                                <Title level={3} style={{ margin: 0 }}>4.9</Title>
                                            </div>
                                            <div>
                                                <label>Quality:</label>
                                                <Title level={3} style={{ margin: 0 }}>4.8</Title>
                                            </div>
                                            <div>
                                                <label>Value for money:</label>
                                                <Title level={3} style={{ margin: 0 }}>4.9</Title>
                                            </div>
                                        </li>
                                    </ul>
                                    <Space className="review-list">
                                        <ul className='list'>
                                            <li>
                                                <Space direction="horizontal" size={8}>
                                                    <Avatar size={38} src="/avatar.jpg" />
                                                    <Space direction="vertical" style={{ rowGap: 0 }}>
                                                        <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}> Olivia</Title>
                                                        <label className="lbl-username">1 day ago</label>
                                                    </Space>
                                                </Space>   
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <p>Color:SHDX1067, Size:3XL</p>
                                                <p>Arrived a week ahead of schedule. The product is very different from the site. But the cost benefit I'm Satisfied</p>
                                            </li>
                                            <li>
                                                <Space direction="horizontal" size={8}>
                                                    <Avatar size={38} src="/avatar.jpg" />
                                                    <Space direction="vertical" style={{ rowGap: 0 }}>
                                                        <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}> Farrah Rob</Title>
                                                        <label className="lbl-username">3 days ago</label>
                                                    </Space>
                                                </Space>   
                                                <Rate defaultValue={5} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <p>Color:SHDX1067, Size:M</p>
                                                <p>Oversized and squarish so order your normal size</p>
                                            </li>
                                            <li>
                                                <Space direction="horizontal" size={8}>
                                                    <Avatar size={38} src="/avatar.jpg" />
                                                    <Space direction="vertical" style={{ rowGap: 0 }}>
                                                        <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}> Pasindu Rupasinghe</Title>
                                                        <label className="lbl-username">14 days ago</label>
                                                    </Space>
                                                </Space>   
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <p>Color:SHDX1067, Size:S</p>
                                                <p>The image they use to sell that shirt doesn't match with the one I got. This a pale copy and I will not wear it.</p>
                                            </li>
                                            <li>
                                                <Space direction="horizontal" size={8}>
                                                    <Avatar size={38} src="/avatar.jpg" />
                                                    <Space direction="vertical" style={{ rowGap: 0 }}>
                                                        <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}> Olivia</Title>
                                                        <label className="lbl-username">3 weeks ago</label>
                                                    </Space>
                                                </Space>   
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <p>Color:SHDX1067, Size:3XL</p>
                                                <p>Arrived a week ahead of schedule. The product is very different from the site. But the cost benefit I'm Satisfied</p>
                                            </li>
                                            <li>
                                                <Space direction="horizontal" size={8}>
                                                    <Avatar size={38} src="/avatar.jpg" />
                                                    <Space direction="vertical" style={{ rowGap: 0 }}>
                                                        <Title level={5} style={{ margin: 0, lineHeight: '100%', fontWeight: 'normal' }}> Olivia</Title>
                                                        <label className="lbl-username">1 month ago</label>
                                                    </Space>
                                                </Space>   
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <p>Color:SHDX1067, Size:3XL</p>
                                                <p>Arrived a week ahead of schedule. The product is very different from the site. But the cost benefit I'm Satisfied</p>
                                            </li>
                                        </ul>    
                                        <Button type="default" variant="outlined" style={{ marginTop: '.5rem' }}>View all 12 reviews</Button>  
                                    </Space>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col span={24}>
                                    <Title level={5} style={{ marginTop: '1rem', '@media (min-width: 990px)': { marginTop: '2rem' } }}>More to love</Title>
                                    <ul className='list-similar-products'>
                                        <li className='product-item'>
                                            <Image width={'100%'} src="/products/p-1.jpg" />
                                            <label className='p-title'>Men's 100% cotton summer loose size Creative Graphic printed slim fit</label>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <span style={{ opacity: .5 }}>50+ Sold</span>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem', marginBottom: '.4rem' }}>
                                                <label>LKR 8,900.00</label>
                                                <label style={{ opacity: .5 }}><s>LKR 5,680.12</s></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.2rem' }}>
                                                <Tag>Sale</Tag>
                                                <label>-80%</label>
                                            </Flex>
                                        </li>
                                        <li className='product-item'>
                                            <Image width={'100%'} src="/products/p-2.jpg" />
                                            <label className='p-title'>POLO Shirt Fashion Breathable Comfortable Summer Versatile Top</label>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <span style={{ opacity: .5 }}>50+ Sold</span>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem', marginBottom: '.4rem' }}>
                                                <label>LKR 2,375.54</label>
                                                <label style={{ opacity: .5 }}><s>LKR 2,860.12</s></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.2rem' }}>
                                                <Tag>Sale</Tag>
                                                <label>-54%</label>
                                            </Flex>
                                        </li>
                                        <li className='product-item'>
                                            <Image width={'100%'} src="/products/p-5.jpg" />
                                            <label className='p-title'>2025 Outdoor walking training tennis shoes</label>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <span style={{ opacity: .5 }}>50+ Sold</span>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem', marginBottom: '.4rem' }}>
                                                <label>LKR 12,150.99</label>
                                                <label style={{ opacity: .5 }}><s>LKR 15,860.99</s></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.2rem' }}>
                                                <Tag>Sale</Tag>
                                                <label>-72%</label>
                                            </Flex>
                                        </li>
                                        <li className='product-item'>
                                            <Image width={'100%'} src="/products/p-4.jpg" />
                                            <label className='p-title'>Street Sunshade Black Cap Men and Women Couple White Internet Red Hat</label>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <span style={{ opacity: .5 }}>50+ Sold</span>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem', marginBottom: '.4rem' }}>
                                                <label>LKR 960.00</label>
                                                <label style={{ opacity: .5 }}><s>LKR 1560.00</s></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.2rem' }}>
                                                <Tag>Sale</Tag>
                                                <label>-20%</label>
                                            </Flex>
                                        </li>
                                        <li className='product-item'>
                                            <Image width={'100%'} src="/products/p-3.jpg" />
                                            <label className='p-title'>Workout Running Gym Fitness Sports Trousers Streetwear Trousers S-3XL</label>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem' }}>
                                                <Rate defaultValue={4} allowHalf disabled style={{ fontSize: '10px' }} />
                                                <span style={{ opacity: .5 }}>30+ Sold</span>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.5rem', marginBottom: '.4rem' }}>
                                                <label>LKR 5,489.50</label>
                                                <label style={{ opacity: .5 }}><s>LKR 4,860.00</s></label>
                                            </Flex>
                                            <Flex style={{ flexDirection: 'row', columnGap: '.2rem' }}>
                                                <Tag>Sale</Tag>
                                                <label>-35%</label>
                                            </Flex>
                                        </li>
                                    </ul>                
                                </Col>
                            </Row>                         
                        </Col>
                    </Row>
                </div>

            </div>
        </>

    );
  
}