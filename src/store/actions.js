import api from 'axios'
import Vue from 'vue'
import router from '../router'
import * as types from './types'

export default {
  UserLogin({
    commit
  }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout({
    commit
  }, data) {
    commit(types.LOGOUT)
  },
  UserName({
    commit
  }, data) {
    commit(types.USERNAME, data)
  }
}
