import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    return new GameSaving(JSON.parse(await json(await read())));
  }
}

// static async load() {
//   const data = await read()
//   const res = await json(data)
//   return new GameSaving(JSON.parse(res))
