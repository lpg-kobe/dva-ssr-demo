
/* eslint-disable */
import React from 'react'
import '@/assets/common.less'
import './index.less'
import { Link } from 'react-router-dom'
import serialize from 'serialize-javascript'
import Header from '@/layout/header'
import Footer from '@/layout/footer'

const commonNode = props => (
  props.children ? [<Header {...props} key={'header'}></Header>, props.children, <Footer key={'footer'}></Footer>]
    : ''
)

const Layout = (props) => {
  if (__isBrowser__) {
    return commonNode(props)
  } else {
    const { serverData } = props.layoutData
    const { injectCss, injectScript } = props.layoutData.app.config
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='theme-color' content='#000000' />
          <title>React App</title>
          {
            injectCss && injectCss.map(item => <link rel='stylesheet' href={item} key={item} />)
          }
        </head>
        <body>
          <div id='app'>{commonNode(props)}</div>
          {
            serverData && <script dangerouslySetInnerHTML={{
              __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(serverData)}`
            }} />
          }
          <div dangerouslySetInnerHTML={{
            __html: injectScript && injectScript.join('')
          }} />
        </body>
      </html>
    )
  }
}

export default Layout
/* eslint-enable */
