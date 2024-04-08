<template>
  <div class="home-container">
    <h1>Hello User, Welcome on Nexizon Home Page</h1>
    <img class="Vue logo" src="../assets/logo.png" />

    <!-- Sign Up Button -->
    <router-link to="/sign-up" class="sign-up-link">
      <button class="custom-button">Sign Up</button>
    </router-link>

    <!-- Log In Button -->
    <router-link to="/log-in" class="log-in-link">
      <button class="custom-button2">Log In</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  /*
  //bunu degistirebilirsin 
  mounted() {
    let user = localStorage.getItem("user.info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    } 
    
  },
  */
};
</script>
<style>
.home-container {
  position: relative;
}
.sign-up-link,.log-in-link {
  position: absolute;
  top: 10px;
}

.sign-up-link {
  right: 90px; /* Adjust the value to control the distance from the right edge */
}

.log-in-link {
  right: 10px;
}
.custom-button {
  border-radius: 10px; /* Adjust the value to control the roundness of corners */
  padding: 8px 16px; /* Adjust the padding as needed */
  background-color: skyblue;
  color: white;
  border: none;
  cursor: pointer;
}

.custom-button2 {
  border-radius: 10px; /* Adjust the value to control the roundness of corners */
  padding: 8px 16px; /* Adjust the padding as needed */
  background-color: skyblue;
  color: white;
  border: none;
  cursor: pointer;
}
.logo {
  width: 300px;
}
</style>
