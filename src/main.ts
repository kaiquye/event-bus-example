import { CreateUserEvent } from './events/handlers/createUser.event';
import { NotifyKafkaEvent } from './events/handlers/notify.kafka.event';
import { SendEmailEvent } from './events/handlers/send.email.event';
import { EventBusConnection } from './events';

const eventBus = EventBusConnection.getInstance();

eventBus.register('teste', new CreateUserEvent());
eventBus.register('teste', new NotifyKafkaEvent());
eventBus.register('teste', new SendEmailEvent());

eventBus.notify('teste', {
  eventData: 232,
  date: new Date(),
});

const eventBus2 = EventBusConnection.getInstance();

eventBus2.register('teste', new CreateUserEvent());
eventBus2.register('teste', new NotifyKafkaEvent());
eventBus2.register('teste', new SendEmailEvent());

eventBus2.notify('teste', {
  eventData: 232,
  date: new Date(),
});
