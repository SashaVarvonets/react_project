
interface ButtonProps {
    children: React.ReactNode;
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
    onClick: () => void;
}


const Button = ({children, color = "primary", onClick}: ButtonProps) => {
    return (
        <button
            type="button"
            className={"btn btn-" + color}
            onClick={onClick}
        >{children}</button>
    );
};

export default Button;