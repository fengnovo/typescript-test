import axios from 'axios';
import { ActionTree } from 'vuex';
import * as Types from './types';
const actions: ActionTree<any, any> = {
    async [Types.GET_LIST]({ state , commit, dispatch }) {
        state.loading = true;
        axios('https://cnodejs.org/api/v1/topics', {
            params: {
                limit: 10
            }
        }).then((data: any) => {
            console.log(data);
            state.loading = false;
            state.msg = '';
            if (data && data.data && data.data.data && data.data.data.length > 0) {
                state.list = data.data.data;
            }
        }).catch((e: Error) => {
            state.loading = false;
            console.error(e);
        });
    }
};

export default actions;