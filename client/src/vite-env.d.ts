/// <reference types="vite/client" />

type Corona = {
  infected: number;
  deceased: number;
  recovered: number;
  quarantined: number;
  tested: number;
  date: Date;
};

type CoronaState = {
  start: Date;
  end: Date;
  data: Corona[];
};

type Store = {
  corona: CoronaState;
};
