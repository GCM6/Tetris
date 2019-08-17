import store from '../vuex/store'
import { getwant } from '../page/unit/getblocktype'
import { getRBType } from '../page/unit/getblocktype'
import left from '../control/todo/left'
import {down} from '../control/todo/down'
const startInitgeme = {
    fallInter: null,
    //游戏开始
    Start() {
        //第二步 获取随机的方块
        const oBlockType = store.state.nextTypr;
        // 将随机获取的方块类型传到vuex仓库触发startBlock函数
        store.commit("startBlock", { type: oBlockType });
        //第三步 自动下落
        this.auto();

        // 监听事件
        this.init();
    },

    init() {
         //    监听四个方向键
         window.addEventListener('keydown', event => {
            if (event.code === 'ArrowDown') {
               
                // down()
            } else if (event.code === 'ArrowUp') {
                
                if(store.state.nextTypr === 'O') {
                    return
                }
                let rotate = store.state.nblock;
                let gorotate = rotate.toprotate()

                let upmatrix = store.state.matrixB;
               
                if(getwant(gorotate, upmatrix) && store.state.status) {
                    // 将调用toprotate方法产生的结果传到Tblock匿名class函数中运行获得变换方向的方块
                    store.commit('startBlock', gorotate)
                }
               
            } else if (event.code === 'ArrowLeft') {
                
                let nblockleft = store.state.nblock;
                let goleft = nblockleft.left();
                let matirxleft = store.state.matrixB;
                if (getwant(goleft, matirxleft) && store.state.status) {
                    store.commit("startBlock", goleft);
                }
                
            } else if (event.code === 'ArrowRight') {
                
                let nblockright = store.state.nblock;
                let goright = nblockright.right();
                let matirxright = store.state.matrixB;
                if (getwant(goright, matirxright) && store.state.status) {
                    store.commit("startBlock", goright);
                }
            }
        })
       

    },

    auto() {
        //自动下落

        const setTimeoutfall = (() => {
           
            const nblock = store.state.nblock;
            const nextTblock = nblock.nextfall();
            const m = JSON.parse(JSON.stringify(store.state.matrixB));
            const status = store.state.status;
            if (getwant(nextTblock, m) && status) {
                store.commit("startBlock", nextTblock);
                startInitgeme.fallInter = setTimeout(setTimeoutfall, 500)
            } else {
                const shape = nblock.shapes;
                const xy = nblock.xy;
                shape.forEach((element, k1) => {
                    element.forEach((n, k2) => {
                        if (n && xy[0] + k1 >= 0) {
                            // 竖坐标可以为负
                            let line = m[xy[0] + k1];

                            line[xy[1] + k2] = 1;
                            m[xy[0] + k1] = line;
                        }
                    });
                });
                //   根据状态判断是否停止掉落
                if (store.state.status) {
                    startInitgeme.nextBlock(m)

                }
            }
        })
        if (store.state.status) {
            clearTimeout(startInitgeme.fallInter );
            startInitgeme.fallInter  = setTimeout(setTimeoutfall, 500)
        }

    },
    nextBlock(m, stopDown) {
        clearTimeout(startInitgeme.fallInter );
        if(typeof stopDown === 'function') {
            stopDown()
        }
        store.commit('getMatrixBlock', m)
        //触发重新请求一次随机类型方格的函数
        store.commit('nextTyBlock', '')
        //   将随机的类型传到tblock
        const oBlockTypenext = store.state.nextTypr;
        store.commit('startBlock', { type: oBlockTypenext })


        startInitgeme.auto()

    },
    // 成一行则消除
    clearLines(martix, lines) {
        if(!martix|| lines.length === 0 ) {
            return
        }

    }

}
export default startInitgeme