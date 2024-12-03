import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;
export const Button = ({ ...props }: ButtonProps) => {
  return <button {...props} />;
};
