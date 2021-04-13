import React from 'react'
import "./index.scss"
import { Menu, Dropdown, Button } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

export default function DropdownComponent(props) {
    return (
        <div className="dropDownComponent">
            {
                props.headers.map(val => {
                return (
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button>{val}</Button>
                    </Dropdown>
                )
                })
            }
        </div>
    )
}
