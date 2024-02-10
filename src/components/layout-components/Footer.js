import React from 'react'
import { APP_NAME } from 'configs/AppConfig'
import { useSelector } from 'react-redux'

export default function Footer() {
  const { loading } = useSelector((store) => store.app)
  return (
    !loading && (
      <footer className="footer">
        <span>
          Copyright &copy; {`${new Date().getFullYear()}`} <span className="font-weight-semibold">{`${APP_NAME}`}</span>{' '}
          All rights reserved.
        </span>
      </footer>
    )
  )
}
