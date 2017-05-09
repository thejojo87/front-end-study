/**
 * Created by thejojo on 2017/5/9.
 */
import * as types from './mutations_type'

// state
export const state = {
  notes: [],
  activeNote: {},
  show: ''
}

export const mutations = {
  // 新增笔记
  [types.NEW_NOTE] (state) {
    var newNote = {
      id: +new Date(),
      title: '',
      content: '',
      favorite: false
    }
    state.note.push(newNote)
    state.activeNote = newNote
  }
}
