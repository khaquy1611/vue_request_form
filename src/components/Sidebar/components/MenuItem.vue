<template>
<div v-if="menuItems">
  <li
    v-for="item in menuItems"
    :key="item.id"
    class="sidebar-item"
    :class="{ active: active_el == item.nameRoute }"
    @click="activeClass"
  >
    <router-link class="sidebar-link" :to="item.path">{{
      item.content
    }}</router-link>
  </li>
</div>
</template>

<script>
export default {
  name: "MenuItem",
  data() {
    return {};
  },
  mounted() {
    console.log(this.active_el);
  },
  methods: {
    activeClass() {
      this.active(this.$route.name);
    },
  },
  props: {
    active: {
      type: Function,
      default: () => {},
      required: true,
    },
    menuItems: {
      type: Array,
      default: () => [],
      required: true,
    },
    active_el: {
      type: String,
      default: "Dashboard",
    },
  },
};
</script>

<style scoped>
.sidebar-item {
  padding: 20px 0;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  line-height: 20px;
  text-indent: 1rem;
}
.sidebar-item.active {
  background-color: #a1d1e4;
  font-weight: 400;
}
.sidebar-link {
  font-size: 18px;
  vertical-align: middle;
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.active > .sidebar-link {
  color: rgb(71, 147, 177) !important;
}
</style>
