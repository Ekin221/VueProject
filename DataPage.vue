<template>
  <div>
    <h1>Data Page</h1>
    <div class="dataPage">
      <form @submit.prevent="getData" class="form">
        <div class="form-group">
          <label for="store_id">Store ID:</label>
          <input v-model="store_id" type="number" required />
        </div>

        <div class="form-group">
          <label for="direction_type">Direction Type:</label>
          <input v-model="direction_type" type="text" required />
        </div>

        <div class="form-group">
          <label for="start">Start Time:</label>
          <input v-model="start" type="number" required />
        </div>

        <div class="form-group">
          <label for="end">End Time:</label>
          <input v-model="end" type="number" required />
        </div>

        <button type="submit">Get Data</button>
      </form>

      <div v-if="result !== null" class="result">
        <p class="result-label">Result:</p>
        <p class="actual-result">{{ result }}</p>
      </div>
    </div>
    <button class="button-logOut" v-on:click="logOut">Log Out</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      store_id: null,
      direction_type: "",
      start: null,
      end: null,
      result: null,
    };
  },
  methods: {
    async getData() {
      try {
        console.log("Sending request...");
        console.log("id: ", this.store_id);
        const response = await axios.post("http://localhost:8080/api/getData", {
          store_id: this.store_id,
          direction_type: this.direction_type,
          timestamps: [this.start, this.end],
        });

        console.log("Response:", response.data);

        this.result = response.data.count;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    logOut() {
      console.warn("logout");
      localStorage.clear();
      this.$router.push({ name: "HomeView" });
    },
  },
};
</script>
<style>
.dataPage {
  max-width: 600px;
  margin: 0 auto;
  position: relative; /* Set the container position to relative */
}

/* Add the following style for the Log Out button */
.button-logOut {
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  right: 10px; /* Adjust the right position as needed */
  padding: 10px;
  background-color: red; /* You can customize the color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input {
  padding: 8px;
  border: 1px solid skyblue;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.result {
  margin-top: 20px;
}

.result-label {
  font-weight: bold;
  margin-bottom: 10px;
}

.actual-result {
  font-size: 1.2em;
  color: green;
  margin: 0;
}
</style>
