import React from 'react';

import { List, Avatar, Button, Skeleton, Row } from 'antd';
// import productsJson from '../asserts/product.json';
import axios from 'axios';
import _ from 'lodash';
import './CartPage.css'


export default class CartPage extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      productList:[]
    }
  }

  componentDidMount(){
    let productList=JSON.parse(localStorage.getItem("Cart")) || [];
    this.setState({productList: productList});
  }
  
  render(){
      return(
          <div>
            <Row  type="flex" justify="center" style={{paddingTop:"300px"}}>    
                   
            <List
                itemLayout="horizontal"
                dataSource={this.state.productList}
                renderItem={item => (
                  <List.Item >
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<h4>{item.name}</h4>}
                      description={
                      <p>
                          {item.description}
                          <br/>
                          price : {item.price}
                      </p>
                      }
                    />
                  </List.Item>
                )}
              />
            </Row>
            
          </div>
      )
  }

}