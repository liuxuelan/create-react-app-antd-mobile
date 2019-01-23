import React, { Component} from 'react'
import Slider from 'react-slick';
import map from 'lodash/map';
import { bannerImg } from '../../services/image'

import './header.scss'
import 'slick-carousel/slick/slick.less'
import 'slick-carousel/slick/slick-theme.less'
class Header extends Component{
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      appendDots: dots => (
        <div>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            margin:'13px'
          }}
        >
        </div>
      )
    };
    const bannerdata = [{
        address: bannerImg,
        href: 'www.baidu.com',
        onlyM: 'club_T_banner01'
      },{
        address: bannerImg,
        href: 'www.baidu.com',
        onlyM: 'club_T_banner01'
      },{
        address: bannerImg,
        href: 'www.baidu.com',
        onlyM: 'club_T_banner01'
      }
    ]
    let items = map(bannerdata, (item, index) => {
      return <div key={index}>
                <a href={item.href}><img src={`${item.address}`} alt="1"/></a> 
             </div>;
      });
    return (
      <div className="header">
        <Slider {...settings}>{items}</Slider>
      </div>
    )
  }
}

export default Header;