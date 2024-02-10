/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Card, Row, Col, Avatar, Button } from 'antd'
import { GlobalOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { Icon } from '../../../components/util-components/Icon'
import PageHeaderAlt from '../../../components/layout-components/PageHeaderAlt'
import Flex from '../../../components/shared-components/Flex'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/shared-components/Loading'
import { useParams } from 'react-router-dom'
import { DELAY } from '../../../redux/constants/App'

export const UserProfile = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, selectedUser } = useSelector((store) => store.app)

  const saveHandler = () => {
    dispatch({ type: DELAY })
    goBackHandler()
  }

  const goBackHandler = () => history.push('/app/clients/list')

  if (loading) return <Loading />

  const avatarSize = 128

  const bgLink = `/img/others/img-${Math.ceil(Math.random() * 6) + 11}.jpg`
  const avatarLink = `/img/avatars/thumb-${Number(id) % 15}.jpg`

  return (
    <>
      <PageHeaderAlt background={bgLink} cssClass="bg-primary" overlap>
        <div className="container text-center">
          <div className="py-5 my-md-5"></div>
        </div>
      </PageHeaderAlt>
      <Card>
        <Row justify="center">
          <Col sm={24} md={23}>
            <div className="d-md-flex">
              <div
                className="rounded p-2 bg-white shadow-sm mx-auto"
                style={{ marginTop: '-3.5rem', maxWidth: `${avatarSize + 16}px` }}
              >
                <Avatar shape="square" size={avatarSize} src={avatarLink} />
              </div>
              <div className="ml-md-4 w-100">
                <Flex alignItems="center" mobileFlex={false} className="mb-3 text-md-left text-center">
                  <h2 className="mb-0">{selectedUser?.name}</h2>
                  <div className="ml-md-3 mt-3 mt-md-0">
                    <Button size="medium" type="primary">
                      Follow
                    </Button>
                    <Button size="medium" className="ml-2">
                      Message
                    </Button>
                  </div>
                </Flex>
                <Row gutter="16">
                  <Col sm={24} md={8}>
                    <p className="mt-0 mr-3 text-muted text-md-left text-center">
                      {selectedUser?.company?.catchPhrase}
                    </p>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={12} sm={12} md={9}>
                        <Icon type={MailOutlined} className="text-primary font-size-md" />
                        <span className="text-muted ml-2">Email:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">{selectedUser?.email}</span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9}>
                        <Icon type={PhoneOutlined} className="text-primary font-size-md" />
                        <span className="text-muted ml-2">Phone:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">{selectedUser?.phone}</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={12} sm={12} md={9}>
                        <Icon type={HomeOutlined} className="text-primary font-size-md" />
                        <span className="text-muted ml-2">Address:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">
                          {selectedUser?.address?.city}, {selectedUser?.address?.street}, {selectedUser?.address?.suite}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={12} sm={12} md={9}>
                        <Icon type={GlobalOutlined} className="text-primary font-size-md" />
                        <span className="text-muted ml-2">Website:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">{selectedUser?.website}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <div className="ml-md-3 mt-3 mt-md-0">
        <Button type="primary" onClick={saveHandler}>
          Save
        </Button>
        <Button onClick={goBackHandler} className="ml-2">
          Back
        </Button>
      </div>
    </>
  )
}

export default UserProfile
