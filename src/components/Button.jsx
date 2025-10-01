// export default function Button({
//     bgColor = "bg-orange-400",
//     children,
//     className = "",
//     type = "",
//     ring=true,
//     underline=false,
//     ...props
// }) {
//     return (
//         <button 
//             className={`focus:outline-none ${ring && `focus:ring-2`} ${underline && `focus:underline`} transition duration-200 ease-in-out rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed appearance-none ${bgColor} ${className}`} 
//             type={type}
//             {...props}
//         >
//             {children}
//         </button>
//     )    
// }
export default function Button({
  bgColor = "bg-orange-400",
  children,
  className = "",
  type = "button",
  ring = true,
  underline = false,
  ...props
}) {
  return (
    <button
      type={type}
      className={`appearance-none transition-all duration-200 ease-in-out rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none  
        ${ring ? "focus:ring-2" : ""}
        ${underline ? "focus:underline" : ""}
        ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
