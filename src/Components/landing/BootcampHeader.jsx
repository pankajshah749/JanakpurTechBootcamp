import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import siteData from "../../data/siteData.json";
import SmartLink from "./SmartLink";

export default function BootcampHeader() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const { site, navigation, header, finalCta, hero } = siteData;
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const navigationItems = useMemo(() => navigation.map(item => ({
    ...item,
    href: item.href.startsWith("#") && window.location.pathname !== "/" ? `/${item.href}` : item.href,
  })), [navigation]);
  const startDate = finalCta?.startDate || hero?.startDate;

  useEffect(() => {
    const sectionHrefs = navigationItems.filter(item => item.href.startsWith("#")).map(item => item.href);
    const sections = sectionHrefs
      .map(href => ({ href, el: document.getElementById(href.slice(1)) }))
      .filter(entry => entry.el);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [navigationItems]);

  return (
    <header className="bootcamp-header">
      <a className="brand-lockup" href={currentPath === "/" ? "#top" : "/"} aria-label={`${site.name} home`}>
        <span className="brand-mark" aria-hidden="true">{site.mark}</span>
        <span><strong>{site.name}</strong><small>{site.location}</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationItems.map(item => {
          const isCurrentPage = item.href === currentPath;
          return (
          <SmartLink
            key={item.href}
            href={item.href}
            className={`${activeHref === item.href || isCurrentPage ? "is-active" : ""} ${item.featured && isCurrentPage ? "is-featured" : ""}`.trim()}
            aria-current={isCurrentPage ? "page" : activeHref === item.href ? "true" : undefined}
          >
            {item.label}
          </SmartLink>
          );
        })}
      </nav>
      <SmartLink className="header-cta" href={site.registrationUrl}>
        {startDate && (
          <span className="header-cta-date" aria-hidden="true">
            <em>{startDate.month}</em>
            <strong>{startDate.day}</strong>
          </span>
        )}
        <span className="header-cta-text">{header.ctaLabel} <ArrowRight size={16} /></span>
      </SmartLink>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigationItems.map(item => {
            const isCurrentPage = item.href === currentPath;
            return (
            <SmartLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`${activeHref === item.href || isCurrentPage ? "is-active" : ""} ${item.featured && isCurrentPage ? "is-featured" : ""}`.trim()}
              aria-current={isCurrentPage ? "page" : activeHref === item.href ? "true" : undefined}
            >
              {item.label}
            </SmartLink>
            );
          })}
          <SmartLink href={site.registrationUrl}>{header.mobileCtaLabel}</SmartLink>
        </nav>
      )}
    </header>
  );
}
