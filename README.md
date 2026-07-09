# muay-share-types

Shared DTO package for Muay services.

## Install

```bash
npm install git+https://github.com/Nayza007/share-type-package.git
```

Or pin a branch:

```bash
npm install git+https://github.com/Nayza007/share-type-package.git#main
```

## Scripts

```bash
npm run build
```

## Usage

```ts
import {
  JoinQueueDtoSchema,
  type JoinQueueDto,
  LockSeatDtoSchema,
  type LockSeatDto,
} from 'muay-share-types';

const joinQueuePayload: JoinQueueDto = JoinQueueDtoSchema.parse({
  eventId: 'evt_1',
});

const lockSeatPayload: LockSeatDto = LockSeatDtoSchema.parse({
  eventId: 'evt_1',
  seatId: 'A1',
});
```

## GitHub usage

1. Push this folder to GitHub
2. Install from GitHub with `npm install git+https://github.com/Nayza007/share-type-package.git#main`
