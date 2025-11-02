import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";

export default function Contact() {
  return (
    <Section>
      <Container className="max-w-2xl">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Get In Touch</h1>
          <p className="mt-2 text-white/80">
            Ready to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </header>

        {/* Contact Form */}
        <form action="https://formspree.io/f/xpwooeag" method="POST" className="mt-12 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition"
              placeholder="What's this about?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition resize-vertical"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          {/* Hidden field for form identification */}
          <input type="hidden" name="_subject" value="New contact from portfolio website" />

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" variant="primary" size="lg">
              Send Message
            </Button>
          </div>
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:christopher.brandon.hayes@gmail.com" className="text-white/80 hover:text-white transition">
              your.email@example.com
            </a>
            <span className="hidden sm:block text-white/30">•</span>
            <a href="tel:+1-314-223-0739" className="text-white/80 hover:text-white transition">
              (314) 223-0739)
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
