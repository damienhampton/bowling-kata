export interface GameInterface {
  roll(pins: number): void;
  score(): number;
}

const frames = 10;

export class Game implements GameInterface {
  private rolls: number[] = [];
  private currentRoll = 0;
  
  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
  score(): number {
    let score = 0;
    let rollIndex = 0;
    for(let frameIndex = 0; frameIndex < frames; frameIndex++) {
      score ;

      if(this.isStrike(rollIndex)) {
        score += 10 + this.strikeBonus(rollIndex);
        rollIndex += 1;
        continue;
      }else if(this.isSpare(rollIndex)) {
        score += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      }else{
        score += this.sumOfBallsInFrame(rollIndex);
        rollIndex += 2;
      }
    }
    return score;
  }
  private isSpare(rollIndex: number): boolean {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }
  private spareBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 2]
  }
  private strikeBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
  private sumOfBallsInFrame(rollIndex:number): number {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === 10;
  }
}