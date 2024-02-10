import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  TabletOutlined,
  FileTextOutlined
} from '@ant-design/icons'

import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const dashBoardNavTree = [
  {
    key: 'primary',
    path: `${APP_PREFIX_PATH}/primary`,
    title: 'sidenav.menu.primary',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'sidenav.menu.catalog',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'products',
            path: `${APP_PREFIX_PATH}/catalog/products`,
            title: 'sidenav.menu.products',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'categories',
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            title: 'sidenav.menu.categories',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: 'sidenav.menu.collections',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: 'sidenav.menu.combo',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}/clients`,
        title: 'sidenav.menu.clients',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'clientslist',
            path: `${APP_PREFIX_PATH}/clients/list`,
            title: 'sidenav.menu.clientslist',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'clientsgroups',
            path: `${APP_PREFIX_PATH}/clients/groups`,
            title: 'sidenav.menu.clientsgroups',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'dragdrop',
        path: `${APP_PREFIX_PATH}/dragdrop`,
        title: 'sidenav.menu.dragdrop',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}/banners`,
        title: 'sidenav.menu.banners',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'sidenav.menu.promocodes',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offlinespots',
        path: `${APP_PREFIX_PATH}/offlinespots`,
        title: 'sidenav.menu.offlinespots',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'addresses',
            path: `${APP_PREFIX_PATH}/offlinespots/addresses`,
            title: 'sidenav.menu.addresses',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}/offlinespots/geozones`,
            title: 'sidenav.menu.geozones',
            icon: ShopOutlined,
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'sidenav.menu.employees',
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'newsletters',
        path: `${APP_PREFIX_PATH}/newsletters`,
        title: 'sidenav.menu.newsletters',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  },

  {
    key: 'system',
    path: `${APP_PREFIX_PATH}/system`,
    title: 'sidenav.menu.system',
    icon: SettingOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'sidenav.menu.settings',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobileapp',
        path: `${APP_PREFIX_PATH}/mobileapp`,
        title: 'sidenav.menu.mobileapp',
        icon: TabletOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'sidenav.menu.logs',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [...dashBoardNavTree]

export default navigationConfig
