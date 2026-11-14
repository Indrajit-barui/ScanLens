function NavItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3
        p-3
        rounded-lg
        cursor-pointer
        transition-colors duration-200
        ${
          active
            ? "bg-rose-500/15 text-rose-400"
            : "bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {text}
      </span>
    </div>
  );
}

export default NavItem;