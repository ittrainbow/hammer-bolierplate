import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import Logo from './Logo'
import NavPanel from './NavPanel'
import NavSearch from './NavSearch'
import { NAV_TYPE_TOP, SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from '../../constants/ThemeConstant'
import utils from 'utils'
import { TOGGLE_COLLAPSED_NAV, TOGGLE_MOBILE_NAV } from '../../redux/constants/Theme'

const { Header } = Layout

export const HeaderNav = (props) => {
  const dispatch = useDispatch()
  const { isMobile } = props
  const [searchActive, setSearchActive] = useState(false)
  const { navCollapsed, navType, headerNavColor, mobileNav, currentTheme } = useSelector((store) => store.theme)

  const onSearchClose = () => {
    setSearchActive(false)
  }

  const onToggle = () => {
    const type = isMobile ? TOGGLE_MOBILE_NAV : TOGGLE_COLLAPSED_NAV
    const payload = isMobile ? !mobileNav : !navCollapsed

    dispatch({ type, payload })
  }

  const isNavTop = navType === NAV_TYPE_TOP ? true : false
  const mode = () => {
    const color = headerNavColor || currentTheme === 'dark' ? '#00000' : '#ffffff'
    return utils.getColorContrast(color)
  }
  const navMode = mode()
  const getNavWidth = () => {
    if (isNavTop || isMobile) {
      return '0px'
    }
    if (navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`
    } else {
      return `${SIDE_NAV_WIDTH}px`
    }
  }

  useEffect(() => {
    if (!isMobile) {
      onSearchClose()
    }
  })

  return (
    <Header className={`app-header ${navMode}`} style={{ backgroundColor: headerNavColor }}>
      <div className={`app-header-wrapper ${isNavTop ? 'layout-top-nav' : ''}`}>
        <Logo logoType={navMode} />
        <div className="nav" style={{ width: `calc(100% - ${getNavWidth()})` }}>
          <div className="nav-left">
            <ul className="ant-menu ant-menu-root ant-menu-horizontal">
              {isNavTop && !isMobile ? null : (
                <li
                  className="ant-menu-item ant-menu-item-only-child"
                  onClick={() => {
                    onToggle()
                  }}
                >
                  {navCollapsed || isMobile ? (
                    <MenuUnfoldOutlined className="nav-icon" />
                  ) : (
                    <MenuFoldOutlined className="nav-icon" />
                  )}
                </li>
              )}
            </ul>
          </div>
          <NavPanel />
          <NavSearch active={searchActive} close={onSearchClose} />
        </div>
      </div>
    </Header>
  )
}
export default HeaderNav
