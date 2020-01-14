import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body, Input, Item, Picker, Form, Button, Grid, Col, Row } from "native-base";

import { getCurrency } from '../Redux/Actions/currency';

const Home = () => {

    const dispatch = useDispatch();

    const formState = {
        amount: 1,
        kurs: '',
    }

    const [input, setInput] = useState(formState);
    const [selected, isSelected] = useState(false);

    const handleChange = onValueChange => e => {
        setInput({
            ...input,
            [onValueChange]: e.target.value,
        })
    }

    const handleClickButton = () => {
        isSelected(true);
    }

    const handleSubmit = () => {
        isSelected(false);
    }

    const onValueChange = (value) => {
        setInput({
            kurs: value
        });
    }

    const fetchCurrency = async () => {
        try {
            console.log (input)
            await dispatch(getCurrency());
        } catch (error) {
            console.log(error);
        }
    }

    const { currencyList } = useSelector(data => data.currency);

    useEffect(() => {
        fetchCurrency()
    }, []);

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
                                            <Input placeholder='Input amount'
                                                keyboardType='numeric'
                                                onChange={handleChange('amount')}
                                            />
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
                                            <Text>IDR  </Text><Text>=</Text><Text> {parseInt(currencyList.IDR * input.amount)}</Text>
                                        </Row>
                                    </Col>
                                    <Col style={{ backgroundColor: '#ffffff', height: 33, width: 250 }}>
                                        <Text>IDR - Indonesian Rupiah </Text>
                                    </Col>
                                    <Col style={{ backgroundColor: '#ffffff', height: 33, width: 250 }}>
                                        <Text>1 USD = IDR {currencyList.IDR}</Text>
                                        {console.log(input.amount)}
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
                {selected === false ?
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
                                                        selectedValue={input.kurs}
                                                        onValueChange={onValueChange.bind()}
                                                    >
                                                        <Picker.Item label="CAD" value="CAD" />
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
                                                    onClick={() => handleSubmit(value)}
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
                                        onClick={() => handleClickButton()}
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