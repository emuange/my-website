import "./Button.css";

export default function Button({ href, children }) {
  return (
    <a className="button" href={href}>
      {children}
    </a>
  );
}