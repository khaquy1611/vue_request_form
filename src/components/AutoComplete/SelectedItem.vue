<template>
    <div class="selected-item">
    {{ item[keyName] }}
    <div class="icon-remove" @click="onRemoveItem">
      <IconCancel />
    </div>
  </div>
</template>

<script>
import IconCancel from '@/components/Icons/IconCancel.vue';
export default {
    name: 'VueSelectedItem',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        onRemoveItem() {
      this.$emit("onRemoveItem");
    },
    },
    props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    keyName: {
      type: String,
      default: () => "name",
    },
  },
    components: {
        IconCancel
    }
};
</script>

<style  scoped>
.selected-item {
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background: #f0f4f8;
  height: 32px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #627d98;
  font-size: 14px;
  width: max-content;
  line-height: 20px;
 
}
.selected-item::v-deep svg {
    fill: #627d98;
    width: 12px;
    height: 12px;
    cursor: pointer;
}
</style>