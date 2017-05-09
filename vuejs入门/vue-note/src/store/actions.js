/**
 * Created by thejojo on 2017/5/9.
 */

import * as types from './mutations_type'

export const newNote = ({ commit }) => {
  console.log('start newNote')
  commit(types.NEW_NOTE)
}
