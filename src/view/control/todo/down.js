import { getwant } from '../../page/unit/getblocktype'
import store from '../../vuex/store'
import startgame from '../startgame'
export const down = (() => {
    
    const nblock = store.state.nblock;
    const nextTblock = nblock.nextfall();
    const martix = JSON.parse(JSON.stringify(store.state.matrixB));
    const status = store.state.status;
    if (getwant(nextTblock, martix) && status) {
       
        store.commit("startBlock", nextTblock);
        startgame.auto();
    } else {
       
        const shape = nblock.shapes;
        const xy = nblock.xy;
        shape.forEach((element, k1) => {
            element.forEach((n, k2) => {
                if (n && xy[0] + k1 >= 0) {
                    // 竖坐标可以为负
                    let line = martix[xy[0] + k1];

                    line[xy[1] + k2] = 1;
                    martix[xy[0] + k1] = line;
                }
            });
        });
        //   根据状态判断是否停止掉落
        if (store.state.status) {
            startgame.nextBlock(martix, down)

        }
    }
})

