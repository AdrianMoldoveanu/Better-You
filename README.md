# Better-You

This repository contains a small static web app (HTML/CSS/JS) that can be packaged as an Android app using Capacitor.

Quick steps to create an Android app from this repo:

1. Install Node.js (16+) and npm.
2. In the project root, install dev dependencies:

```bash
npm install
```

3. Initialize Capacitor (if you prefer to re-run init):

```bash
npx cap init "Better You" com.example.betteryou --web-dir=www
```

4. Add the Android platform:

```bash
npx cap add android
```

5. Open Android Studio to build and run:

```bash
npx cap open android
```

Notes:
- Web assets are in the `www/` folder (copied from the original root files).
- If you change web files, run `npx cap copy` before opening the native project.
- For background timers or native notifications, implement native plugins or use Capacitor Community plugins.
