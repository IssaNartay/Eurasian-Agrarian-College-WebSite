import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    has_loading: null,
    studentApply: [],
    studentPay: [],
    imagePhoto: null,
    imageAttestat: null
  },
  mutations: {
    set_has_loading: (state, val) => (state.has_loading = val),
    SET_STUDENT_APPLY(state, payload) {
      state.studentApply.push(payload);
    },
    SET_STUDENT_PAY(state, payload) {
      state.studentPay.push(payload);
    },
    SET_IMAGE_PHOTO(state, imagePhoto) {
      state.imagePhoto = imagePhoto;
    },
    SET_IMAGE_ATTESTAT(state, imageAttestat) {
      state.imageAttestat = imageAttestat;
    }
  },
  actions: {
    SET_STUDENT_APPLY({ commit }, payload) {
      console.log(payload);
      commit("SET_STUDENT_APPLY", payload);
    },
    SET_STUDENT_PAY({commit}, payload) {
      console.log(payload);
      commit("SET_STUDENT_PAY", payload);
    },
    SAVE_IMAGE_PHOTO({ commit }, imagePhoto) {
      commit('SET_IMAGE_PHOTO', imagePhoto);
    },
    SAVE_IMAGE_ATTESTAT({ commit }, imageAttestat) {
      commit('SET_IMAGE_ATTESTAT', imageAttestat);
    }

  },
  getters: {
    STUDENT_APPLY(state) {
      return state.studentApply;
    },
    STUDENT_PAY(state) {
      return state.studentPay
    }
  },
});
