import startgame from '../startgame'
import store from '../../vuex/store'
import { blankLine } from '../../page/unit/blockdata'
const clearbline = {
    isClear(nextP){
        // 检测是否达到了消除的状态
        const clearArr = [];
        nextP.forEach((el, index) => {
         if(el.every(it => !!it)){
           clearArr.push(index)
         }
        })
        if(clearArr.length === 0) { return false }
        return clearArr
      },
    //   消除行
      clearBLines(martix, lines) {
         
        //   将满一行都为1的数组和第几行传进来
          let newMatrix = martix
          
          const state = store.state;
        //   移除第十九行
          lines.forEach(n => {
            newMatrix.splice(n, 1)
             newMatrix.unshift(blankLine)
          })
        //   将当前的数组传回仓库
          store.commit('getMatrixBlock', newMatrix)
        //   继续获取随机值
          store.commit('startBlock', { type: state.nextTypr });
          store.commit('nextTyBlock', '')
        // 继续进行循环下降方块
        startgame.auto()
      }
}
export default clearbline