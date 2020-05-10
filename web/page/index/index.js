import React from 'react'
import { connect } from 'dva'
import './index.less'
import { Link } from 'react-router-dom'

function Index(props) {
  return (
    <div className='normal'>
      <div className='welcome' />
      <ul className='list'>
        {
          props.news && props.news.map(item => (
            <li key={item.id}>
              <div>區塊标题: {item.title}</div>
              <div className='toDetail'><Link to={`/news/${item.id}`}>点击查看详情</Link></div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Index.getInitialProps = async ({ store }) => {
  await store.dispatch({ type: 'index/getData', payload: { id: '' } })
}

export default connect(state => state.index)(Index)
