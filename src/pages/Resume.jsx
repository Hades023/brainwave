import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume"
        description="View my professional resume and experience as a UX Designer and Frontend Developer."
        url="/resume"
      />
      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>
          <p className="mt-2 body-default">Link a PDF or list experience here.</p>
        </Container>
      </Section>
    </>
  );
}
