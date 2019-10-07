import React from 'react';
import { Descriptions, Row, Col, Card, Button } from 'antd';
// import productsJson from '../asserts/product.json';
import axios from 'axios';
import _ from 'lodash';
import './ProductsPage.css'

export default class HomePage extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            APIURL : 'http://www.mocky.io/v2/5d9af6cc3200005b002ae465',
            products : [],
            selectedProduct : {
                img_src: "Cigarette_Snuffer_Ring_with_hand.jpg"
            },
            currentPath :{

            },
            isSelected:false
        };
    }
    checkThisProductisExist=()=>{
        let productList=JSON.parse(localStorage.getItem("Cart")) || [];
        if(_.filter(productList, {"id": this.state.selectedProduct.id})){
            this.setState({isSelected: true});
        }else{
            this.setState({isSelected: false});
        }
    }

    componentDidMount(){
        console.log(this.state.selectedProduct);
        axios.get(this.state.APIURL).then(res=>{
            console.log(res.data);
            this.setState({products: res.data});
            let path =  window.location.pathname.split('/')[2];
            this.setState({currentPath: path}); 
            this.setState({
                selectedProduct : _.filter(this.state.products, {'id': path})[0]
            });
        });
        this.checkThisProductisExist();
    }

    componentDidUpdate(prevProps) {
        //this.checkThisProductisExist();
        console.log(this.state.selectedProduct);
        if (this.state.currentPath !== window.location.pathname.split('/')[2]) {
            axios.get(this.state.APIURL).then(res=>{
                console.log(res.datac);
                this.setState({products: res.data});
                let path =  window.location.pathname.split('/')[2];
                this.setState({currentPath: path}); 
                this.setState({selectedProduct : _.filter(this.state.products, {'id': path})[0]});
                
            });
        }
        
      }

    
    onItemClick=()=>{
        let productList=JSON.parse(localStorage.getItem("Cart")) || [];
        console.log(productList);
        if(this.state.isSelected){
            productList = _.reject(productList, {"id": this.state.selectedProduct.id});
        }else{
            productList.push(this.state.selectedProduct);    
        }
       
        localStorage.setItem("Cart", JSON.stringify(productList));
        this.setState({isSelected:!this.state.isSelected});
    }
    render(){
        let path =  window.location.pathname.split('/')[2];
        
        // ../img/${this.state.selectedProduct.img_src}
        console.log(`../img/${this.state.selectedProduct}`);
        let imgpath = require(`../img/${this.state.selectedProduct.img_src}`);
        return(
            <div>
                <Row  type="flex" justify="center" style={{paddingTop:"200px"}}>    
                    <Col span={2}></Col>
                    <Col span={6}>
                    <img src={imgpath} height="330" width="330"></img>
                    </Col>
                    <Col span={6} className="product_info" key={this.state.selectedProduct.id}>
                        <h2>{this.state.selectedProduct.name}</h2>
                        <Card className="product_card">
                            <p>
                                {`Price :${this.state.selectedProduct.price_unit} ${this.state.selectedProduct.price}`}
                            </p>
                            <p>
                                {`Material : ${this.state.selectedProduct.material}`}
                            </p>
                            <p
                                key= {this.state.selectedProduct.description}
                            > 
                                {this.state.selectedProduct.description}
                            </p>
                            <p
                                key = {this.state.selectedProduct.inform}
                            >
                                {this.state.selectedProduct.inform}
                            </p>
                            <p
                                key = {this.state.selectedProduct.customize}
                            >
                                {this.state.selectedProduct.customize}
                            </p>
                        </Card>
                        {/* {/* <p className="description"> */}
                        
                        <p> 
                        <Button 
                        type="primary" 
                        block 
                        onClick={this.onItemClick}>
                        {this.state.isSelected?'ADDED':'ADD TO CART'}
                        </Button></p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row></Row>
            </div>
        )
    }
}