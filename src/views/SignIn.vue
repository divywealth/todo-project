<template>
  <div id="signIn">
        <h1>Welcome Back</h1>
    <p>Please enter your details</p>
    <form action="">
        <label>Email</label>
        <input type="email" placeholder="Enter Your Email" required>

        <label>Password</label>
        <input type="email" placeholder="Password" required>

        <div id="checkbox">
            <section>
                <input type="checkbox" required>
                <label>Remember Me</label>
            </section>

            <router-link to="" id="Password"><span>Forgot Password</span></router-link>
        </div>

        <div class="submitBox">
            <button class="submit" @click="goToHome">Sign In</button>
        </div>

        <div id="signUp">Dont have an account? <router-link to="/Signup" id="signUp" style="color: #1a289">Sign up</router-link></div>
    </form>
  </div>
</template>

<script>
export default {
    name: "SignIn",
    methods: {
        goToHome() {
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style scoped>
body {
    background: #FEFEFE;
} 
#signIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 15%;
}
#signIn h1 {
    font-family: sans-serif;
    color: #5454a0;
}
#signIn p {
    font-family: sans-serif;
    color: #7c7cb2;
    font-size: 14px;
    line-height: 2;
    letter-spacing: 1px;
}
#signIn form {
    text-align: left;
}
#signIn form label {
    color: #7c7cb2;
    display: inline-block;
    margin: 20px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
#signIn form input {
    display: block;
    padding: 10px 6px;
    width: 400px;
    border-radius: 5px;
    border: 1px solid #b4b4b8;
    outline: none;
    color: #283D3F;
    background: #e0e0e4;
}
#signIn form input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
#checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.submitBox{
 text-align: center;

}
.submit{
    border-radius: 5px;
    background-color: #5454a0;
    color: white;
    border: none;
    padding: 10px 150px ;
    cursor: pointer;
    margin-top: 20px;
    font-family: sans-serif;
}
#signUp {
    text-decoration: none;
    color: #7c7cb2;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    letter-spacing: 1px;
}
#Password {
    text-decoration: none;
    color: #7c7cb2;
    font-size: 14px;
    letter-spacing: 1px;
}
@media only screen and (max-width: 500px) {
    #signIn {
        margin-top: 60%;
    }
}
</style>