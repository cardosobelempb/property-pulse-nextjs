# 🧩 Exemplo Prático de Uso com DomainEvents

```ts
import { DomainEvents } from "../domain-events";
import { UserCreatedEvent } from "../events/user-created.event";
import { DomainEventHandler } from "./DomainEventHandler";

export class SendWelcomeEmailHandler extends DomainEventHandler {
  setupSubscriptions(): void {
    DomainEvents.register(
      (event: UserCreatedEvent) => this.execute(event),
      UserCreatedEvent.name
    );
  }

  private execute(event: UserCreatedEvent) {
    console.log("Enviar email para", event.email);
  }
}

```

# 🚀 Exemplo de Bootstrap na aplicação

```ts
const handlers = [
  new SendWelcomeEmailHandler(),
  new SyncUserToCRMHandler(),
  new AddUserToAnalyticsHandler(),
];

handlers.forEach(h => h.setupSubscriptions());

```