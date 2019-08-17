<template>
  <div class="layout">
    <div class="main">
      <div class="rect">
        <div class="content">
          <div class="window">
            <Matrix :isStart="start11"  :propsMatrix="matrixB" :cuent ="nblock"/>
          </div>
        </div>
      </div>
      <div class="button-main">
        <h1 class="header-next">下一个</h1>
        <div class="context"></div>
        <h1 class="header-fraction">得分</h1>
        <div class="fraction">
          <strong>{{ data }}</strong>
        </div>
        <h1 class="header-fraction">操作</h1>
        <div class="operating">
          <div class="smain">
            <div @click="changIndex" :class="currentIndex ?'active': 'start'"></div>
            <div>{{ start11? '暂停':'开始(P)' }}</div>
          </div>
          <div class="smain">
            <div @click="changR" :class="currentIndexR ?'active': 'start'"></div>
            <div>{{ Reopen }}</div>
          </div>
          <div class="smain">
            <div @click="changS" :class="currentIndexS ?'active': 'start'"></div>
            <div>{{ SEffect }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="guid-up">
          <em></em>
        </div>
        <div class="guid">
          <div class="guid-left">
            <em></em>
          </div>
          <div class="guid-down">
            <em></em>
          </div>
          <div class="guid-right">
            <em></em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Matrix from "../page/matrix/index";
import { mapState } from 'vuex'
import store from '../vuex/store';
import startgeme from '../control/startgame'
export default {
  data() {
    return {
      data: "666",
      start11: false,
      Reopen: "重玩(R)",
      SEffect: "音效(S)",
      currentIndex: false,
      currentIndexR: false,
      currentIndexS: false,
    };
  },
  components: {
    Matrix
  },
  computed: {
  
      ...mapState([
      'matrixB',
      'nblock'
    ])
    
  },
  methods: {
    changIndex() {
      this.currentIndex = true;
      setTimeout(() => {
        this.currentIndex = false;
      }, 100);
      this.start11 = !this.start11;
    
     if(this.start11) {
        store.commit('getStatus', true)
        if(store.state.status) {
         
       startgeme.Start()
        }
     } else {
        store.commit('getStatus', false)
     }
     
    },
    changR() {
      this.currentIndexR = true;
      setTimeout(() => {
        this.currentIndexR = false;
      }, 100);
    },
    changS() {
      this.currentIndexS = true;
      setTimeout(() => {
        this.currentIndexS = false;
      }, 100);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.main {
  position: relative;
  width: 460px;
  margin: 0 auto;
  border-radius: 60px;
  margin-top: 10px;
  background: black;
}
.rect {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 840px;
  margin: 0 auto;
}
.content {
  width: 90%;
  height: 95%;
  border-radius: 40px;
  background: #e8e8e8;
}
.window {
  position: relative;
  width: 90%;
  height: 96%;
  margin: 0 auto;
  padding: 15px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.window::before {
  content: "";
  width: 40%;
  height: 6px;
  background: black;
  margin: 0 auto;
  position: absolute;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
}
p {
  display: flex;
  justify-content: flex-start;
}
b {
  width: 30px;
  height: 30px;
  margin: 0 4px 4px 0;
  display: block;
  border: 2px solid #f8f8ff;
}
b::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  background: #f8f8ff;
  margin: 5px 0px 0px 4px;
}
b.c {
  border-color: black;
}
b.c::after {
  background: black;
}
.right {
  position: absolute;
  left: 105%;
  top: 80%;
  width: 400px;
  height: auto;
}
.guid {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
}
.guid-up > em {
  transform: translate(0px, -3px) scale(1, 2);
  display: block;
  border: 6px solid;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-color: transparent transparent black;
  position: absolute;
  top: 25%;
  left: 45%;
}
.guid-up {
  position: relative;
  width: 100px;
  height: 40px;
  background: #7fffd4;
  margin: 0 auto;
  border-radius: 5px;
}
.guid-down {
  position: relative;
  width: 100px;
  height: 40px;
  background: #7fffd4;
  border-radius: 5px;
  margin-right: 50px;
}
.guid-down > em {
  transform: translate(0px, 9px) rotate(180deg) scale(1, 2);
  display: block;
  border: 6px solid;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-color: transparent transparent black;
  position: absolute;
  top: 30%;
  left: 45%;
}
.guid-left {
  position: relative;
  width: 100px;
  height: 40px;
  background: #7fffd4;
  border-radius: 5px;
  margin-right: 50px;
}
.guid-left > em {
  transform: translate(-7px, 3px) rotate(-90deg) scale(1, 2);
  display: block;
  border: 6px solid;
  width: 0;
  height: 0;
  border-color: transparent transparent black;
  position: absolute;
  top: 30%;
  left: 44%;
}
.guid-right {
  position: relative;
  width: 100px;
  height: 40px;
  background: #7fffd4;
  border-radius: 5px;
}
.guid-right > em {
  transform: translate(7px, 3px) rotate(90deg) scale(1, 2);
  display: block;
  border: 6px solid;
  width: 0;
  height: 0;
  border-color: transparent transparent black;
  position: absolute;
  top: 30%;
  left: 45%;
}
.button-main {
  width: 400px;
  position: absolute;
  left: 105%;
  top: 10%;
  width: 400px;
  height: auto;
}
.header-next {
  width: 400px;
  height: 40px;
  background: #7fffd4;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}
.context {
  width: 398px;
  height: 150px;
  border: 1px solid #7fffd4;
}
.header-fraction {
  width: 400px;
  height: 40px;
  background: #7fffd4;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}
.fraction {
  width: 398px;
  height: 50px;
  border: 1px solid #7fffd4;
  text-align: center;
  line-height: 50px;
}
.operating {
  width: 398px;
  height: 200px;
  border: 1px solid #7fffd4;
  text-align: center;
  line-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.start {
  width: 70px;
  height: 70px;
  line-height: 70px;
  background: #7fffd4;
  border-radius: 100px;
  box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.8);
  position: relative;
}
.start::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}
.start::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}
.smain {
  margin: 0 auto;
}
.active {
  width: 70px;
  height: 70px;
  line-height: 70px;
  background: #7fffd4;
  border-radius: 100px;
  box-shadow: inset 0 5px 10px hsla(0, 0%, 100%, 0.8);
}

@media (max-width: 500px) {
  b {
    width: 25px;
    height: 25px;
    margin: 0 4px 4px 0;
    display: block;
    border: 2px solid #f8f8ff;
    float: left;
  }
  .window {
    width: 93%;
  }
  .header-next {
    display: none;
  }
  .button-main {
    display: none;
  }
  .context {
    display: none;
  }
  .right {
    display: none;
  }
  b::after {
  
    width: 19px;
    height: 19px;

    margin: 3px auto;
}
}
</style>
