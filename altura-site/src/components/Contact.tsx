export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-heading">
          Get in Touch
        </h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-center text-foreground/80">
          Have a project in mind? We&apos;d love to hear from you.
        </p>
        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-secondary p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-secondary p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-secondary p-4 rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
          />
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
