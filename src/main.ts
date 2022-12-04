import { CreateUserEvent } from './events/handlers/createUser.event';
import { NotifyKafkaEvent } from './events/handlers/notify.kafka.event';
import { SendEmailEvent } from './events/handlers/send.email.event';
import { EventBusConnection } from './events';

const eventBus = EventBusConnection.getInstance();

eventBus.register('event1', new CreateUserEvent());
eventBus.register('event1', new NotifyKafkaEvent());
eventBus.register('event1', new SendEmailEvent());

eventBus.notify('event1', {
  eventData: 232,
  date: new Date(),
});

const eventBus2 = EventBusConnection.getInstance();

eventBus2.register('event2', new CreateUserEvent());
eventBus2.register('event2', new NotifyKafkaEvent());
eventBus2.register('event2', new SendEmailEvent());

eventBus2.notify('event2', {
  eventData: 232,
  date: new Date(),
});
