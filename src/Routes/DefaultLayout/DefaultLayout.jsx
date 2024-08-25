import React from 'react'
import Header from '../../Shared/Common/Header'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
