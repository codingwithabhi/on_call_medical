import React from 'react'
import { Card } from "antd"
const { Meta } = Card;

export default function ImageCardContainer(props) {
    return (
            <Card
                hoverable
                style={{ width:  props.large ? "30%" : props.small && "100%" }}
                cover={<img alt="example" src={props.imageurl} />}
                >
                <Meta
                    title="Card title"
                    description="This is the description"
                    />
            </Card>
        
    )
}
