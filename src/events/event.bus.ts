import { BusStructure } from './structure/bus.structure';
import { CallbackStructure } from './structure/callback.structure';
import { EventStructure } from './structure/event.structure';

export class EventBus implements BusStructure {
  private eventsSub: { [eventName: string]: CallbackStructure[] } = {};

  register(eventName: string, callback: CallbackStructure) {
    if (!this.eventsSub[eventName]) {
      this.eventsSub[eventName] = [];
    }

    this.eventsSub[eventName].push(callback);
  }

  notify(eventName: string, event: EventStructure) {
    if (this.eventsSub[eventName]) {
      this.eventsSub[eventName].forEach((callback) => callback.execute(event));
    }
  }
}
