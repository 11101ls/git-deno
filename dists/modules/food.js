export class Food {
    constructor() {
        // 获取元素赋值
        this.element = document.getElementById("food");
        this.chang();
    }
    // 获取食物坐标
    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop;
    }
    // 产生随机位置
    chang() {
        let coordinateX = Math.round(Math.random() * 29) * 10;
        let coordinateY = Math.round(Math.random() * 29) * 10;
        this.element.style.left = `${coordinateX}px`;
        this.element.style.top = `${coordinateY}px`;
    }
}
export default Food;
