export default function SmartLink({ href, external = false, children, ...props }) {
  const opensNewTab = external || /^https?:\/\//.test(href);
  return (
    <a href={href} target={opensNewTab ? "_blank" : undefined} rel={opensNewTab ? "noreferrer" : undefined} {...props}>
      {children}
    </a>
  );
}
