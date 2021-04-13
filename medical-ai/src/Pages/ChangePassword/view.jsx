import React from 'react'
import { Input, Card, Button, Row, Col } from 'antd';
import './index.scss'


export default function ChangePassword() {

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (

        <>
            <form className='ChangePasswordForm' onSubmit={handleSubmit}>
                <Card title="Change Password" style={{ "textAlign": 'center' }} bordered={false} >

                    <Row>
                        <Col span={12}>
                            <Input.Password placeholder="Old password" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Input.Password placeholder="New password" />
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            <Input.Password placeholder="Repeat New password" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col span={4}>
                        </Col>
                        <Col span={4}>
                        </Col>
                        <Col span={4}>
                            <Button type="primary" htmlType="submit">
                                Log-In
                            </Button>
                        </Col>
                    </Row>


                </Card>
            </form>

        </>
    )
}