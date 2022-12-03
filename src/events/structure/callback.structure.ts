import { EventStructure } from './event.structure';

export interface CallbackStructure<T = EventStructure> {
  execute(event: T): void;
}
