import axios from 'axios';

export default {
    namespaced: true,
    state: {
        users: [],
    },
    getters: {
        getUsers: (state) => {
            return state.users;
        }
    },
    mutations: {
        SET_LIST_USERS(state, payload){ 
            state.users = payload;
        }
    },
    actions: {
        async fetchListUsers({ commit }) {
            try {
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/users`
                );
                commit('SET_LIST_USERS', res.data);
            }catch (err) {
                console.log(err);
            }
        }
    }
}