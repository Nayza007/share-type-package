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

Or pin a version tag:

```bash
npm install git+https://github.com/Nayza007/share-type-package.git#v1.0.0
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
2. Create a git tag for the version you want to share
3. Install from GitHub with `npm install git+https://github.com/Nayza007/share-type-package.git#v1.0.0`

## Versioning

- `v0.1.0`: legacy DTO package before the zod-based schema flow
- `v1.0.0`: zod schema version with `nestjs-zod` and Swagger metadata support

Recommended git tag flow:

```bash
git tag v1.0.0
git push origin v1.0.0
```

If you want to preserve the old version for existing users, tag the previous commit too:

```bash
git tag v0.1.0 <old-commit-sha>
git push origin v0.1.0
```
