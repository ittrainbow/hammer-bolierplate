import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd'
import { useDispatch } from 'react-redux'

import { DD_LOAD_FILE_SAGA } from '../../../redux/constants/DragDrop'

export const FileUpload = () => {
  const dispatch = useDispatch()

  const handleLoadFile = (e) => {
    dispatch({ type: DD_LOAD_FILE_SAGA, payload: e })
  }

  return (
    <Upload
      accept=".json"
      showUploadList={false}
      beforeUpload={(file) => {
        const reader = new FileReader()
        reader.onload = (e) => handleLoadFile(e)
        reader.readAsText(file)
        return false
      }}
    >
      <Button className="card-button" icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  )
}
