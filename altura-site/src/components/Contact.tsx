export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center font-heading">
          Contact Us
        </h2>
        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-secondary p-4 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-secondary p-4 rounded-md"
            />
          </div>
          <textarea
            placeholder="Message"
            className="bg-secondary p-4 rounded-md w-full mt-4"
            rows={5}
          />
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
