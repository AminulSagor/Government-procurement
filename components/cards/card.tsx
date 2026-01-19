interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className = "p-5" }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg border border-primary-color/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
