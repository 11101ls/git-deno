"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0;
        this.level = 1;
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
exports.default = ScorePanel;
