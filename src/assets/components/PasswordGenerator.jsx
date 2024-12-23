import React, { useState } from "react";

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeAlphabets, setIncludeAlphabets] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?";
    let characters = "";

    if (includeAlphabets) characters += alphabets;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    if (characters === "") {
      setPassword("Select an option to generate a password.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div>
      <label>
        Password Length:
        <input
          type="number"
          min="1"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeAlphabets}
            onChange={(e) => setIncludeAlphabets(e.target.checked)}
          />
          Include Alphabets
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          Include Special Characters
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <strong>Generated Password:</strong> {password}
      </div>
    </div>
  );
}

export default PasswordGenerator;
