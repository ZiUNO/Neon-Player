import {Music} from "./Music";

export enum TONE {
    A, B, C, D,
}

export enum PLAYER {
    Kalimba, MusicBox,
}

export class Player {
    private name: PLAYER;
    private tone: TONE;

    play(music: Music): void {
        console.log("test")
    }
}
