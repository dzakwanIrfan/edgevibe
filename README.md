# EdgeVibe: Break the Frame

**Unleash Your Edge**  
Twist, shift, and filter your way to epic visuals that bend reality and redefine creativity with every pixel you touch. EdgeVibe is a bold, web-based image processing tool built with React and Vite, delivering gritty geometric operations and kernel-based filters right in your browser.

---

## Features

- **Geometric Moves**: Slide your images with slick X/Y translations.
- **Kernel Filters**: Drop some edge with Emboss, High Pass, and Low Pass effects.
- **Real-Time Preview**: See your vibe come alive as you tweak.
- **Download Your Edge**: Save your edited masterpiece as PNG.
- **Responsive Design**: Keeps it sharp on any screen, with maxed-out previews that never overflow.
- **SPA Routing**: Navigate between Home and About with no reloads, powered by React Router.

---

## Tech Stack

- **React**: Front-end framework for a dynamic UI.
- **Vite**: Lightning-fast build tool and dev server.
- **Tailwind CSS**: Edgy, utility-first styling.
- **React Router**: Smooth, single-page navigation.
- **Canvas API**: Raw image processing power.

---

## Getting Started

### Prerequisites
- Node.js (v16 atau lebih tinggi)
- npm (atau yarn, jika Anda lebih suka)

### Installation

1. **Clone the Repo**
   ```bash
   git clone https://github.com/username/edgevibe.git
   cd edgevibe
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Vibe**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser and feel the edge.

4. **Build for Production** (opsional)
   ```bash
   npm run build
   npm run preview
   ```

---

## Usage

1. **Upload Your Image**: Drop a pic and watch it load into the canvas.
2. **Twist & Shift**: Use the sliders to slide your image in X and Y directions.
3. **Filter It**: Hit a filter button (Emboss, High Pass, Low Pass) and see it transform—buttons turn blue when active.
4. **Download**: Click "Download Image" to grab your edited vibe as a PNG.

### Navigation
- **Home**: `/` - Where the editing magic happens.
- **About**: `/about` - Get the lowdown on EdgeVibe.

---

## Project Structure

```
edgevibe/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ImageUploader.jsx
│   │   ├── ImagePreview.jsx
│   │   ├── GeometricControls.jsx
│   │   └── FilterControls.jsx
│   ├── pages/            # SPA page components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind CSS setup
├── index.html            # HTML entry
├── vite.config.js        # Vite configuration
└── README.md             # You're here
```

---

## Contributing

Wanna vibe with us? Fork this repo, tweak the code, and send a pull request. Keep it edgy, keep it clean.

1. Fork it.
2. Create your feature branch (`git checkout -b feature/your-vibe`).
3. Commit your changes (`git commit -m 'Add some edge'`).
4. Push it (`git push origin feature/your-vibe`).
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. Do your thing, just don’t claim it’s all yours.

---

## Acknowledgements

- Built with grit and caffeine.
- Shoutout to the React, Vite, and Tailwind communities for the tools to break the frame.

---

**EdgeVibe**: Where pixels get a pulse. Ready to twist the vibe? Hit that "Unleash Your Edge" button and dive in.

---
