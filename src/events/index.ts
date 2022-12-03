import { BusStructure } from './structure/bus.structure';
import { EventBus } from './event.bus';

export class EventBusConnection {
  static eventBusInstance: any = null;

  private constructor() {}

  static getInstance() {
    if (this.eventBusInstance === null) {
      console.log('tested');
      this.eventBusInstance = new EventBus();
    }

    return this.eventBusInstance;
  }
}
