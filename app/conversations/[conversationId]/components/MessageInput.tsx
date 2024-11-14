"use client";

import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="
  text-black font-light py-2 rx-4 bg-neutral-100 w-full pl-12 focus:outline-none 
  "
      />
    </div>
  );
};

export default MessageInput;
