class ScorePanel {
  // 限制等级
  maxLevel: number;
  // 
  upScore: number;
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.levelEle = document.getElementById("level");
    this.scoreEle = document.getElementById("score");
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  // 设置加分
  addScore() {
    this.score++;
    this.scoreEle.innerHTML = this.score + "";
    this.score % this.upScore === 0 ? this.levelUp() : {};
  }
  levelUp() {
    this.level < this.maxLevel ? this.levelEle.innerHTML = ++this.level + "" : {};
  }

}

// const scor = new ScorePanel();
// for (let index = 0; index < 120; index++) {

//   scor.addScore();
// }
export default ScorePanel;