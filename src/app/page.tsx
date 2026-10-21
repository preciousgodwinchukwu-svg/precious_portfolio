import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { ServiceSelector } from "@/components/service-selector";
import { CopyEmail } from "@/components/copy-email";
import { Footer } from "@/components/footer";
import { emailLink, experience, profile, projects } from "@/lib/content";

export default function Home() {
  return <div id="top">
    <Navigation home />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <h1 className="hero-name" id="hero-title"><span className="name-line">Precious</span><span className="sr-only"> Godwin Chukwu</span></h1>
        <div className="hero-bottom">
          <div className="hero-description">
            <p className="hero-role">Social media manager<br />& content strategist.</p>
            <p>I turn your ideas into thoughtful content, a consistent presence, and stories people want to follow.</p>
            <a href="#work" className="button">View my work <span aria-hidden="true">↗</span></a>
            <div className="hero-note"><span>Creative thinking.<br />Structured execution.</span><span>Abuja, Nigeria<br />Working worldwide</span></div>
          </div>
          <div className="hero-picture"><Image src="/images/brand.jpg" alt="Precious Godwin Chukwu wearing a grey blazer against a warm terracotta background" width={1706} height={2560} priority sizes="(max-width: 700px) 100vw, 61vw" /><span className="picture-caption">The person behind the plan.</span></div>
        </div>
      </section>

      <section className="work-section section-space" id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title" data-reveal>Selected work</h2><p data-reveal>A little strategy. A lot of intention.<br />Explore the ideas, and what they became.</p></div>
        <div className="project-list">{projects.map(project => <article className={`project project-${project.slug} tone-${project.background}`} key={project.slug}>
          <Link href={`/work/${project.slug}`} className="project-visual" aria-label={`Explore ${project.name}`}>
            <Image className="project-image" src={project.image} alt={project.imageAlt} width={1600} height={1100} sizes="(max-width: 760px) 100vw, 65vw" />
          </Link>
          <div className="project-description">
            <h3 data-reveal><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
            <p className="project-category" data-reveal>{project.category}</p>
            <p data-reveal>{project.description}</p>
            <Link href={`/work/${project.slug}`} className="text-link" data-reveal>View the project</Link>
          </div>
        </article>)}</div>
        <div className="work-end"><p>There’s more to the story.<br />Explore more video previews on Google Drive.</p><a className="text-link" href="https://drive.google.com/drive/folders/1Fy4LXT2IFcOfTWAhPhzbwuS66EOxPd6N?usp=sharing" target="_blank" rel="noopener noreferrer">Watch video previews</a></div>
      </section>

      <section className="services-section section-space" id="services" aria-labelledby="services-title">
        <div className="section-heading"><h2 id="services-title" data-reveal>Make your next move</h2><p data-reveal>Choose what your brand needs.<br />I’ll bring the ideas and the follow-through.</p></div>
        <ServiceSelector />
        <div className="toolkit" data-reveal><h3>Part of my toolkit</h3><p>Canva, Google Flow, ChatGPT, CapCut, Buffer, Meta Business Suite, Google Workspace, Asana, Trello, Mailchimp, GA4, Make & Zapier.</p></div>
      </section>

      <section className="about-section section-space" id="about" aria-labelledby="about-title">
        <div className="about-intro">
          <div className="about-heading"><h2 id="about-title" data-reveal>Creative mind.<br />Clear plan.</h2><a className="text-link" href="/downloads/precious-godwin-chukwu-cv.pdf" download>Download my CV (PDF)</a></div>
          <div className="about-copy"><p className="lead" data-reveal>I’m Precious, a social media manager and content strategist based in Abuja, creating for brands across borders.</p><p data-reveal>My background in executive support means creative ideas come with a plan, a deadline, and the follow-through to get them out into the world.</p><p data-reveal>From coordinating content teams to developing a digital character named Preye, I bring AI content creation, curiosity and a practical approach to every brief.</p></div>
        </div>
        <div className="scope-stats" aria-label="Selected experience from my CV"><div data-reveal><p className="stat-value">150+</p><p>Content pieces coordinated<br />for an election coverage campaign</p></div><div data-reveal><p className="stat-value">8</p><p>Remote writers managed<br />across editorial workflows</p></div><div data-reveal><p className="stat-value">90 days</p><p>Of content strategy for a business<br />information awareness campaign</p></div></div>
        <div className="experience"><h3 data-reveal>Experience that<br /> backs the ideas.</h3><div className="experience-list">{experience.map(item => <article key={item.company} data-reveal><div className="experience-top"><h4>{item.company}</h4><p>{item.date}</p></div><p className="experience-role">{item.role}</p><p>{item.text}</p></article>)}</div></div>
        <div className="education" data-reveal><h3>Always learning</h3><div><p>B.Sc. Anatomy<br />Enugu State University of Science and Technology</p><p>ALX Virtual Assistant Program · Google AI · Generative AI for Everyone · Google Digital Marketing & E-commerce · Customer Support Fundamentals, Coursera</p></div></div>
      </section>

      <section className="contact-section section-space" id="contact" aria-labelledby="contact-title">
        <div className="section-heading"><h2 id="contact-title" data-reveal>Let’s make it meaningful.</h2><p data-reveal>Tell me about your brand<br />and what you would like to create.</p></div>
        <a href={emailLink()} className="contact-email" data-reveal><span>preciousgodwinchukwu</span><span>@gmail.com</span></a>
        <div className="contact-bottom"><CopyEmail /><div><a href={profile.phoneHref}>{profile.phone}</a><p>{profile.location} · International remote</p></div><a className="button" href={emailLink()}>Start a conversation <span aria-hidden="true">↗</span></a></div>
      </section>
    </main><Footer />
  </div>;
}
