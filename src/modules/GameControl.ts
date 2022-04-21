// 控制器  控制所有类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  // 定义属性 
  snake:Snake
  food:Food
  scorePanel:ScorePanel
  // 存储移动方向  按键方向
  direction:string="ArrowRight"
  // 判断是否结束
  isLive=true

  constructor() {
    this.snake=new Snake()
    this.food=new Food()
    this.scorePanel=new ScorePanel()
    this.init()
  }
init(){
  // 绑定键盘事件
  document.addEventListener("keydown", this.keyDownHandle.bind(this))

    this.run()
}
// 键盘响应函数
keyDownHandle(event:KeyboardEvent){
  // 判断值得合法性
  console.log(event.key, this.snake.Y);
  
  const directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
  if (directions.includes(event.key)) {
    this.direction = event.key
  }
  //  directions.includes(event.key) ? event.key:null;//按键名 存储

  // this.direction = event.key
  
  
}
// 控制移动
run(){
  let x=this.snake.X;
  let y=this.snake.Y;
  switch (this.direction) {
    case "ArrowUp":
          y-=10
      break;
    case "ArrowDown":
          y+=10
      break;
    case "ArrowLeft":
          x-=10
      break;
    case "ArrowRight":
          x+=10
      break;
  
    default:
      break;
  }
  this.checkEat(x,y)
  // 抛出错误  
  try {
    this.snake.X = x;
    this.snake.Y = y;
  } catch (e:any) {
    //  e as any
    console.log(e.message);
    // console.log(e.message);

    
    alert(e.message)
    this.isLive=false
  }
   
  
  
  // console.log(this.snake.X,x,this.snake.Y,y);
  
  this.isLive&&setTimeout(() => {
    this.run();
  }, 300-(this.scorePanel.level-1)*30);


}
// 检查食物
checkEat(X:number,Y:number){

  if (this.food.x === X && this.food.y === Y) {
     this.food.chang();
      this.scorePanel.addScore();
      this.snake.addBody();
  
  } 

 
    
  
}

}




export default GameControl