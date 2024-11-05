import React, { ReactNode } from 'react'
import Header from '../components/modules/Header/Header'
import Headersm from '../components/modules/Header/Headersm'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
    <div className="hidden lg:flex">
        <Header></Header>
      </div>
      <div className="flex lg:hidden">
        <Headersm></Headersm>
      </div>
      {children}
    </>
  )
}
