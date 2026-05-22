# Amanotes

Amanotes is an internal employee recognition and rewards platform designed to help teams celebrate achievements, encourage collaboration, and create a positive workplace culture.

## What this project includes

This repository contains the backend for the Amanotes platform, focused on:

- Peer recognition with point-based kudos
- Live kudo feed for real-time social recognition
- User profiles and budgeting
- Reward catalog and redemptions
- Notifications and realtime updates
- Media uploads for kudos and comments

## Core concepts

### Peer Recognition
Employees can send kudos to colleagues with:
- Points from 10 to 50
- A required message
- A core value tag such as teamwork or ownership
- Optional media attachments
- Optional tagged users

### Live Kudo Feed
The live feed provides a social timeline where users can:
- Create feed posts
- React with emojis
- Comment with text or media
- Receive realtime notifications when tagged

### Rewards
Users can redeem points for rewards from a catalog. The system keeps track of:
- Reward inventory
- Redemption history
- Redemption status
- User point balance

## Tech stack

- NestJS
- Prisma
- PostgreSQL
- JWT Authentication
- Socket.IO
- Swagger
- Cloudinary

## Repository structure

```text
backend/
  src/
  prisma/
  README.md
```

## Backend features

- Authentication and authorization
- User profile management
- Peer recognition flow
- Live feed flow
- Notifications
- Rewards and redemption workflow
- Point ledger and monthly giving budget
- Realtime socket notifications
- File uploads to Cloudinary

## Getting started

For backend setup and API details, see the backend README:

- `backend/README.md`

## Purpose

This project is built to demonstrate a complete internal recognition workflow for Amanotes, with a clean separation between:
- point-based peer recognition
- public live feed interactions
- rewards redemption
- realtime engagement

## Notes

This repository currently focuses on the backend implementation and API design. Frontend integration can be built on top of these endpoints using Swagger or any client application.
