import {createStore} from 'vuex'
import Home from "./index.json"
import Photo from "./photo.json"

export default createStore({
    state: {
        home_data: Home,
        photo_data: Photo,
    },
    mutations: {
        set_data(state, param) {
            let val = param.val
            if (typeof param.val == 'object') {
                val = JSON.stringify(val);
            } else if (typeof param.val == "string") {
                val = `"${val}"`
            }
            eval(`state.${param.key} = ${val}`)
        }
    },
    actions: {},
    modules: {},
})
