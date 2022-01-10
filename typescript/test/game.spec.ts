import { Game } from "game";

let g: Game;

beforeEach(() => {
  g = new Game();
})

function rollMany(times: number, pins: number){
  for(let i = 0; i < times; i++) {
    g.roll(pins);
  }
}

function rollSpare(){
  g.roll(5);
  g.roll(5);
}

function rollStrike(){
  g.roll(10);
}

test('gutter game', () => {
  rollMany(20, 0);
  expect(g.score()).toBe(0);
})

test('game of ones', () => {
  rollMany(20, 1);
  expect(g.score()).toBe(20);
})

test('one spare', () => {
  rollSpare();
  g.roll(3);
  rollMany(17, 0);
  expect(g.score()).toBe(16);
})

test('one strike', () => {
  rollStrike();
  g.roll(3);
  g.roll(3);
  rollMany(16, 0);
  expect(g.score()).toBe(22);
})

test('perfect game', () => {
  rollMany(12, 10);
  expect(g.score()).toBe(300);
})
