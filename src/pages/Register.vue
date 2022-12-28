<template>
    <div class="wrapper-stepper">
        <form method="" class="form-register">
            <h2>Register</h2>
            <div class="stepper">
                <div class="stepper-progress">
                    <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
                </div>

                <div class="stepper-item" :class="{ current: step == item, success: step > item }" v-for="item in 3"
                    :key="item">
                    <div class="stepper-item-counter">
                        <img class="icon-success"
                            src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                            alt="" />
                        <span class="number">
                            {{ item }}
                        </span>
                    </div>
                    <span class="stepper-item-title">
                        {{ item === 1 ? "Account" : item === 2 ? "Profile" : "Finished" }}
                    </span>
                </div>
            </div>

            <div class="stepper-pane" v-if="step == 1">
                <Form>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span> Username:</label>
                        <div class="input-group">
                            <input type="text" name="name" placeholder="username" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span>PassWord:</label>
                        <div class="input-group">
                            <input type="password" placeholder="password" name="password" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span>Repeate PassWord:</label>
                        <div class="input-group">
                            <input type="text" placeholder="confirmPassword" name="confirmPassword"
                                class="form-control" />
                        </div>
                    </div>
                </Form>

            </div>

            <div class="stepper-pane" v-if="step == 2">
                <Form>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span> FullName:</label>
                        <div class="input-group">
                            <input type="text" name="fullName" placeholder="fullName" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span>Birthday:</label>
                        <div class="input-group">
                            <input type="date" value="" placeholder="birthday" id="birthday" name="birthday"
                                class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">City:</label>
                        <div class="input-group">
                            <select name="input_search" class="input_search" id="">
                                <option v-for="option in cities" :key="option.id" :value="option.name"
                                    :selected="option.name === 'All' ? true : ''"> {{ option.text }} </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">User:</label>
                        <div class="title">Can select user:</div>
                        <InputAutoComplete v-model="user.keyword" :options="listOptions" :keyId="user.keyId"
                            :keyName="user.keyName" :maxChoice="5" :listSelected="user.selectedUsers"
                            @onSelectItem="onSelectItem" @onRemoveItem="onRemoveItem" />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Describe Yourself:</label>
                        <textarea cols="44" rows="6" value="" name="description" class=""></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Upload File:</label>
                        <input type="file" />
                    </div>
                </Form>
            </div>

            <div class="stepper-pane" v-if="step == 3">
                <Form>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span>Reason:</label>
                        <textarea cols="44" rows="6" value="" name="description" class=""></textarea>
                    </div>
                    <div class="form-group">
                        <label class="form-label"><span class="brand">Must</span>Salary:</label>
                        <div class="input-group">
                            <input type="text" value="10000 VNĐ" placeholder="" name="salary" class="form-control" />
                        </div>
                    </div>
                </Form>
            </div>

            <div class="controls">
                <button v-if="step !== 3 && step < 4" type="button" class="btn btn--green-1" @click="step++">
                    Next
                </button>
                <button @click="step++" v-if="step === 3" type="button" class="btn btn--green-1">Finished</button>
                <button v-if="step !== 1" type="button" class="btn" @click="step--" :disabled="step == 1">
                    Back
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import InputAutoComplete from '../components/AutoComplete/InputAutoComplete.vue';
import { mapActions, mapGetters } from 'vuex';
import Form from '../components/Form.vue';
export default {
    name: "RegisterComponent",
    data() {
        return {
            user: {
                keyword: "",
                keyName: "name",
                keyId: "id",
                selectedUsers: []
            },
            step: 1,
            cities: [
                {
                    id: 0,
                    name: "All",
                    text: "--- Choose City --"
                },
                {
                    id: 1,
                    name: "HN",
                    text: "Hà Nội"
                },
                {
                    id: 2,
                    name: "HCM",
                    text: "Hồ Chí Minh"
                },
                {
                    id: 3,
                    name: "HP",
                    text: "Hải Phòng"
                },
                {
                    id: 4,
                    name: "Nam Định",
                    text: "Nam Định"
                },
            ]
        };
    },
    async created() {
        await this.fetchListUsers();
    },
    mounted() { },
    computed: {
        stepperProgress() {
            return (100 / 3) * (this.step - 1) + "%";
        },
        ...mapGetters("user", ["getUsers"]),
        listOptions() {
            return (
                this.user.keyword.length && this.getUsers.filter((c) =>
                    c[this.user.keyName].toLowerCase().includes(this.user.keyword.toLowerCase())
                )
            )
        }
    },
    methods: {
        ...mapActions("user", [
            "fetchListUsers"
        ]),
        onSelectItem(item) {
            this.selectedUsers.push(item);
        },
        onRemoveItem(item) {
            this.user.selectedUsers = this.user.selectedUsers.filter((c) => c[this.user.keyId] !== item[this.user.keyId])
        }
    },
    components: {
        Form,
        InputAutoComplete
    },
};
</script>

