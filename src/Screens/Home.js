import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body, Input, Item, Picker, Form, Button, Grid, Col, Row } from "native-base";

const Home = () => {

    const [kurs, setKurs] = useState();
    const [selected, isSelected] = useState(false);

    const handleClickButton = () => {
        console.log('Halo')
        isSelected(true);
    }
    
    const handleSubmit = () => {
        console.log('Halo Submit')
        isSelected(false);
    }

    const onValueChange = (value) => {
        setKurs({
            selected: value
        });
    }

    

    return (
        <Container>
            <Header />
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text>USD - United States Dollars</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Grid>
                                <Col style={{ backgroundColor: '#ffffff', height: 30, width: 100, flexDirection: 'row' }}>
                                    <Row style={{ backgroundColor: '#ffffff', height: 30, width: 50 }}>
                                        <Text>USD</Text>
                                    </Row>
                                    <Row style={{ alignItems: 'flex-end', backgroundColor: 'white', height: 30, width: 200 }}>
                                        <Item regular style={{ height: 30, width: 250 }}>
                                            <Input placeholder='Input amount' />
                                        </Item>
                                    </Row>
                                </Col>
                            </Grid>

                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem bordered>
                        <Body>
                            <Grid>
                                <Col style={{ backgroundColor: '#ffffff', height: 99, width: 250 }}>
                                    <Col style={{ backgroundColor: '#ffffff', height: 30, width: 100, flexDirection: 'row' }}>
                                        <Row style={{ backgroundColor: '#ffffff', height: 30, width: 120 }}>
                                            <Text>IDR</Text>
                                        </Row>
                                        <Row style={{ alignContent: 'flex-end', backgroundColor: 'white', height: 30, width: 120 }}>
                                            <Text>IDR = 345,00,0,</Text>
                                        </Row>
                                    </Col>
                                    <Col style={{ backgroundColor: '#ffffff', height: 33, width: 250 }}>
                                        <Text>IDR - Indonesian Rupiah </Text>
                                    </Col>
                                    <Col style={{ backgroundColor: '#ffffff', height: 33, width: 250 }}>
                                        <Text>1 USD = IDR 34, 450,45</Text>
                                    </Col>
                                </Col>
                                <Col style={{ height: 100, width: 50 }}>
                                    <Button style={{ height: 100, width: 50 }}>
                                        <Text> (-) </Text>
                                    </Button>
                                </Col>
                            </Grid>
                        </Body>
                    </CardItem>
                </Card>
                {selected === true ?
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Content>
                                    <Grid>
                                        <Col style={{ backgroundColor: '#ffffff', height: 35, width: 300, flexDirection: 'row' }}>
                                            <Row style={{ backgroundColor: '#ffffff', height: 33, width: 200 }}>
                                                <Form>
                                                    <Picker
                                                        mode="dropdown"
                                                        placeholder="Add New Currencies"
                                                        placeholderStyle={{ color: "#2874F0" }}
                                                        note={false}
                                                        style={{ width: 200 }}
                                                        selectedValue=''
                                                    //   onValueChange={this.onValueChange.bind(this)}
                                                    >
                                                        <Picker.Item label="CAD" value="" />
                                                        <Picker.Item label="IDR" value="IDR" />
                                                        <Picker.Item label="GBP" value="GBP" />
                                                        <Picker.Item label="CHF" value="CHF" />
                                                        <Picker.Item label="SGD" value="SGD" />
                                                        <Picker.Item label="INR" value="INR" />
                                                        <Picker.Item label="MYR" value="MYR" />
                                                        <Picker.Item label="JPY" value="JPY" />
                                                        <Picker.Item label="KRW" value="KRW" />
                                                    </Picker>

                                                </Form>
                                            </Row>
                                            <Row>
                                                <Button style={{ alignContent: 'flex-end', height: 35, width: 120 }} 
                                                    onClick={()=>handleSubmit()}
                                                >
                                                    <Text> Submit </Text>
                                                </Button>
                                            </Row>
                                        </Col>
                                    </Grid>
                                </Content>
                            </Body>
                        </CardItem>
                    </Card>
                    :
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Content>
                                    <Button style={{ alignContent: 'flex-end', height: 35, width: 300 }}
                                        onClick={()=>handleClickButton()}
                                    >
                                        <Text> (+) Add New Currencies </Text>
                                    </Button>
                                </Content>
                            </Body>
                        </CardItem>
                    </Card>
                }
            </Content>
        </Container >
    );
}

export default Home;