import { Github } from "lucide-react";
import SmartLink from "./SmartLink";

export default function SiteFooter({ footer, navigation, site }) {
  return (
    <footer className="bootcamp-footer">
      <div className="footer-main">
        <div><a className="footer-brand" href="#top"><span className="brand-mark">{site.mark}</span><strong>{site.name}</strong></a><p>{footer.mission}</p></div>
        <div><span>{footer.navigationLabel}</span>{navigation.filter(item => item.footer).map(item => <SmartLink key={item.href} href={item.href}>{item.label}</SmartLink>)}</div>
        <div><span>{footer.connectLabel}</span>{footer.connectLinks.map(item => <SmartLink key={item.href} href={item.href} external={item.external}>{item.label}</SmartLink>)}</div>
        <div className="footer-code"><Github size={22} /><code>{footer.techStack}</code><small>{footer.techNote}</small></div>
      </div>
      <div className="footer-bottom"><span>{footer.copyright}</span><span>{footer.location}</span></div>
    </footer>
  );
}
