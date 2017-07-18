# Migrations Snapshot (447)

## Skills

- Can explain what a database migration is, and why we need it
- Can take an existing SQL schema, and convert them into migrations
- Can create automated scripts to `reset`, `migrate`, and `seed` the database

## Description

You will start by cloning a starter app which already has a database schema defined. You will then modify the project such that the schema will be managed by database migrations.

### Setting Up Your Snapshot

1. Fork & clone the [Contacts starter repo](https://github.com/GuildCrafts/contacts-snapshot-starter)
1. Rename the fork to `migrations-snapshot`
1. Follow the install instructions in teh README of the starter repo

## Specifications

- Use the [node-pg-migrate](https://github.com/theoephraim/node-pg-migrate) to add migrations to your project
- Using the library above to create a migration for the SQL defined in the `src/db/schema/schema.sql` file
- An npm script `db:migrate` exists which migrates the db to the latest migration
- An npm script `db:init` exists which creates the database and migrates the database to the latest migration
- An npm script `db:migration:create` exists which lets you create a new migration
- Create a migration for a table called `user`. Table should contain the following fields
  - id
  - first_name
  - last_name
  - email