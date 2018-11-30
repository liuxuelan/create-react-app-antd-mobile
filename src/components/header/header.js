import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';

import './index.less'

class Header extends Comment{
  render () {
    return (
      <div className="header">
        <Flex>
          <Flex.Item>小柿子App</Flex.Item>
        </Flex>
      </div>
    )
  }
}

export default Header;