import {blockType} from './blockdata'

const unitdata = {
    getRBType() {
        const blockTypeM = Object.keys(blockType);
        // 随机获取下一个方块类型1
        const len = blockTypeM.length;
        const bm = blockTypeM[Math.floor(Math.random() * len)];
        // const shapes = blockType[bm];
        return bm;
      },
      getwant(next, matrix) {

        //检测方块目前的位置
        const xy = next.xy;
        const shape = next.shapes;
        const hz = shape[0].length;
        return shape.every((e, index) => 
          e.every((n, index1) => {
            if(xy[1]<0) {//当前左边的情况时
             
              return false
            }
            if(xy[1] + hz >10) {
             
              // 在右边的情况时
              return false
            }
            if(xy[0] + index <0) {
              // 在上的时候
              return true
            }
            if(xy[0] + index >=20) {
              // 下面的时候
             
              return false
            }
            if(n) {
              if(matrix[xy[0] + index][xy[1] + index1]) {
              
                return false
              }
              return true
            }
           return true
          })
           
        )
        
      },
}

export const  {
    getRBType,
    getwant
} = unitdata