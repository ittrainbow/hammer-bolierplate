import React from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Drawer, Menu } from 'antd'
import ThemeConfigurator from './ThemeConfigurator'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_THEME_CONFIG_OPEN } from '../../redux/constants/Theme'

export const NavPanel = () => {
  const dispatch = useDispatch()
  const { themeConfigOpen } = useSelector((store) => store.theme)

  const handleToggle = () => dispatch({ type: TOGGLE_THEME_CONFIG_OPEN })

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="horizontal" onClick={handleToggle}>
          <SettingOutlined className="nav-icon mr-0" />
        </Menu.Item>
      </Menu>
      <Drawer title="Theme Config" placement="right" onClose={handleToggle} open={themeConfigOpen}>
        <ThemeConfigurator />
      </Drawer>
    </>
  )
}

export default NavPanel
