import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'
import { getRBType } from '../page/unit/getblocktype'
import { blockmatrix } from '../page/unit/blockdata'
import Block from '../blockstore/tblock'
/**
 * 状态管理的仓库
 */
// 注意需要use
Vue.use(Vuex)
// 获取随机方块
const rdBlockTy =  getRBType();
const newblock = (() => {
    let option = {
        shape: [],
        type: '',
        rotIndex: '',
        xy: ''
    }
    return new Block(option)
});

const matrixblock = blockmatrix()

// nextTypr用一个属性将获取不同的方块保存下来
const state = {
    nextTypr: rdBlockTy,
    nblock: newblock,
    matrixB: matrixblock,
    status: false
}

export default new Vuex.Store({
    state,
    mutations
})