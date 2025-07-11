"use client"
import React from 'react'
import {Provider} from "react-redux";
import {store} from "@/redux/store";

function ReduxLayout({children}) {
    return (
        <>
          <Provider store={store}>
              {children}
          </Provider>
        </>
    )
}

export default ReduxLayout
