import { MoreOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'

import { AvatarStatus } from 'components/shared-components/AvatarStatus'

export const productsColumns = () => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      align: 'center',
      width: 80,
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'Product',
      dataIndex: 'title',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={record.image} shape="square" name={record.title} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.title.toLowerCase()
          b = b.title.toLowerCase()
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (category) => category.charAt(0).toUpperCase() + category.slice(1),
      sorter: {
        compare: (a, b) => {
          a = a.category
          b = b.category
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price) => `$${price}`,
      sorter: {
        compare: (a, b) => {
          a = a.price
          b = b.price
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      render: (rating) => `${rating.rate} (${rating.count} reviews)`,
      sorter: {
        compare: (a, b) => {
          a = a.rating.rate
          b = b.rating.rate
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button className="mr-2" icon={<MoreOutlined />} onClick={() => {}} size="small" />
          </Tooltip>
        </div>
      )
    }
  ]

  return columns
}
