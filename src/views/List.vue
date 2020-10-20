<template>
  <div class="container">
    <Filters></Filters>
    <hr>
    <Users></Users>
  </div>
</template>

<script>
import Filters from "../components/Filters";
import Users from "../components/Users";
import Store from "../store/List";
import axios from "axios";

export default {
  components: {
    Filters,
    Users,
  },
  provide() {
    return {
      fetchData: this.fetchData,
      Store
    }
  },
  data() {
    return {
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
          console.log(resp.data);
          Store.updateUsers(resp.data)
        });
      }, 500)
    },
  },
};
</script>
