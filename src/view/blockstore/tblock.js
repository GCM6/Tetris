import { blockType, rotate } from '../page/unit/blockdata'

class TBlock {
    constructor(option) {
        // 如果记录没有方格类型的
       
        this.type = option.type;
        if (!option.rotateIndex) {

            this.rotateIndex = 0;
        } else {
            this.rotateIndex = option.rotateIndex;
        }
        if (!option.shapes) {
            //初始化
            this.shapes = blockType[option.type];
        } else {
            this.shapes = option.shapes;
        }
        if (!option.xy) {
            switch (option.type) {
                case "I": // I
                    this.xy = [0, 3];
                    break;
                case "L": // L
                    this.xy = [-1, 4];
                    break;
                case "J": // J
                    this.xy = [-1, 4];
                    break;
                case "Z": // Z
                    this.xy = [-1, 4];
                    break;
                case "S": // S
                    this.xy = [-1, 4];
                    break;
                case "O": // O
                    this.xy = [-1, 4];
                    break;
                case "T": // T
                    this.xy = [-1, 4];
                    break;
                default:
                    break;
            }

        } else {
            this.xy = option.xy;
           
        }
    }
    // 先获取方块随机的类型，然后作为第二次调用获取fall之后作为参数传入这个构造函数从而得到type和shape一样的返回参数
    nextfall(n = 1) {
        return {
            shapes: this.shapes,
            type: this.type,
            xy: [this.xy[0] + 1, this.xy[1]],
            rotateIndex: this.rotateIndex,
            timeStamp: Date.now()
        };
    }
    // 按左方向键触发的函数
    left() {
        return {
            shapes: this.shapes,
            type: this.type,
            xy: [this.xy[0], this.xy[1] - 1],
            rotateIndex: this.rotateIndex,
            timeStamp: Date.now()
        }
    }
    //按右方向键触发的函数
    right() {
        return {
            shapes: this.shapes,
            type: this.type,
            xy: [this.xy[0], this.xy[1] + 1],
            rotateIndex: this.rotateIndex,
            timeStamp: Date.now()
        }
    }
    // 按上方向键触发的函数
    toprotate() {
        const rotateType = [
            this.xy[0] + rotate[this.type][0][0],
            this.xy[1] + rotate[this.type][0][1]
        ];

        const rotateShape = [];
        this.shapes.forEach(element => {
            element.forEach((it, index) => {
                const item = element.length - index - 1;
                if (rotateShape[item] === undefined) {
                    rotateShape[item] = []
                }
                rotateShape[item].push(it);

                let temp = [...rotateShape[item]]
                rotateShape[item] = temp
            })
        });
        return {
            shapes: rotateShape,
            type: this.type,
            xy: rotateType,
            rotateIndex: this.rotateIndex,
            timeStamp: Date.now()
        }
    }
}

export default TBlock