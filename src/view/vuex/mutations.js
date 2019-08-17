import Block from '../blockstore/tblock'
import { getRBType } from '../page/unit/getblocktype'
 const mutations = {
     startBlock(state,data) {
         state.nblock =  new Block(data)
     },
     getMatrixBlock(state, data) {
        //  将上一个的方格一起传下来

         state.matrixB = data
       
     },
     nextTyBlock(state, data) {
         if(!data) {
             data = getRBType()
         }
        
         state.nextTypr = data
     },
     getStatus(state, data) {

     
         state.status = data;
     }
}

export default mutations