# Xccelerate Group 2 Project (local)

This is a simple quiz application built with Express.js and PostgreSQL. It allows users to take quizzes and keeps track of their scores.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features

- User authentication (Passport JS local strategy)
- Take quizzes and see your scores
- View quiz results and correct answers

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/SteffanCal/groupproject-local-.git
```

2. Navigate to the project directory:

```bash
cd groupproject-local-
```

3. Install the dependencies:

```bash
npm install
```

## Usage

Start the server:

```bash
npm run dev
```

Update these variables with your own configuration.

```bash
DATABASE_URL=""
```

1. For schema changes, head to the schema.ts file and edit it, then run the command:

```bash
npm run generate
```

2. Once the schema is generated, migrate the database and create the database file (if missing):

```bash
npm run migrate
```


Your app should be running on localhost:8080!
