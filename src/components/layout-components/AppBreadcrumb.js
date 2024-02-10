import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'

export const AppBreadcrumb = () => {
  const { pathname } = useLocation()
  const pathSnippets = pathname.split('/').filter((i) => i)

  const crumbs = pathSnippets.map((item, index) => {
    const href = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      href,
      title: item.charAt(0).toUpperCase() + item.slice(1)
    }
  })

  return <Breadcrumb items={crumbs} />
}

export default AppBreadcrumb
