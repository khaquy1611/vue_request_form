<template>
    <div class="container">
    <LeftSidebar></LeftSidebar>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import LeftSidebar from "../components/Sidebar/Sidebar.vue";
export default {
    name: 'RequestFormVueLayouts',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components: {
        LeftSidebar
    }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  width: 800px;
}
</style>