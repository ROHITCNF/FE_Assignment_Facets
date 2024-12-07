# Password Generator App

A simple React(Powered with Vite) application that generates random passwords based on user-selected criteria. This app allows users to:
1. Specify the password length.
2. Choose whether to include alphabets, numbers, and special characters.

---

## Features
1. Generate passwords of a user-defined length.
2. Include or exclude:
   - Alphabets (uppercase and lowercase)
   - Numbers
   - Special characters
3. Validates user input to ensure meaningful password generation.



---

## How It Works

### Step 1: Password Length Input
- **File**: `PasswordGenerator.js`
- **Logic**:
  - The user specifies the password length using an input field.
  - The `passwordLength` state is updated based on the input.

---

### Step 2: Include Alphabets and Numbers
- **File**: `PasswordGenerator.js`
- **Logic**:
  - Added two checkboxes:
    - **Include Alphabets**: Controlled by `includeAlphabets` state.
    - **Include Numbers**: Controlled by `includeNumbers` state.
  - A pool of characters (`characters`) is built dynamically based on the selected options:
    - If **Include Alphabets** is checked, `characters` includes uppercase and lowercase letters.
    - If **Include Numbers** is checked, `characters` includes digits (0-9).
  - If no options are selected, a validation message is displayed.

---

### Step 3: Include Special Characters
- **File**: `PasswordGenerator.js`
- **Logic**:
  - Added a third checkbox:
    - **Include Special Characters**: Controlled by `includeSpecialChars` state.
  - If checked, the pool of characters includes special symbols such as `!@#$%^&*()`.
  - The `characters` pool is built dynamically to reflect all selected options.

---

### Random Password Generation
- **File**: `PasswordGenerator.js`
- **Logic**:
  - Loops through the desired `passwordLength`.
  - Picks a random index from the `characters` pool in each iteration using:
    ```javascript
    const randomIndex = Math.floor(Math.random() * characters.length);
    ```
  - Appends the randomly selected character to the `generatedPassword`.

---

## Validation
1. **Empty Character Pool**:
   - If no checkboxes are selected, the app displays:
     ```
     Select an option to generate a password.
     ```
2. **Password Length**:
   - Only numbers greater than 0 are accepted for the password length.

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ROHITCNF/FE_Assignment_Facets.git
2. Install dependencies : 
    ```bash 
    npm install
3. Start Dev Server :
    ```bash
    npm run dev
4. Create Production build :
  ```bash
  npm run build           



