import Loader from "./Loader";

const VARIANT_STYLES = {
  primary: "bg-primary text-white border-transparent hover:bg-blue-700",
  secondary: "bg-white text-primary border-primary hover:bg-blue-50",
  outline: "bg-transparent text-primary border-primary hover:bg-blue-50",
  light: "bg-light text-primary border-transparent hover:bg-blue-100",
};

const SIZE_STYLES = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  label,
  variant = "primary",
  size = "md",
  fullWidth = false,
  pending = false,
  disabled = false,
  icon,
  iconPosition = "left",
  type = "button",
  className = "",
  ...props
}) => {
  const isIconOnly = icon && !label;

  return (
    <button
      type={type}
      disabled={disabled || pending}
      className={`flex justify-center items-center border rounded-lg transition-all duration-150
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${fullWidth ? "w-full" : "max-w-fit"}
        ${disabled || pending ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
      aria-busy={pending}
      {...props}
    >
      {pending ? (
        <Loader size={size} />
      ) : (
        <>
          {icon && iconPosition === "left" && !isIconOnly && (
            <span className="mr-2 flex items-center">{icon}</span>
          )}
          {icon && isIconOnly && (
            <span className="flex items-center justify-center">{icon}</span>
          )}
          {label && <span>{label}</span>}
          {icon && iconPosition === "right" && !isIconOnly && (
            <span className="ml-2 flex items-center">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
