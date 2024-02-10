import { EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'

import { AvatarStatus } from 'components/shared-components/AvatarStatus'

export const usersColumns = (deleteUser, selectUser) => {
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      align: 'center',
      width: 80,
      sorter: (a, b) => a.id - b.id
    },
    {
      title: 'User',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={`/img/avatars/thumb-${(record.id % 15)}.jpg`} name={record.name} subTitle={record.email} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase()
          b = b.name.toLowerCase()
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase()
          b = b.username.toLowerCase()
          return a > b ? 1 : b > a ? -1 : 0
        }
      }
    },
    {
      title: 'Site',
      dataIndex: 'website',
      sorter: {
        compare: (a, b) => {
          a = a.website.toLowerCase()
          b = b.website.toLowerCase()
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
            <Button
              type="primary"
              size={128}
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => selectUser(elm.id)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button danger icon={<DeleteOutlined />} onClick={() => deleteUser(elm.id)} />
          </Tooltip>
        </div>
      )
    }
  ]

  return columns
}
