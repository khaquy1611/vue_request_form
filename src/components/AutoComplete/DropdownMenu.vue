<template>
    <div class="dropdown">
        <template v-if="options.length">
            <div v-for="item in options" :key="item[keyId]"
                :class="['dropdown__item', checkSelected(item) && 'selected']" @click="onSelectItem(item)">
                {{ item[keyName] }}
            </div>
        </template>
        <template v-else>
            <div class="no-data">{{ messageNoData }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => [],
        },
        listSelected: {
            type: Array,
            default: () => [],
        },
        keyId: {
            type: String,
            default: () => "id",
        },
        keyName: {
            type: String,
            default: () => "name",
        },
        messageNoData: {
            type: String,
            default: () => "Không có kết quả",
        },
    },
    computed: {
        checkSelected() {
            return (item) => {
                return this.listSelected.filter(
                    (c) => c[this.keyId] === item[this.keyId]
                ).length;
            };
        },
    },
    methods: {
        onSelectItem(item) {
            if (!this.checkSelected(item)) {
                this.$emit("onSelectItem", item);
            }
        },
    },
};
</script>

<style scoped>
.dropdown {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    width: 100%;
    padding: 4px 0;
    border-radius: 4px;
    background: #f1f5f8;
    max-height: 200px;
    overflow: auto;
    filter: drop-shadow(0px 1px 8px rgba(102, 102, 102, 0.25));
}

.dropdown::-webkit-scrollbar {
    width: 8px;
    cursor: default;
}

.dropdown::-webkit-scrollbar-thumb {
    background: #dcdcdc;
    border-radius: 12px;
}

.dropdown__item,
.no-data {
    padding: 8px 10px;
    font-size: 16px;
    line-height: 24px;
    color: #888;
}

.dropdown__item {
    color: #486581;
    cursor: pointer;
}

.dropdown__item:hover {
    color: #fff;
    background: #617d98;
}

.dropdown__item.selected {
    color: #fff;
    background: #617d98;
    cursor: default;
}
</style>