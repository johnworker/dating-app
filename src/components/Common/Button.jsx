export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
