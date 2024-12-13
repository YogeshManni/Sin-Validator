# SIN Validation Web App

This is a simple web application for validating Canadian Social Insurance Numbers (SIN) using the **Luhn Algorithm**. Built with **React** and **TypeScript**, the app allows users to input a SIN and check its validity in real time.

## Features

- Input validation to ensure the SIN is exactly 9 digits.
- Implements the **Luhn Algorithm** for accurate SIN validation.
- Dynamic feedback indicating whether the SIN is valid or invalid.
- Styled using **Tailwind CSS** for a clean and modern UI.
- Built with **Ant Design** components for enhanced user experience.

## Tech Stack

- **React** (with TypeScript)
- **Vite** (for fast builds and development)
- **Tailwind CSS** (for styling)
- **Ant Design** (UI components)

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** or **yarn** (for dependency management)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/YogeshManni/Sin-Validator
cd Sin-Validator
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

### 4. Open the App in Your Browser

Once the development server starts, open your browser and navigate to:

```
http://localhost:5173
```

## Project Structure

```
.
├── public/          # Static assets
├── src/             # Source code
│   ├── components/  # Reusable components
│   ├── utils/       # Utility functions (e.g., SIN validation logic)
│   ├── App.tsx      # Main app component
│   └── index.tsx    # Entry point
├── package.json     # Project metadata and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts   # Vite configuration
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.

## How it Works

1. **SIN Input**: The user enters a 9-digit SIN.
2. **Validation**: The app uses a utility function (`isValidSIN`) to check if the SIN follows the rules of the **Luhn Algorithm**.
3. **Feedback**: The app displays whether the SIN is valid or invalid based on the validation result.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## Author

Developed by Yogesh Manni

## Acknowledgments

- [Ant Design](https://ant.design/) for the UI components.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Vite](https://vitejs.dev/) for the fast and modern build tool.

---

Thank you for checking out this project! 🚀
