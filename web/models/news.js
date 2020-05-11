/* eslint-disable */
import { getInfo } from '@/api'
const getData = async ({ id }) => {
  return Promise.resolve({
    detail: mockData[id]
  })
}
export default {
  namespace: 'news',
  state: {
    detail: ''
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        detail: payload.detail
      }
    }
  },
  effects: {
    * getData({ payload }, { call, put }) {
      const data = yield call(getInfo, payload)
      yield put({
        type: 'save',
        payload: data
      })
    }
  }
}
/* eslint-enable */
