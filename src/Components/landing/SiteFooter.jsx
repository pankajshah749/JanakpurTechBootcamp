import { Github } from "lucide-react";
import SmartLink from "./SmartLink";

export default function SiteFooter({ footer, navigation, site, homeLinkPrefix = "" }) {
  const getLink = href => homeLinkPrefix && href.startsWith("#") ? `${homeLinkPrefix}${href}` : href;
  return (
    <footer className="bootcamp-footer">
      <div className="footer-main">
        <div><a className="footer-brand" href="#top"><img className="footer-logo" src="/images/bootcampLogo.png" alt={site.name} /></a><p className="footer-tagline">{footer.tagline}</p><p>{footer.mission}</p></div>
        <div><span>{footer.navigationLabel}</span>{navigation.filter(item => item.footer).map(item => <SmartLink key={item.href} href={getLink(item.href)}>{item.label}</SmartLink>)}</div>
        <div><span>{footer.connectLabel}</span>{footer.connectLinks.map(item => <SmartLink key={item.href} href={item.href} external={item.external}>{item.label}</SmartLink>)}</div>
        <div className="footer-code"><Github size={22} /><code>{footer.techStack}</code><small>{footer.techNote}</small></div>
      </div>
      <div className="footer-bottom"><span>{footer.copyright}</span><span>{footer.location}</span></div>
    </footer>
  );
}
