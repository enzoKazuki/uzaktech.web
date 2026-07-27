[uzaktech.web]

# <img src="public/logo.png" alt="Project logo" width="273">

UZAK is a one-person studio that turns ideas into digital experiences with creativity and passion.

## Overview

This repository contains the frontend for a personal studio website built with Next.js and TypeScript. It includes the app pages, reusable UI components, and the contact message experience.

## Stack

- **Framework:** [Next.js](https://nextjs.org/) (v16.2+)
- **Language:** [TypeScript](https://typescriptlang.org)
- **Styling:** [Styled Components](https://styled-components.com)
- **Deployment:** [Docker](https://docker.com) + [GitHub](https://github.com) on Custom VPS

## Status

This project is currently being deployed and will be live soon.

## Design notes

The UI favors simplicity and personality: minimal animations, a lightweight component approach, and bold shapes/colors. Keep that design direction in mind when contributing.

## Getting Started

Follow these instructions to set up a local copy of the project and run the development environment.

### Prerequisites

- This project uses `npm`, but you can substitute it with `pnpm`, `yarn`, or `bun`.
- For `npm` use cases Node.js (v20.19+) is required

### 1. Clone the Repository

```bash
git clone https://github.com/enzoKazuki/uzaktech.web
cd uzaktech.web
```

### 2. Install Dependencies

```bash
npm install
# or pnpm install / yarn install / bun install
```

### 3. Configure Environment Variables

Create a `.env.development` file in the root directory and populate it with your environment keys. See `.env.example` for reference.

### 4. Run the Development Server

```bash
npm run dev
# or pnpm dev / yarn dev / bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Build & Production

To generate a highly optimized production build of the project, run:

```bash
npm run build
```

To locally preview the production build (simulating server environments):

```bash
npm run start
```

---

## Contributing

Contributions help this project grow and develop.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/CoolFeature`).
3. Commit your Changes (`git commit -m "Add some CoolFeature"`).
4. Push to the Branch (`git push origin feature/CoolFeature`).
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
