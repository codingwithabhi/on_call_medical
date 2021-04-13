import React from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row,Anchor } from 'antd';
import "./index.scss";

const logoOnCall = require("../../../images/logo.png").default


export default function Header() {

    return (
        <PageHeader
            className="site-page-header"
            avatar={{src: logoOnCall}}
            style={{backgroundColor:"#79BAC1"}}
            extra={[
                <a href="/dashboard/index/">
                    <Button type="primary">Dashboard</Button>
                </a>
            ]}
        />
    )
}
