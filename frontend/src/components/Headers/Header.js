/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Clock from './Clock';
import ChartCountry from './ChartCountry';
import ChartBrazil from './ChartBrazil';

const Header = () => {
    return (
        <>
        <div style={{marginTop: '-100px', backgroundColor: 'deepskyblue'}} className="header pb-8 pt-5 pt-md-8">
          <Container fluid>
            <Row>
            <Col className="col-sm-8 center"> 
                <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://www.flaticon.com/svg/static/icons/svg/2750/2750657.svg" height="100px"/>
                <p style={{color: 'white', fontSize: '50px', marginTop: '20px', marginBottom: '20px', textAlign: 'center'}}>Informações sobre a Covid-19</p>
                <Card className="card-stats mb-3 mb-xl-0" >
                <CardBody style={{borderRadius: '45px'}} >
            <Tabs onSelect={(index, label) => console.log(label)}>
                <Tab label={<span><img height="25px" src="https://www.flaticon.com/svg/static/icons/svg/814/814513.svg"/> Covid no mundo</span>}>
                <Card className="card-stats mb-3 mb-xl-0" >
                <CardBody style={{borderRadius: '45px'}} >
                    <ChartCountry />
                </CardBody>
                </Card>
                </Tab>
                <Tab label={<span><img height="20x" src="https://www.flaticon.com/svg/static/icons/svg/197/197386.svg"/> Covid no Brasil</span>}>
                    <Card className="card-stats mb-3 mb-xl-0" >
                <CardBody style={{borderRadius: '45px'}} >
                    <ChartBrazil />
                </CardBody>
                </Card>
               </Tab>
                <Tab label={<span><img height="20px" src="https://www.flaticon.com/svg/static/icons/svg/2361/2361884.svg"/> Créditos da API</span>}>
                <Card className="card-stats mb-3 mb-xl-0" >
                <CardBody style={{borderRadius: '45px'}} >
                    <br />
                    <input type="text" value="https://covid19-brazil-api.now.sh" id="api" name="api" size="28" disabled />
                    <br />
                </CardBody>
                </Card>
                </Tab>
                <Tab label={<span><img height="25px" src="https://cdn2.iconfinder.com/data/icons/business-271/135/50-512.png"/> Hora Atual</span>}>
                <Card className="card-stats mb-3 mb-xl-0" >
                <CardBody style={{borderRadius: '45px'}} >
                    <br />
                    <Clock />
                    <br />
                </CardBody>
                </Card>
                </Tab>

            </Tabs>
                </CardBody>
                </Card>
            </Col>
            </Row>
            <ToastContainer />
          </Container>   <br/><br/><br/><br/>
        </div>

        </>
    );
}

export default Header;
