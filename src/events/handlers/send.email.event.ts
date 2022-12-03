import { CallbackStructure } from '../structure/callback.structure';
import { EventStructure } from '../structure/event.structure';

export class SendEmailEvent implements CallbackStructure {
  execute(event: EventStructure) {
    console.log('send email: ', event);
  }
}
