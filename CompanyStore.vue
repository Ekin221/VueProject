<template>
  <div>
    <h1>Company Stores</h1>
    <div class="company-form">
      <label for="companyId">Enter Company ID:</label>
      <input type="text" v-model="companyId" id="companyId" />
      <button @click="getCompanyStores">Get Company Stores</button>
    </div>
    <div v-if="stores.length > 0">
      <h2>Company Stores</h2>
      <ul>
        <li v-for="store in stores" :key="store.id">
          {{ store.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CompanyStore",
  data() {
    return {
      companyId: "",
      stores: [],
    };
  },
  methods: {
    async getCompanyStores() {
      try {
        // Check if companyId is a valid non-empty string before making the request
        if (!this.companyId || typeof this.companyId !== "string") {
          console.error("Invalid Company ID");
          alert("Please enter a valid Company ID");
          return;
        }

        console.log(this.companyId);
        const token = localStorage.getItem("token");
        const response = await axios.create({withCredentials: false}).get(
          `https://apiv2.nexizon.com/companies/${this.companyId}/stores?page=1&limit=10`,
          {
            headers: {
              "Accept": "application/json",
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 204) {
          // Handle 204 No Content - No stores found for the given company ID
          console.log("No stores found for the given company ID");
          this.stores = [];
        } else if (response.status === 200 && response.data.success) {
          // Handle a successful response with data
          this.stores = response.data.data;
          this.storeNames = this.stores.map((store) => store.name);
        } else {
          console.error("Error in API response:", response.data);
          alert("Unable to fetch company stores");
        }
      } catch (error) {
        console.error("Company stores error:", error.message);

        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);
        } else if (error.request) {
          console.error(
            "No response received. Request details:",
            error.request
          );
        } else {
          console.error("Request setup error:", error.message);
        }
        alert("An error occurred while fetching company stores");
      }
    },
  },
};
</script>

<style>
.company-form {
  margin-top: 20px;
}
</style>
