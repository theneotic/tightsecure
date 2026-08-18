# 🛡️ Monolith Vault 
**A Zero-Knowledge Cryptographic Generator & Real-Time Entropy Analyzer**

<div align="center">
  <img src="https://via.placeholder.com/800x400/121212/06b6d4?text=+Animation:+Insert+a+GIF+of+your+app+working+here!" alt="App Demo Animation" width="100%" />
  <br>
  <i>(Tip: Record a quick screen recording of your app using a tool like LICEcap or Giphy and replace the image link above with your `.gif` file!)</i>
</div>

---

## 🎮 What Does This Do? (The Simple Version)

Imagine you are buying a padlock for your bicycle. 

* **A Weak Password** is like a padlock with only 3 numbers on it. A thief could just sit there and guess every combination (001, 002, 003...) until it pops open. 
* **A Strong Password** is like a padlock with 100 dials, where each dial has numbers, letters, and alien symbols. It would take a thief a million years to guess every combination!

**Monolith Vault does two things:**
1. **The Generator:** It builds the ultimate "alien padlock" for you instantly.
2. **The Analyzer:** You can type any password into it, and it acts like a security expert, telling you exactly how long it would take a hacker's supercomputer to guess it.

---

## 📊 How The Analyzer Thinks (Interactive Charts)

GitHub automatically turns the code blocks below into visual charts! 

### 1. The Character Pool Breakdown
When the app calculates how strong your password is, it looks at how many *types* of characters you used. Here is a pie chart of the "Pool Size":

```mermaid
pie title The Password Ingredients (Pool Size)
    "Lowercase Letters (a-z)" : 26
    "Uppercase Letters (A-Z)" : 26
    "Numbers (0-9)" : 10
    "Symbols (!@#$)" : 32
