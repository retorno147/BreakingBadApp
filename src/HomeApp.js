import React from 'react'
import { AppRouter } from './routers/AppRouter.js'
import { store } from './store/store'
import { Provider } from 'react-redux'

export const HomeApp = () => {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  )
}