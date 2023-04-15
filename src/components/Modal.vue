<template>
  <div id="backdrop"  @click.self="$store.commit('Dialogue')">
      <div id="Modal">
        <h3>Add a New Project</h3>
        <form>
            <input type="text" placeholder="Add title" v-model="$store.state.title" required>
            <input type="text" placeholder="Add person" v-model="$store.state.person" required>
            <input type="date" placeholder="Add due date" v-model="$store.state.dueDate" required>
            <button @click="$store.commit('addToProject')">Add To Project</button>
            <p v-if="$store.state.completeField">{{$store.state.completeForm}}</p>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            
        }
    }
}
</script>

<style>
#Modal {
    width: 400px;
    background: white;
    margin: 200px auto;
    border-radius: 5px;
    padding: 20px
}
#Modal input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    margin-top: 25px
}
#Modal form p {
    color: red;
    font-family: sans-serif;
    font-size: 15px;
    margin-top: 5px;
}
#Modal button {
    margin-top: 25px;
    padding: 8px 20px;
    border: none;
    outline: none;
    background: green;
    border-radius: 4px;
    color: white;
    cursor: pointer
}
#backdrop {
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0
}
@media only screen and (max-width: 860px) {
}
@media only screen and (max-width: 500px) {
}
@media only screen and (max-width: 390px) {
}
</style>