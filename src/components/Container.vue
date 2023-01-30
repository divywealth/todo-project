<template>
    <div id="container">
        <table width="100%" v-for="(todo, index) in $store.state.Todos" :key="index" :class="`new${todo.status}`">
            <thead>
                <tr>
                    <td width="25%">Project title</td>
                    <td width="25%">Person</td>
                    <td width="25%">Due by</td>
                    <td width="25%" >Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{todo.title}}</td>
                    <td>{{todo.person}}</td>
                    <td>{{todo.dueby}}</td>
                    <td><span :class="todo.status">{{todo.status}}</span></td>
                    <td id="times-circle" @click="$store.commit('removeTodo', index)"><font-awesome-icon icon="fa-solid fa-times-circle"/></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}

</script>

<style scoped>
#container {
    
    box-shadow: -1px 1px 7px 0px rgb(0 0 0 / 20%);
}
#container table {
     border-bottom: 1px solid #e2e9e1;
}
#container table thead {
   
}
#container table thead tr {

}
#container table thead tr td {
    color: #685f5f;
    font-family: sans-serif;
    padding: 20px 10px 5px 10px
}
#container table tbody {

}
#container table tbody tr {

}
#container table tbody tr td {
    font-family: sans-serif;
    font-size: 14px;
    padding: 0 10px 15px 10px;
    
}
.newongoing {
    border-left: 4px solid orange
}
.newcomplete {
    border-left: 4px solid #3cd1c2
}
.newoverdue {
    border-left: 4px solid tomato
}
#container table tbody tr td span {
    padding: 3px 10px;
    border-radius: 10px;
    box-shadow: -1px 1px 7px 0px rgb(0 0 0 / 20%);
    color: white 
}
.ongoing {
    background: orange;
}
.complete {
    background: #3cd1c2;
}
.overdue {
    background: tomato;
}
#times-circle {
    color: red;
    cursor: pointer;
}
</style>