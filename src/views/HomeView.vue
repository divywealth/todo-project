<template>
  <div>
    <NavBar/>

    <div id="title">
      <h2>DASHBOARD</h2>
      <span>
        Group <font-awesome-icon icon="fa-solid fa-caret-down"/>
          <div>
            <ul>
              <li @click="$store.commit('byTitle')">By Title</li>
              <li @click="$store.commit('byPerson')">By Person</li>
            </ul>
          </div>
      </span>
    </div>

    <section id="todo-container">
      <Container/>
    </section>

    <div id="plus-background">
      <span id="plus" @click="$store.commit('Dialogue')"><font-awesome-icon icon="fa-solid fa-plus"/></span>
    </div>

    <div v-if="$store.state.showModal">
      <Modal/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/NavBar.vue'
import Container from '../components/Container.vue'
import Modal from '../components/Modal.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar, Container, Modal
  }
}
</script>

<style scoped>
h2 {
  color: #685f5f;
  font-family: sans-serif;
  padding: 20px 30px
}
#todo-container {
  padding: 50px 100px
}
#title {
  display: flex;
  align-items: center
}
#title span {
  color: #685f5f;
  font-weight: bold;
  font-family: sans-serif;
  cursor: pointer;
  font-size: 20px;
  transition:  5s
}
#title span:hover div{
  display: block;
  position: absolute;
  background: #ede5e5;
  margin-top: 5px;

}
#title span div {
  display: none;
  width: 100px;
  text-align: center
}
#title span div ul {

}
#title span div li {
  list-style: none;
  padding: 5px 0;
  color: #685f5f;
  font-size: 15px;
}
#title span div li:hover {
  background: white;

}
#plus-background {
  text-align: end;
  margin-right: 100px;


}
#plus {
  background: #4545f3;
  color: white;
  padding: 18px 20px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 20px 2px;
}


</style>
