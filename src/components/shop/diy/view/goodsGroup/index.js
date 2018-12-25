import React, { Component } from "react";
import styles from "./index.css";
import Image from "@/components/defaultImage/index";
import { View } from "@/components/flexView";
import { Button, Carousel } from "antd";
//
// type Props = {
//     data: GoodsDataType,
//     options: GoodsOptionsType
// }
// type State = {}
export default class Index extends Component {
    render() {
        const { data, options } = this.props
        const { layout_type } = options
        return (
            <div className={`${styles.goodsPhoneWarp} ${styles.groupViewWarp}`}>
                {
                    layout_type === 5 ? this.carousel(data) :
                        data.map((item, index) => {
                            if (layout_type === 1) {
                                return this.big(item, index)
                            } else if (layout_type === 2) {
                                return this.small(item, index)
                                } else if (layout_type === 3) {
                                    return this.oneBigTwoSmall(item, index)
                            } else if (layout_type === 4) {
                                return this.list(item, index)
                            }
                        })
                }
            </div>
        )
    }
    // : {
    //     img: string,
    //     title: string,
    //     market_price: number,
    //     price: number,
    // }
    small(item, index) {
        const imgWidth = (375 - 18 - 2) / 2 + 'px'
        return (
            <View
                className={styles.smallWarp}
                key={index}
                style={{ width: imgWidth, marginRight: index % 2 === 0 ? '6px' : 0 }}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                        style={{ width: imgWidth, height: imgWidth }}
                        type="samll_img"
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <p className={styles.smallPrice} style={{ fontSize: 14 }}>
                                2人团 ￥
                            </p>
                            <p className={styles.smallPrice}>
                                {item.price}
                            </p>
                        </View>
                        <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
                            已拼888件
                        </p>
                    </View>
                </View>
            </View>
        )
    }
    // : {
    //     img: string,
    //     title: string,
    //     market_price: number,
    //     price: number,
    // }
    big(item, index) {
        return (
            <View
                className={styles.bigWarp}
                key={index}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                        type="big_img"
                        style={{height: 375}}
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <p className={styles.smallPrice} style={{ fontSize: 14 }}>
                                2人团 ￥
                            </p>
                            <p className={styles.smallPrice}>
                                {item.price}
                            </p>
                        </View>
                        <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
                            已拼888件
                        </p>
                    </View>
                </View>
            </View>
        )
    }
    // : {
    //     img: string,
    //     title: string,
    //     market_price: number,
    //     price: number,
    // }
    oneBigTwoSmall(item, index) {
        const imgWidth = (375 - 18 - 2) / 2 + 'px'
        return (
            <View
                key={index}
                style={{
                    width: `${
                        (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : '100%'
                    }`,
                    marginRight: `${
                        (index + 1) % 3 === 2 ? '6px' : '0'
                    }`
                }}
            >
                <View className={styles.smallImgWarp}>
                    <Image
                        src={item.img}
                        type={index!==0 ? "samll_img" : "big_img"}
                        style={{
                            width: `${
                                (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : '100%'
                            }`,
                            height: `${
                                (index + 1) % 3 === 0 || (index + 1) % 3 === 2 ? imgWidth : '375px'
                            }`,
                        }}
                    />
                </View>
                <View className={styles.smallBot}>
                    <p className={styles.smallTitle}>{item.title}</p>
                    <p className={styles.smallPrice}>
                        {/*<span>￥{item.market_price}</span>*/}
                        ￥{item.price}
                    </p>
                </View>
            </View>
        )
    }
    // item: {
    //     img: string,
    //     title: string,
    //     market_price: number,
    //     price: number,
    // }
    list(item, index) {
        return (
            <View
                className={styles.listWarp}
                key={index}
            >
                <View className={styles.listImgWarp}>
                    <Image
                        src={item.img}
                        type="list_img"
                        style={{width: 75, height: 75}}
                    />
                </View>
                <View className={styles.listRight}>
                    <p className={styles.listTitle}>{item.title}</p>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View>
                            <p className={styles.smallPrice} style={{ fontSize: 14, color: '#999' }}>
                                2人团 已拼888件
                            </p>
                            <p className={styles.listPrice}>
                                ￥{item.price}
                                <span className={styles.marketPrice}>￥{item.market_price}</span>
                            </p>
                        </View>
                        <Button type="primary">去开团</Button>
                    </View>
                </View>
            </View>
        )
    }
    carousel(data) {
        // 三个一组
        let result = [];
        for (var i = 0, len = data.length; i < len; i += 3) {
            result.push(data.slice(i, i + 3));
        }
        // console.log(result);
        // return (
        //     <View style={{width: '100%'}}>
        //         <Carousel afterChange={()=>{}} dots={true} >
        //             <div style={{backgroundColor: '#364d79', width: '100%'}}><h3>1</h3></div>
        //             <div style={{backgroundColor: '#364d79', width: '100%'}}><h3>2</h3></div>
        //             <div style={{backgroundColor: '#364d79', width: '100%'}}><h3>3</h3></div>
        //             <div style={{backgroundColor: '#364d79', width: '100%'}}><h3>4</h3></div>
        //         </Carousel>
        //     </View>
        // )
        return (
            <View style={{ width: '100%' }}>
                <Carousel
                    dotsClass={`slick-dots carousel-dot`}
                >
                    {
                        result.map((item, i) => {
                            if (i < 3) {
                                return (
                                    <View key={i} className={styles.carouselItem}>
                                        {
                                            item.map((childItem, j) => {
                                                return (
                                                    <View key={j} style={{ flex: 1, alignItems: 'center', maxWidth: '33.33%' }}>
                                                        <View style={{width: '94%',}}>
                                                            <View className={`${styles.smallImgWarp} ${styles.carouselImgWarp}`}>
                                                                <Image
                                                                    src={childItem.img}
                                                                    type="carousel_img"
                                                                    style={{height: 106}}
                                                                />
                                                                <p className={styles.carouselGroup}>
                                                                    2人团
                                                                </p>
                                                            </View>
                                                            <View style={{alignItems: 'center',}}>
                                                                <p className={styles.listPrice} style={{marginTop: 4}}>
                                                                    ￥<strong>{childItem.price}</strong>
                                                                </p>
                                                                <p className={styles.listTitle}>{childItem.title}</p>
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                )
                            }
                        })
                    }
                </Carousel>
            </View>
        )
    }
}