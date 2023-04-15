import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    showModal: false,
    completeForm: '!Please fill in the field',
    completeField: false,
    title: '',
    person: '',
    dueDate: '',
    Todo: {},
    Todos: [
      {
        title: "Design a website",
        person: "Amaka",
        dueby: "1st jan 2020",
        status: "ongoing",
      },
      {
        title: "Code a bit",
        person: "precious onuora",
        dueby: "2nd jan 2020",
        status: "complete",
      },
      {
        title: "Adjust Schedule",
        person: "Divine",
        dueby: "1st jan 2021",
        status: "overdue",
      }
    ],
    
  },
  getters: {
  },
  mutations: {
    toggleDrawerOut(state) {
      state.drawer = !state.drawer
    },
    toggleDrawerIn(state) {
      state.drawer = false
    },
    byTitle(state) {
      state.Todos.sort((a,b) => a['title'] < b['title'] ? -1 : 1)
    },
    byPerson(state) {
      state.Todos.sort((a,b) => a['person'] < b['person'] ? -1 : 1)
    },
    Dialogue(state) {
      state.showModal = !state.showModal
    },
    addToProject(state) {
      state.Todo = {
        title: state.title,
        person: state.person,
        dueby: state.dueDate,
        status: "ongoing"
      }
      if (state.title == '' || state.person == '' || state.dueDate == ''){
        state.completeField = true
      }else {
        state.Todos.push(state.Todo)
        state.showModal = false
        state.title = ''
        state.person = ''
        state.dueDate = ''
        state.completeField = false
      }
    },
    removeTodo(state,index) {
      state.Todos.splice(index, 1)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
