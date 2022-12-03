import { CallbackStructure } from '../structure/callback.structure';
import { EventStructure } from '../structure/event.structure';

export class NotifyKafkaEvent implements CallbackStructure {
  execute(event: EventStructure) {
    console.log('notify kafka: ', event);
  }
}
