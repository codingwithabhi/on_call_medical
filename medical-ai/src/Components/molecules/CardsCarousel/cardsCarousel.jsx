import React, { Fragment } from 'react'
import "./index.scss"
import ImageCardContainer from "../../atoms/ImageCardContainer/index"
import { Carousel } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons"
import Media from "react-media";
import Small1 from "../../../images/small1.jpg";
import Small2 from "../../../images/small2.jpg";
import Small3 from "../../../images/small3.jpg";


export default function CardCarousel() {
    const cardCarouselRef = React.useRef(null);
    const nextArrow = () => {
        cardCarouselRef.current.next()
    }
    const prevArrow = () => {
        cardCarouselRef.current.prev()
    }
    const tempArr = [Small1, Small2, Small3]
    return (
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
            {matches => (
                <Fragment>
                    <div className="card-carousel-container">
                        <ArrowRightOutlined onClick={() => nextArrow()} />
                        <ArrowLeftOutlined onClick={() => prevArrow()} />
                        {
                            (matches.large || matches.medium) &&
                            <Carousel ref={cardCarouselRef} autoplay={true}>
                                <div className="card-carousel">
                                    {tempArr.map((url) => {
                                        return <ImageCardContainer large={true} imageurl={url} />
                                    })}
                                </div>
                            </Carousel>
                        }
                        {
                            matches.small &&
                            <Carousel ref={cardCarouselRef} autoplay={true}>
                                {tempArr.map((url) => {
                                    return <ImageCardContainer small={true} imageurl={url} />
                                })}
                            </Carousel>
                        }
                    </div>
                </Fragment>

            )}
        </Media>
    )
}
