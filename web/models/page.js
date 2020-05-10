import { getData } from '@/api'
export default {
  namespace: 'index',
  state: {
    news: []
  },
  subscriptions: {
    setup({ history, dispatch }) { }
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    * getData({ payload }, { call, put }) {
      const data = yield call(getData, payload)
      yield put({
        type: 'save',
        payload: data
      })
    }
  }
}
