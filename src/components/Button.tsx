interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="font-display m-2">
      <button className="px-3 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
