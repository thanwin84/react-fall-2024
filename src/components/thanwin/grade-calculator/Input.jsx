const Input = ({ type = 'text', ...props }) => {
  return (
    <input
      className="w-full focus:outline-none px-4 py-2 bg-zinc-700 text-slate-300 rounded-md border-2 border-zinc-800 focus:border-blue-300 "
      type={type}
      {...props}
    />
  );
};

export default Input;
