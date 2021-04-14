import React from 'react'
import { Input, Card, Button, Row, Col } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import './index.scss'


export default function Login() {

    return (

        <>
            <form className='LoginForm'>
                <Card title="Login Form" style={{"textAlign":'center'}} bordered={false} >
                    <Row>
                        <Col span={12}>
                            <Input placeholder="Enter your username" prefix={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Input.Password placeholder="input password" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={4}>
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" >Log-In</Button>
                        </Col>
                    </Row>


                </Card>
            </form>

        </>
    )
}