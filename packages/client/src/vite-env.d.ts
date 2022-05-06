/// <reference types="vite/client" />

type Corona = {
  infected: number;
  deceased: number;
  recovered: number;
  quarantined: number;
  tested: number;
};

type CoronaState = {
  start: Date;
  end: Date;
  data?: Corona;
};

type Store = {
  corona: CoronaState;
};
