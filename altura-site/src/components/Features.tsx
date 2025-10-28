import { Code, Bot, PaintBrush } from "lucide-react";

const features = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Web Development",
    description:
      "We build custom websites and web applications tailored to your specific needs.",
  },
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "AI Chatbot Development",
    description:
      "We create intelligent AI-powered chatbots that can automate your customer support and sales processes.",
  },
  {
    icon: <PaintBrush className="w-12 h-12 text-primary" />,
    title: "Creative Web Design",
    description:
      "We design beautiful and engaging websites that will capture your audience's attention.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center font-heading">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-secondary p-8 rounded-md text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold font-heading">
                {feature.title}
              </h3>
              <p className="mt-2 text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
