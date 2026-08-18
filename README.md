# Monolith Vault 🛡️ 
**A Zero-Knowledge Cryptographic Generator & Real-Time Entropy Analyzer**

Monolith Vault is a robust, client-side web application designed to generate high-entropy cryptographic strings and evaluate password strength in real-time. Built entirely with Vanilla JavaScript (ES6+), HTML5, and CSS3, this project demonstrates advanced DOM manipulation, event-driven programming, and the practical application of Shannon Entropy calculations.

Designed to operate independently as a lightweight utility or as a security module within the broader Monolith (Oculus) ecosystem, the Vault requires no backend infrastructure, ensuring total data privacy. It is optimized for seamless deployment across modern static hosting environments like Netlify or InfinityFree.

---

## ✨ Core Features

### 1. Cryptographically Secure Password Generation
* **True Randomness:** Bypasses the predictable pseudo-random `Math.random()` function in favor of the Web Crypto API (`window.crypto.getRandomValues()`) to ensure cryptographically secure random number generation (CSPRNG).
* **Granular Control:** Users can strictly define the character pool constraints (Uppercase, Lowercase, Numerals, Symbols) and adjust string length dynamically from 8 up to 128 characters.
* **Instantaneous Rendering:** The UI binds directly to state changes, generating new secure strings immediately as slider values or checkbox parameters are adjusted.

### 2. Real-Time Entropy Analysis
* **Live Keystroke Evaluation:** Binds an event listener to the input field to evaluate string strength on every single keystroke without latency.
* **Mathematical Scoring:** Uses logarithmic pool-size calculations to determine true mathematical unpredictability rather than relying solely on arbitrary checklists.
* **Brute-Force Estimation:** Translates raw bit-strength into human-readable offline brute-force time estimates (ranging from "Instantly" to "Millions of Years").

### 3. Zero-Knowledge Architecture
* **100% Client-Side Processing:** The application is entirely self-contained within the browser. No data, payloads, or analytics are ever transmitted to an external server.
* **Stateless Operation:** Passwords are not cached, stored in local storage, or retained in session history, ensuring sensitive data is destroyed the moment the application is closed or refreshed.

---

## 🧮 Theoretical Background: How It Works

The core logic of the Analyzer relies on **Password Entropy**, a concept derived from Information Theory. Entropy measures the inherent unpredictability of a password and is measured in "bits." 

A password's strength is not just about its length; it is a combination of its **Length** ($L$) and the **Pool of Possible Characters** ($R$).

### The Entropy Formula
The exact formula used in the application's backend logic is:
$E = L \times \log_2(R)$

Where:
* **$E$** = Entropy in bits.
* **$L$** = Total number of characters in the password.
* **$R$** = The size of the character pool used.

### Character Pool ($R$) Calculation
The application dynamically calculates $R$ by scanning the input string using Regular Expressions (Regex). It adds to the pool size based on the character sets detected:
* **Lowercase Letters (a-z):** 26 characters
* **Uppercase Letters (A-Z):** 26 characters
* **Numbers (0-9):** 10 characters
* **Symbols (!@#$%...):** ~32 characters

**Example:**
If a user types a 10-character password using only lowercase letters and numbers, the pool size ($R$) is $26 + 10 = 36$. 
The entropy would be: $10 \times \log_2(36) \approx 51.7$ bits.

### Brute Force Estimation Map
The calculated bit value maps to a visual strength indicator and a time-to-crack estimation, assuming a standard offline hardware attack capable of hundreds of billions of guesses per second:
* **< 35 Bits (Weak):** Cracked instantly.
* **35 - 59 Bits (Moderate):** Cracked in minutes to hours.
* **60 - 79 Bits (Strong):** Cracked in months to years.
* **80+ Bits (Uncrackable):** Requires centuries or millennia.

---

## 🛠️ Technical Stack & Architecture

* **Frontend Structure:** Semantic HTML5 ensuring accessibility and logical document flow.
* **Styling & Theming:** CSS3 utilizing CSS Variables for global state management, Flexbox/Grid for responsive scaling, and high-contrast dark mode aesthetics suited for professional security tools.
* **Logic & Interactivity:** Modular Vanilla JavaScript (ES6+). The code is deliberately decoupled into specific domains:
  * `app.js`: Manages global UI state, DOM rendering, and API interactions (like the Clipboard API).
  * `generator.js`: Handles the Web Crypto array logic and character pool concatenation.
  * `analyzer.js`: Executes real-time Regex matching, logarithmic math functions, and dynamic meter width calculations.

---

## ⚙️ Local Development & Setup

Because Monolith Vault operates entirely on the client side, there is no need for Node.js, Webpack, or a local server to test the core functionality.

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/monolith-vault.git](https://github.com/your-username/monolith-vault.git)
