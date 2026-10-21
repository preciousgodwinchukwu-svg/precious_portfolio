import { profile } from "@/lib/content";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-name" aria-hidden="true">Precious</div>
    <div className="footer-row">
      <p>{profile.name}<br />Social media manager & content strategist</p>
      <p>Based in Abuja.<br />Creating across borders.</p>
      <a href="#top">Back to top ↑</a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span>Artwork from my selected portfolio.</span></div>
  </footer>;
}
