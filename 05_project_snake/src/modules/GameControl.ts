// 引入其他的类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器, 控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 记分牌
  scorePanel: ScorePanel;
  // 创建一个属性来存储蛇的移动方向 (也就是按键的方向)
  direction: string = '';
  // 创建一个属性用来记录游戏是否结束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();

    this.init();
  }

  // 游戏的初始化方法, 调用后游戏即开始
  init() {
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  // 创建一个键盘按下的响应函数
  /**
   * ArrowRight Right
     ArrowLeft Left
     ArrowDown Down
     ArrowUp Up
   */ 
  keydownHandler(event: KeyboardEvent) {
    // 修改 direction 属性
    this.direction = event.key;
  }

  // 控制蛇移动的方法
  run() {
    /**
     * 根据方向 (this.direction) 来使蛇的位置改变
     * 向上 top 减小
     * 向下 top 增加
     * 向左 left 减小
     * 向右 left 增加
     */
    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改 X, Y值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    // 检测蛇是否吃到食物
    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      // 进入到catch, 说明出现了异常, 游戏结束, 弹出提示信息
      alert(e.message + ' GAME OVER!');
      // 将 isLive 设置为 false
      this.isLive = false;
    }

    // 开启一个定时器
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level-1)*30);
  }

  // 定义一个方法, 用来检测蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (this.food.X === X && this.food.Y === Y) {
      console.log('蛇吃到食物了!');
      // 食物的位置要进行重置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇要增加一节
      this.snake.addBody();
    }
  }
}

export default GameControl;
