# Amanotes Frontend

Frontend for the Amanotes internal recognition and rewards system.

## Overview

This app provides a modern UI for:

- Authentication
- Kudo feed browsing
- Creating and reacting to feed posts
- Viewing feed detail pages
- Sending peer recognition
- Notifications with realtime socket updates
- Reward redemption
- Profile management

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- Socket.IO client

## Features Implemented

### Authentication

- Login and register UI
- Persistent auth token and cached user profile in `localStorage`
- Protected app routes after login

### Feed

- Feed list page
- Feed composer for creating live kudos posts
- Feed detail page
- Reactions UI with custom reaction picker
- Comments UI with support for:
  - text
  - image upload
  - video upload
- Media preview for attached content
- Multi-user tagging in feed composer

### Peer Recognition

- Dedicated peer recognition page
- Sent and received kudos lists
- Send points form for creating peer recognition posts
- Supports:
  - message
  - tags for multiple users
  - image/video attachment
- Attachment upload loading state
- Form validation before sending

### Notifications

- Notifications list page
- Unread count display
- Realtime Socket.IO updates
- Auto refresh when notification events arrive
- Mark all as read action

### Rewards

- Reward redemption page
- Backend-driven reward list
- Redeem reward action
- Redemption history display
- Remaining points summary

### Profile

- Profile page
- Update full name
- Update department
- Upload avatar image
- Giving budget display
- Point balance display

### Shared UI

- Responsive sidebar navigation
- Active route styling
- Realtime unread badge in sidebar
- Loading skeletons
- Clean card-based layout

## API Integration

The frontend talks to the backend through the following main areas:

- `GET /auth/*`
- `GET /users/me`
- `GET /users`
- `GET /uploads`
- `GET /kudos/feed`
- `GET /kudos/feed/:id`
- `POST /kudos/feed/:id/comments`
- `POST /kudos/feed/:id/reactions`
- `GET /kudos/peer-recognition/sent`
- `GET /kudos/peer-recognition/received`
- `POST /kudos`
- `GET /notifications`
- `GET /notifications/unread-count`
- `PATCH /notifications/mark-all-read`
- `GET /rewards`
- `POST /rewards/redeem`
- `GET /rewards/redemptions/all`

## Realtime

The app connects to the backend Socket.IO gateway and listens for:

- `notification`
- `notification.read`
- `kudo.created`

This is used to refresh notifications and unread counters in realtime.

## Folder Structure

- `src/App.tsx` – app routing and auth layout
- `src/api.ts` – API client and shared types
- `src/components/` – shared UI pieces
- `src/routes/` – page-level views
- `src/lib/socket.ts` – Socket.IO client helper

## Local Development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Notes

- The app expects the backend to run on `http://localhost:3000`
- Auth token is read from `localStorage` as `accessToken`
- Auth user cache is stored in `localStorage` as `authUser`
- Some UI values are optimistic/defaulted to keep the MVP smooth

## Recent Cleanup

The frontend was cleaned up to remove unused boilerplate components and utilities, and shared loading helpers were inlined where needed to keep the codebase simpler.
