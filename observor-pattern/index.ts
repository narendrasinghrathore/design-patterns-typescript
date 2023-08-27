export interface Observer {
  update: (newState: string) => void;
}

export interface Subject {
  list: Observer[];

  registerObservor: (observor: Observer) => void;
  notifyAll: (newState: string) => void;
  removeObservor: (observor: Observer) => void;
}
