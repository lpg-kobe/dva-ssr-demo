/* eslint-disable */
import React from 'react'
import { connect } from 'dva'
import { Link } from 'react-router-dom'
function Header(props) {
  const { headerNav } = props
  return <div style={{ width: '100%', height: '40px', background: 'blue' }}>
    <img src="" alt="logo" />
    <nav style={{ float: 'right', width: '90px', textAlign: 'left' }}>
      {
        headerNav && headerNav.map(link => <Link to={link.path} key={link.path} style={{ color: '#fff' }}>{link.name}</Link>)
      }
    </nav>
  </div>
}
export default connect(null, null)(Header)
/* eslint-enable */
