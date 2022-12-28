<template>
  <div class="sidebar">
    <img  src="../../assets/Avatar.png" alt="" />
    <h1>Front end Developer</h1>
    <MenuList></MenuList>
  </div>
</template>

<script>
import MenuList from "./components/MenuList.vue";
export default {
  name: "RequestFormVueSidebar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    MenuList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow-x: hidden;
  box-sizing: border-box;
}
.sidebar > img {
  display: block;
  margin: 0 auto;
}
</style>
