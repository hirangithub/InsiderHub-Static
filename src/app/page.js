import { Button, Card, Col, Flex, Row, Space, Affix } from "antd";
import styles from './page.module.css';
import Avatar from "antd/es/avatar/avatar";
import {
  EllipsisOutlined,
  ShareAltOutlined
} from '@ant-design/icons';

export default function Home() {
  return (
    <>
      <Row>
          <Col span={24} className={styles.cover}>&nbsp;</Col>
      </Row>
      <Row className={styles.upper}>
          <Col span={12}>
              <Flex style={{ padding: '0 2rem', marginTop: '-2.5rem', gap: '1rem', alignItems: 'end' }}>  
                <Avatar shape="square" size={124} src="/avatar.jpg" />
                <div>
                  <h2>Golden Nuggest LC</h2>
                  <i>Crafting Soundscapes, Inspiring Connections</i>
                </div>
              </Flex>
          </Col>
          <Col span={12}>
            <Flex style={{ padding: '0 2rem', gap: '1rem', alignItems: 'end', justifyContent: 'end', height: '100%' }}> 
              <Button type="primary" size="large" style={{ padding: '0 1.5rem' }}>Subscribe</Button>
              <Button variant="outlined" shape="circle" icon={<ShareAltOutlined />} size="large" style={{ color: 'white', backgroundColor: 'transparent' }} />
              <Button variant="outlined" shape="circle" icon={<EllipsisOutlined />} size="large" style={{ color: 'white', backgroundColor: 'transparent' }} />
            </Flex>
          </Col>
      </Row>
      <Row>
          <Col span={24}>
            
              <div className={styles.container}>
                <Row gutter={[32, 0]}>
                  <Col span={15}>
                    <Flex style={{ width: '100%', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}> 
                        <h3>My Posts</h3>
                        <Button variant="outlined" shape="circle" icon={<EllipsisOutlined />} size="large" style={{ color: 'white', backgroundColor: 'transparent' }} />
                    </Flex>
                    <Flex style={{ width: '100%', flexDirection: 'column', gap: '1rem' }}> 
                        <Card bordered={false} style={{ width: '100%' }} className={styles.card2}>
                          Post content video type
                        </Card>
                        <Card bordered={false} style={{ width: '100%' }} className={styles.card2}>
                          Post content image type
                        </Card>
                        <Card bordered={false} style={{ width: '100%' }} className={styles.card2}>
                          Post content image type
                        </Card>
                        <Card bordered={false} style={{ width: '100%' }} className={styles.card2}>
                          Post content image type
                        </Card>
                        <Card bordered={false} style={{ width: '100%' }} className={styles.card2}>
                          Post content image type
                        </Card>
                    </Flex>

                  </Col>

                  <Col span={9} style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>

                      <Card bordered={false} style={{ width: '100%' }} className={styles.card}>
                        <h4>About Me</h4>
                        <p>Golden Nugget LC is more than just a band we're a powerhouse of energy, passion and musical excellence.
                            With roots in USA we've made it our mission to deliver unforgettable performances that blend electrifying melodies with hearfelt lyrics.</p>
                        <Space style={{ width: '100%', justifyContent: 'space-between', paddingTop: '1rem' }}>
                          <div>
                            <h3>50k</h3>
                            <label>Members</label>
                          </div>
                          <div>
                            <h3>3.5k</h3>
                            <label>Paid users</label>
                          </div>
                          <div>
                            <h3>46</h3>
                            <label>Posts</label>
                          </div>
                        </Space>
                      </Card>

                      <Affix offsetTop={10}>
                        <Card bordered={false} style={{ width: '100%', marginTop: '1rem' }} className={styles.card}>
                          <h4>My Collection</h4>
                          <Space style={{ width: '100%', flexDirection: 'column', gap: '.8rem', paddingTop: '.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                              <Avatar shape="square" src="/avatar.jpg" style={{ width: '10rem', height: '100%' }} />
                              <div>
                                <h5>Golden Nugget oil classic tshirt - gasoline.com</h5>
                                <label style={{ opacity: '.4' }}>LKR 1890.00</label>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                              <Avatar shape="square" src="/avatar.jpg" style={{ width: '10rem', height: '100%' }} />
                              <div>
                                <h5>Golden Nugget oil classic tshirt - gasoline.com</h5>
                                <label style={{ opacity: '.4' }}>LKR 2376.64</label>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                              <Avatar shape="square" src="/avatar.jpg" style={{ width: '10rem', height: '100%' }} />
                              <div>
                                <h5>Golden Nugget oil classic tshirt - gasoline.com</h5>
                                <label style={{ opacity: '.4' }}>LKR 4450.00</label>
                              </div>
                            </div>
                          </Space>
                        </Card>
                      </Affix>
                      
                      
                  </Col>
                </Row>
              </div>

          </Col>
      </Row>
    </>
  );
}
