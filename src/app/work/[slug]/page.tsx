import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { emailLink, projects } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.name ?? "Project not found", description: project?.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex(item => item.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <div id="top"><Navigation /><main id="main" className="case-study">
    <div className="case-intro"><Link href="/#work" className="text-link">← All work</Link><h1>{project.name}</h1><div className="case-summary"><p>{project.category}</p><p>{project.description}</p></div></div>
    <div className={`case-cover tone-${project.background}`}><Image src={project.image} alt={project.imageAlt} width={2000} height={1414} priority sizes="100vw" /></div>
    <section className="case-details section-space" aria-labelledby="brief-title"><h2 id="brief-title" data-reveal>The brief</h2><div><p className="lead" data-reveal>{project.brief}</p><h3 data-reveal>The approach</h3><p data-reveal>{project.approach}</p><h3 data-reveal>What I worked on</h3><ul>{project.deliverables.map(item => <li key={item} data-reveal>{item}</li>)}</ul><p className="case-tools">{project.tools}</p><p className="case-context">{project.context}</p></div></section>
    {"secondaryImage" in project && <figure className="case-secondary"><Image src={project.secondaryImage} alt={project.secondaryAlt} width={2000} height={1414} sizes="100vw" /><figcaption>{project.secondaryAlt}</figcaption></figure>}
    {project.slug === "preye" && <section className="case-videos section-space" aria-labelledby="video-title">
      <h2 id="video-title">Stories in motion.</h2>
      <div className="case-video-grid">
        {[
          { src: "/Videos/Amara%20introduction.mp4", title: "Amara introduction" },
          { src: "/Videos/Woman_speaking_in_executive_office_20261014121101.mp4", title: "Executive office scene" },
        ].map((video, index) => <figure key={video.src}>
          <video controls playsInline preload="none" poster={`/images/preye-video-${index + 1}.jpg`} aria-label={video.title}>
            <source src={video.src} type="video/mp4" />
            Your browser does not support video playback. <a href={video.src}>Download {video.title}</a>.
          </video>
          <figcaption>{video.title}</figcaption>
        </figure>)}
      </div>
    </section>}
    <section className="case-next section-space"><div><h2 data-reveal>Have a project in mind?</h2><a href={emailLink(project.category.toLowerCase())} className="button">Start a conversation <span aria-hidden="true">↗</span></a></div><div><p>Keep exploring</p><Link href={`/work/${next.slug}`} className="next-project">{next.name}</Link></div></section>
  </main><Footer /></div>;
}
