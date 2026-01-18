"use client";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "button";
}

const PrimaryButton = ({
  children,
  className = "px-4 py-2 text-base",
  type = "button",
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        bg-primary-color text-white rounded-md
        cursor-pointer
        transition-all duration-150 ease-out
        hover:brightness-110
        active:scale-[0.97] active:translate-y-px
        focus:outline-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
