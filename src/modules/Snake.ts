class Snake {
  // 元素
  head:HTMLElement
  bodies:HTMLCollection //动态集合
  // 获取容器
  element:HTMLElement
  constructor() {
    this.element=document.getElementById("snake")
    // const snake = document.getElementById("snake")
    this.head = document.querySelector("#snake>div") as HTMLElement;
    this.bodies=document.getElementById("snake").getElementsByTagName("div")
  
    
  }
  // 获取坐标
  get X(){
    return this.head.offsetLeft
  }
  get Y(){
    // console.log(this.head.offsetHeight,"-----");
    
    return this.head.offsetTop
  }
  set X(value){
    if (this.X===value) {
      return
    }
    if (value >= 0 && value <= 290) {
      this.head.style.left = value + "px"
      this.moveBody()
    }else{
      throw new Error("亡强");
      
    }
  }
  set Y(value) {
    if (this.Y === value) {
      return;
    }
    if (value >= 0 && value <= 290) {
      this.head.style.top = value + "px";
      this.moveBody()
    } else {
      throw new Error("亡强");

    }
    
    
  }
  // 增加身体
  addBody(){
    this.element.insertAdjacentHTML("beforeend",`<div id="${this.bodies.length-1}"></div>`)
    console.log(this.bodies);
    
  }
  //  身体移动
moveBody(){
  
  // 获取身体
  for (let i = this.bodies.length-1; i >0; i--) {
    console.log(i,"---i");
    
    let x = (this.bodies[i - 1] as HTMLElement).offsetLeft ;
    let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
    (this.bodies[i] as HTMLElement).style.left=x+"px";
      (this.bodies[i] as HTMLElement).style.top=y+ "px"
  }
}

}
export default Snake