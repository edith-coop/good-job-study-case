# Amanotes Backend

Backend API for the Amanotes recognition and rewards system.

## Tech Stack

- NestJS
- Prisma
- PostgreSQL
- JWT Authentication
- Swagger
- Socket.IO
- Cloudinary

## Project Overview

This backend supports two main product flows:

1. **Peer Recognition**
   - Users can send kudos with points
   - Points range is validated from `10` to `50`
   - Mandatory message and core value
   - Supports media attachments
   - Supports tagging users
   - Monthly giving budget is enforced
   - Point ledger is created for audit trail

2. **Live Kudo Feed**
   - Users can create live feed posts
   - Users can list feed items
   - Users can comment and react on feed items
   - Tagged users receive real-time notifications

---

## Main Features

### Authentication

- Register
- Login
- JWT-based protection for private APIs

### Users

- Get current user profile
- Update current user profile
- Get all users
- Return current giving budget
- Return current point balance

### Kudos

The kudos domain is split into two flows:

#### Peer Recognition

- `POST /kudos`
- `GET /kudos/peer-recognition/sent`
- `GET /kudos/peer-recognition/received`

Supports:
- points from `10` to `50`
- required `message`
- required `coreValue`
- optional media
- optional tagged users
- monthly budget validation
- point ledger creation
- notifications to receiver and tagged users

#### Live Kudo Feed

- `POST /kudos/feed`
- `GET /kudos/feed`
- `GET /kudos/feed/:id`
- `POST /kudos/feed/:id/comments`
- `POST /kudos/feed/:id/reactions`

Supports:
- message
- core value
- media attachments
- tagged users
- comments
- reactions
- real-time notifications

### Rewards

- Create reward catalog items
- List rewards
- Get reward detail
- Redeem reward
- List redemptions
- Update redemption status

### Notifications

- List notifications
- Get unread count
- Mark all as read
- Mark selected as read

### Uploads

- Upload image/video files to Cloudinary
- Use returned URL in kudos and comments

### Realtime

- Socket.IO gateway for real-time notifications
- Users join rooms based on `userId`
- Supports notification emit events

---

## Data Model Summary

### Core Models

- `User`
- `Kudo`
- `KudoTag`
- `KudoMedia`
- `KudoComment`
- `CommentMedia`
- `KudoReaction`
- `RewardCatalog`
- `RewardRedemption`
- `PointLedger`
- `Notification`
- `MonthlyGivingBudget`

### Kudo Type

`Kudo` has a `type` field:

- `PEER_RECOGNITION`
- `LIVE_FEED`

This allows the backend to use one core entity while still separating business flows clearly.

---

## API Structure

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Users
- `GET /users`
- `GET /users/me`
- `PATCH /users/me`

### Peer Recognition
- `POST /kudos`
- `GET /kudos/peer-recognition/sent`
- `GET /kudos/peer-recognition/received`

### Live Feed
- `POST /kudos/feed`
- `GET /kudos/feed`
- `GET /kudos/feed/:id`
- `POST /kudos/feed/:id/comments`
- `POST /kudos/feed/:id/reactions`

### Rewards
- `POST /rewards`
- `GET /rewards`
- `GET /rewards/:id`
- `POST /rewards/redeem`
- `GET /rewards/redemptions/all`
- `GET /rewards/redemptions/:id`
- `PATCH /rewards/redemptions/:id/status`

### Notifications
- `GET /notifications`
- `GET /notifications/unread-count`
- `PATCH /notifications/mark-all-read`
- `PATCH /notifications/mark-read`

### Uploads
- `POST /uploads`

---

## Environment Variables

Create a `.env` file inside `backend/`.

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/amanotes?schema=public"
JWT_SECRET="your-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
PORT=3000
```

---

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Generate Prisma client

```bash
npx prisma generate
```

### 3. Apply database schema

```bash
npx prisma db push
```

Or use migrations if preferred:

```bash
npx prisma migrate dev
```

### 4. Run the app

```bash
npm run start:dev
```

---

## Swagger

Once the app is running, open:

```text
http://localhost:3000/docs
```

---

## Important Business Rules

### Peer Recognition

- Sender cannot send points to themselves
- Points must be between `10` and `50`
- Monthly giving budget is enforced
- Budget is tracked separately from point balance

### Tagged Users

- Tagged users cannot contain duplicates
- Sender cannot tag themselves
- Tagged users receive notifications

### Live Feed

- Feed posts are stored as `Kudo` records with `type = LIVE_FEED`
- Feed posts are public by default
- Feed posts do not use points

### Reactions

- A user can have only one reaction per kudo
- Reacting again replaces the previous emoji

---

## Realtime Notifications

The Socket.IO gateway joins users to rooms based on `userId`.

Example room:

```text
user:<userId>
```

Notifications are emitted for:
- kudo received
- tagged user
- comment
- reaction

---

## Notes

- The backend uses a shared `Kudo` model for both peer recognition and live feed.
- The difference between them is handled by the `type` field and separate route groups.
- The codebase is organized so FE can call feed endpoints for live content and peer recognition endpoints for point-based kudos.

---

## Current Backend Modules

- `auth`
- `users`
- `kudos`
- `rewards`
- `notifications`
- `uploads`
- `ledger`
- `realtime`
- `prisma`
- `redis`
- `common`

---

## Suggested Test Flow

1. Register two users
2. Login and authorize Swagger
3. Create peer recognition kudo
4. List sent/received kudos
5. Create live feed post
6. Comment on feed post
7. React on feed post
8. Check notifications
9. Upload media
10. Redeem reward

---

## Status

This backend is structured for a recognition and rewards MVP with:
- clean API separation
- realtime notifications
- audit trail via point ledger
- media support
- rewards redemption flow
