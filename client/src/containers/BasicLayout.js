import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackgroundImg from '../img/SOLKHRONlogo.png';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;


class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.params);
        return ( 
        <Layout>
            <Header style = {{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className = "logo" / >
            <Menu theme = "light" mode = "horizontal" defaultSelectedKeys = {['Home']}
            style = {{lineHeight:'64px'}}
            onClick = { this.linkTo } >
            <Menu.Item key = "1"> 
            <Link to="/">
            SOLKHRON
            </Link>
             </Menu.Item> 
            {/* <Menu.Item key = "2"> XXXXX </Menu.Item>  */}
            <SubMenu title={ <span className = "submenu-title-wrapper">PRODUCTS </span>}>
                <Menu.Item key = "setting:1" >
                    <Link to="/products/earth_kneading_cuff_01">
                    EARTH-KNEADING CUFF 01
                    </Link> 
                </Menu.Item> 
                <Menu.Item key = "setting:2">
                    <Link to="/products/earth_kneading_cuff_02">
                    EARTH-KNEADING CUFF 02
                    </Link>   
                </Menu.Item> 
                <Menu.Item key = "setting:3">
                    <Link to="/products/palm_cigarette_snuffer">
                    PALM CIGARETTE SNUFFER
                    </Link>    
                </Menu.Item>
               
                <Menu.Item key = "setting:4" > 
                    <Link to="/products/palmclasp">
                    PALMCLASP
                    </Link> 
                </Menu.Item> 
                {/* <Menu.Item key = "setting:5" > PLAM CIRGARETTE SNUFFER </Menu.Item> 
                <Menu.Item key = "setting:6" > PLAMCLASP </Menu.Item>  */}
            </SubMenu>
            <Menu.Item key = "4" > 
            <Link to="/cart">
            CART
            </Link>
             </Menu.Item>  
            <Menu.Item key = "5" > 
            <Link to="/about">
            ABOUT
            </Link>
             </Menu.Item> 
            </Menu> 
            </Header> 
            <Content style = {
                { padding: '0 0px', marginTop: 64 }
                
            }> {
                /* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb> */
            } <div style = {
                {    background: 'rgba(256,256,256)',
                     padding: 0, 
                     minHeight: 720 ,
                     backgroundImage: `url(${BackgroundImg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'contain',
                     backgroundRepeat: 'no-repeat'
                    }
            }> { this.props.children } 
            </div> 
            </Content> 
            <Footer style = {
                { zIndex: 1, width: '100%' }
            }>
            <Menu theme = "light"
            mode = "horizontal"
            style = {
                { lineHeight: '40px' }
            }
            //  selectedKeys={this.state.selectedKeys} 
            onClick = { this.linkTo } >
            <Menu.Item key = "1" > Instgram - > SOLKHRON </Menu.Item> 
            <Menu.Item key = "2" > Contact - > SOLKHRON @GMAIL.COM </Menu.Item> 
            <Menu.Item key = "3" > 2018 ALL RIGHT RESERVED BY SOLKHORN </Menu.Item> 
            </Menu> 
            </Footer> 
        </Layout>
        );


    }
}

export default BasicLayout;