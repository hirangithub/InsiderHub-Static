import { AntdRegistry } from '@ant-design/nextjs-registry';
import LeftBar from "@/components/LeftBar";
import { Layout } from 'antd';
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import "./globals.css";

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  borderRight: '1px solid #27272A',
  backgroundColor: '#09090B'
};

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        
          <AntdRegistry>
          
                <Layout className="layout-wrapper">

                    <Sider trigger={null} style={siderStyle}>
                      <Image
                        src="/logo.png"
                        alt="InsiderHub"
                        width={100}
                        height={30}
                        style={{ marginLeft: '1rem', marginTop: '2rem', marginBottom: '1.5rem' }}
                      />
                      <LeftBar />
                    </Sider>

                    <Layout style={{ backgroundColor: '#09090B' }}>
                      <Content style={{ margin: '0', minHeight: '100vh', overflow: 'initial', color: 'white' }}>
                        {children}
                      </Content>
                    </Layout>

                </Layout>

          </AntdRegistry>
      </body>
    </html>
  );
}


