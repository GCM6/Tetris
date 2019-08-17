<script>
import store from "../../vuex/store";
import { getwant } from "../unit/getblocktype";
import { blockmatrix } from "../unit/blockdata";
import clearb from "../../control/todo/clearBlines";
export default {
  props: ["isStart", "propsMatrix", "cuent"],
  watch: {
    // 监听props的变化
    $props: {
      handler(val = {}, oldVal) {
        
        this.propsChanges(val);
      },
      deep: true //表示对对象深度监听
    }
  },
  render() {
    let matrix = this.getStart();
    return (
      <div class="matrix">
        {matrix.map((p, k1) => (
          <p>
            {p.map((e, k2) => (
              <b class={(e === 1 ? "c" : "") + (e === 2 ? "d" : "")} />
            ))}
          </p>
        ))}
      </div>
    );
  },
  data() {
    return {};
  },

  methods: {
    propsChanges(val) {
      const clearType = clearb.isClear(val.propsMatrix);
      if (clearType) {
        this.clearBlinesAnimate(clearType);
      }
    },
    getStart() {
      //初始化格子
      const props = this.$props;
      let matrixs = props.propsMatrix;
      // 监听游戏结束
      if (
        matrixs[0].indexOf(1) !== -1 &&
        matrixs[19].indexOf(1) !== -1 &&
        props.isStart
      ) {
        this.over(props.isStart);
        store.commit("getMatrixBlock", blockmatrix());
        store.commit("getStatus", false);
      } else {
        
        //  store.commit('getMatrixBlock', matrixs)
        // let matrixJ = JSON.parse(JSON.stringify(matrixs));
      }
      let matrixJ = JSON.parse(JSON.stringify(matrixs));
      const xy = props.cuent.xy;
      const shapel = props.cuent.shapes;
      // 刚刚进入界面的时候shapel是null，进行判断，等待点击游戏开始
      if (shapel && store.state.status) {
        shapel.forEach((e, index) => {
          e.forEach((n, index1) => {
            if (n && xy[0] + index >= 0) {
              // 竖坐标为负的情况
              let blockArrItem = 1;
              let line = matrixJ[xy[0] + index];
              line[xy[1] + index1] = blockArrItem;
              matrixJ[xy[0] + index] = line;
            }
          });
        });
      }
      
      return matrixJ;
    },
    // 消除行
    clearBlinesAnimate(clearBT) {
    
      const animateClear = callB => {
        setTimeout(() => {
          setTimeout(() => {
            callB();
          });
        });
      };
      animateClear(() => {
        animateClear(() => {
          animateClear(() => {
            setTimeout(() => {
              clearb.clearBLines(this.propsMatrix, clearBT)
            },200)
          });
        });
      });
    },
    over(status) {
      if (status) {
        alert("game over!");
      } else {
        alert("stop");
      }
    }
  }
};
</script>