import { CallbackStructure } from './callback.structure';
import { EventStructure } from './event.structure';

export interface BusStructure {
  register(eventName: string, callback: CallbackStructure): void;
  notify(eventName: string, event: EventStructure): void;
}
