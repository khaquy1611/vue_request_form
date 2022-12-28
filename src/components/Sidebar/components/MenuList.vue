<template>
  <ul class="sidebar-list">
    <MenuItem :menuItems="menuItems" :active_el="active_el" :active="active" />
  </ul>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
  name: "RequestFormVueMenuList",

  data() {
    return {
      active_el: "Dashboard",
      menuItems: [
        {
          id: 1,
          content: "Request",
          nameRoute: "Dashboard",
          path: "/dashboard",
        },
        {
          id: 2,
          content: "Logout",
          nameRoute: "logout",
          path: "/logout",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    active(el) {
      this.active_el = el;
    },
  },
  components: {
    MenuItem
  }
};
</script>

<style scoped>
.sidebar-list {
  list-style: none;
  width: 100%;
}
</style>
