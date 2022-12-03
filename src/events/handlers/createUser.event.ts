import { CallbackStructure } from '../structure/callback.structure';
import { EventStructure } from '../structure/event.structure';

export class CreateUserEvent implements CallbackStructure {
  execute(event: EventStructure) {
    console.log('new event:', event);
  }
}
