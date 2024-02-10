import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loading from 'components/shared-components/Loading'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import UserProfile from './clients/UserProfile.js'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home.js`))} />
        <Route
          path={`${APP_PREFIX_PATH}/catalog/products`}
          component={lazy(() => import(`./products/ProductsList.js`))}
        />
        <Route path={`${APP_PREFIX_PATH}/catalog`} component={lazy(() => import(`./home/404.js`))} />
        <Route path={`${APP_PREFIX_PATH}/dragdrop`} component={lazy(() => import(`./dragdrop/DragDrop.js`))} />
        <Route path={`${APP_PREFIX_PATH}/clients/list`} component={lazy(() => import(`./clients/UsersList.js`))} />
        <Route path={`${APP_PREFIX_PATH}/clients/groups`} component={lazy(() => import(`./home/404.js`))} />
        <Route path={`${APP_PREFIX_PATH}/clients/:id`} component={UserProfile} />
        <Route path={APP_PREFIX_PATH} component={lazy(() => import(`./home/404.js`))} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews)
