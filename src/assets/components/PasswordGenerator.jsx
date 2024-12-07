import React, { useState } from "react";

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * alphabets.length);
      generatedPassword += alphabets[randomIndex];
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
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <strong>Generated Password:</strong> {password}
      </div>
    </div>
  );
}

export default PasswordGenerator;
