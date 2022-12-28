<template>
  <div :class="['input-complete', isFocused && 'focus']">
    <div class="icon-search">
      <IconsSearch />
    </div>
    <div class="d-flex">
      <template v-if="listSelected.length">
        <SelectedItem
          v-for="item in listSelected"
          :key="item[keyId]"
          :keyName="keyName"
          :item="item"
          @onRemoveItem="onRemoveItem(item)"
        />
      </template>
      <input
        v-if="!checkMaxChoices"
        type="text"
        :placeholder="placeholder"
        v-model="keyword"
        @input="onInputSearch"
        @focus="isFocused = true"
      />
    </div>
    <DropdownMenu
      v-if="showDropdown"
      :options="options"
      :keyId="keyId"
      :keyName="keyName"
      :listSelected="listSelected"
      @onSelectItem="onSelectItem"
    />
  </div>
</template>

<script>
import IconsSearch from "@/components/Icons/IconsSearch.vue";
import SelectedItem from "./SelectedItem.vue";
import DropdownMenu from "./DropdownMenu.vue";
export default {
  name: "RequestFormVueInputAutoComplete",
  data() {
    return {
      keyword: "",
      inFocused: false,
    };
  },
  computed: {
    showDropdown() {
      return this.isFocused && this.keyword.length;
    },
    checkMaxChoices() {
      return this.maxChoice && this.listSelected.length === this.maxChoice;
    },
  },
  mounted() {},
  methods: {
    onInputSearch() {
      this.$emit("input", this.keyword);
    },
    onSelectItem(item) {
      if (!this.checkMaxChoices) {
        this.keyword = "";
        this.isFocused = false;
        this.onInputSearch();
        this.$emit("onSelectItem", item);
      }
    },
    onRemoveItem(item) {
      this.$emit("onRemoveItem", item);
    },
  },
  components: { IconsSearch, SelectedItem, DropdownMenu },
  props: {
    listSelected: {
      type: Array,
      default() {
        return [];
      },
    },
    maxChoice: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
      default: () => "Search",
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    keyId: {
      type: String,
      default: () => "id",
    },
    keyName: {
      type: String,
      default: () => "name",
    },
  },
};
</script>

<style scoped>
.input-complete {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  height: 100%;
  width: 100%;
  background: rgba(230, 249, 255, 0.2);
  position: relative;
}
.input-complete::focus {
  border: 1px solid #1991d2;
}
.icon-search {
  height: 32px;
  display: flex;
  align-items: center;
}
.d-flex {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  align-items: center;
}
.d-flex > input {
  outline: 0;
  border: none;
  width: 200px;
  height: 32px;
  background: transparent;
}
.d-flex > input::placeholder {
  color: #bfbfbf;
}
</style>
