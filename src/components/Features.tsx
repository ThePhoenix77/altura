import { Code2, BotMessageSquare, Palette } from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-12 h-12 text-primary" />,
    title: "Custom Web Development",
    description:
      "We build custom websites and web applications tailored to your specific needs.",
  },
  {
    icon: <BotMessageSquare className="w-12 h-12 text-primary" />,
    title: "AI Chatbot Development",
    description:
      "We create intelligent AI-powered chatbots that can automate your customer support and sales processes.",
  },
  {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: "Creative Web Design",
    description:
      "We design beautiful and engaging websites that will capture your audience's attention.",
  },
];

export default function Features() {
  const delays = ["animate-delay-0", "animate-delay-100", "animate-delay-200"];
  return (
    <section id="features" className="py-20 animate-slide-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-heading">
          What We Do
        </h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-center text-foreground/80">
          We specialize in creating modern, high-performance web solutions that
          drive results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`p-8 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-elevated animate-fade-in ${delays[i]}`}>
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold font-heading">{feature.title}</h3>
              <p className="mt-2 text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
