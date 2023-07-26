const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-blue-600 hover:bg-blue-800 text-blue-100 rounded-md w-full p-4 mt-8">
      {children}
    </button>
  );
};

export default Button;
