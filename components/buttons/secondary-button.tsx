"use client";
interface ButtonPros {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "submit" | "button";
}
const SecondaryButton = ({
  children,
  className = "px-4 py-1 text-base",
  type = "button",
  onClick,
}: ButtonPros) => {
  const handleClick = () => {
    onClick?.();
  };
  return (
    <button
      type={type}
      className={`
        bg-white text-black rounded-md border border-medium-gray
        cursor-pointer
        transition-all duration-150 ease-out
        active:scale-[0.97] active:translate-y-px
        focus:outline-none ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
