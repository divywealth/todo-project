<template>
    <div id='nav-container'>
        <div id="menu-bar" v-if= $store.state.drawer>
            <ul>
            <li id="Bar" @click="$store.commit('toggleDrawerOut')"><font-awesome-icon icon="fa-solid fa-bars"/></li>
            <li><router-link to="/"><font-awesome-icon icon="fa-solid fa-house" class="drawer-icon"/>Dashboard</router-link></li>
            <li><router-link to="#"><font-awesome-icon icon="fa-solid fa-folder" class="drawer-icon"/>My Projects</router-link></li>
            <li><router-link to="#"><font-awesome-icon icon="fa-solid fa-user" class="drawer-icon"/>Team</router-link></li>
            </ul>
        </div>
        <div id="Nav">
            <div id="left-side">
                <ul>
                    <li id="Bar" @click="$store.commit('toggleDrawerOut')"><font-awesome-icon icon="fa-solid fa-bars"/></li>
                    <li><span id="Todo">TODO</span>LIST</li>
                </ul>
            </div>
            <div id="right-side">
                <ul>
                    <li><p>SIGN IN</p></li>
                    <li id="signin"><router-link to="/Signin"><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket"/></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Nav-Bar',
    data() {
        return {
            
        }
    }
}

</script>

<style scoped>
#Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}
#nav-container {
    background: #c0d2d0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06 );
    width: 100%
    
}
#menu-bar {
    position: fixed;
    background: #ADD8E6;
    height: 100vh;
    width: 300px;
    top: 0;
    left: 0;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
}
#menu-bar ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer

}
#menu-bar ul li {
    padding: 20px 20px;
    font-family: sans-serif;
    cursor: pointer;
    color: white;
    font-size: 15px;
}
#menu-bar ul li a{
    text-decoration: none;
    color: white;
}

.drawer-icon {
    padding: 0 20px 0 0;
    font-size: 20px
}
#Nav div ul li {
    display: inline-block;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 20px
}
#Nav div ul li p {
    font-size: 16px;
    cursor: default;
}
#Todo {
    color: #685f5f
}
#Bar {
    padding: 10px 40px 10px 30px
}
#signin {
    padding: 10px 45px 10px 10px
}
#signin a {
    text-decoration: none;
    color: #000;
}
@media only screen and (max-width: 860px) {
}
@media only screen and (max-width: 500px) {
}
@media only screen and (max-width: 390px) {
}

</style>