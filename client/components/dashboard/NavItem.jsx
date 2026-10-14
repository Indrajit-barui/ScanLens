function NavItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3
        p-3
        rounded-lg
        cursor-pointer
        bg-gray-50
        ${
          active
            ? "bg-red-50 text-red-600"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {text}
      </span>
    </div>
  )
}

export default NavItem;