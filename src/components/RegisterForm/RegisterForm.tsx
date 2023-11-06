import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import {IPlayerNameFormProps} from '../../interfases/IPlayerNameFormProps'
import "./RegisterForm.css";


const RegisterForm: FC<IPlayerNameFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="container_form">
      <input
        placeholder="Enter your name"
        type="text"
        value={name}
        className="input_label"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        required
      />
      <button type="submit" className="btn">
        Start the game
      </button>
    </form>
  );
};

export default RegisterForm;
