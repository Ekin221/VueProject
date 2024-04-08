<template>
  <div>
    <img class="Vue logo" src="../assets/logo.png" />
    <h1>Login</h1>
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button @click="login">Log In</button>
      <p>
        <router-link to="/sign-up"> Sign Up </router-link>
      </p>
      <p>
        <router-link to="/">Home Page</router-link>
      </p>
      <div v-if="token" class="token-box">
        <button @click="authorize">Authorize</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      token: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "https://apiv2.nexizon.com/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        if (response.status === 200 && response.data.success) {
          this.token = response.data.data.token;
          localStorage.setItem("token", this.token);  // Ensure the token is set here
          // Optionally, you can store the token in localStorage or Vuex for persistence.
          this.$router.push({ name: "CompanyStore", query: { token: this.token } });
        } else {
          alert("Unsuccessful login");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login");
      }
    },
    authorize() {
      // Authorization logic if needed
    },
  },
};
</script>

<style>
.token-box {
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 10px;
}
</style>