<style scoped>
.wrapper-stepper {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    gap: 24px;
    position: absolute;
    width: 382px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
}

.wrapper-stepper>.form-register>h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    margin: 20px 0;
    text-transform: capitalize;
    line-height: 39px;
    /* identical to box height */

    color: #333333;
}

.stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    position: relative;
    z-index: 0;
    margin-bottom: 24px;
}

.stepper-progress {
    position: absolute;
    background-color: #c5c5c5;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.stepper-progress-bar {
    position: absolute;
    left: 0;
    height: 100%;
    width: 50% !important;
    background-color: #617D98;
    transition: all 500ms ease;
}

.stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c5c5c5;
    transition: all 500ms ease;
}

.stepper-item-counter {
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;
}

.icon-success {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 24px;
    transition: all 500ms ease;
}

.number {
    font-size: 22px;
    transition: all 500ms ease;
}

.stepper-item-title {
    position: absolute;
    font-size: 14px;
    font-weight: 700;
    bottom: -24px;
}

.stepper-item.success>.stepper-item-counter {
    border-color: #617D98;
    background-color: #617D98;
    color: #fff;
    font-weight: 600;
}

.stepper-item.success>.stepper-item-counter>.icon-success {
    opacity: 1;
    transform: scale(1);
}

.stepper-item.success>.stepper-item-counter>.number {
    opacity: 0;
    transform: scale(0);
}

.stepper-item.success>.stepper-item-title {
    color: #617D98;
}

.stepper-item.current>.stepper-item-counter {
    border-color: #617D98;
    background-color: #617D98;
    color: #fff;
    font-weight: 600;
}

.stepper-item.current>.stepper-item-title {
    color: #818181;
}

.stepper-pane {
    color: #333;
    padding: 10px;
    box-shadow: 0 8px 12px rgba(#000000, 0.09);
    margin-top: 36px;
    width: 360px;
    border: 1px solid #eee;
    border-radius: 4px;
}

.btn {
    padding: 6px 24px;
    border: 1px solid;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    line-height: 1.5;
    transition: all 150ms;
    border-radius: 4px;
    width: fit-content;
    font-size: 0.75rem;
    color: #333;
    background-color: #f0f0f0;
    border-color: #f0f0f0;
    margin: 20px 0 0 4px;
}

.btn:disabled {
    opacity: 0.5;
    pointer-events: none;
}

.btn--green-1 {
    background-color: #617D98;
    border-color: #617D98;
    color: #fff;
    margin-left: auto;
}

.stepper-pane>.form-group,
.form-group>.input-group {
    width: 350px;
    height: 30px;
}

.stepper-pane .form-group {
    margin: 10px 0;
}

.stepper-pane .form-group>.input-group>input,
.stepper-pane .form-group>.input-group>.input_search {
    width: 100%;
    border-radius: 2px;
    outline: none;
    border: 1px solid #dcdcdc;
    height: 100%;
}

textarea {
    width: 96%;
    border-radius: 2px;
    outline: none;
    border: 1px solid #dcdcdc;
    height: 100%;
}

.stepper-pane>.form-group:first-child {
    margin-top: 0;
}

.stepper-pane>.form-account>.form-group {
    margin: 20px 0;
}

.form-group>.input-group>input::placeholder {
    font-family: "Inter";
    font-style: normal;
    text-indent: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    color: rgba(153, 153, 153, 0.28);
}

label {
    margin: 6px 0;
}

.form-label {
    font-family: "Noto Sans JP";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #333333;
}

.brand {
    display: flex;
    margin-right: 4px;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px;
    gap: 10px;
    width: 24px;
    height: 20px;
    font-weight: normal;
    background: #627d98;
    border-radius: 3px;
    color: #fff;
    justify-content: center;
    color: #ffffff;
}

.title {
    margin: 10px 0;
}
</style>
