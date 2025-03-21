import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Brain, Sparkles } from "lucide-react";

const services = [
  {
    title: "Individual Therapy",
    description: "One-on-one sessions focused on personal growth and healing",
    icon: Heart,
  },
  {
    title: "Couples Counseling",
    description: "Building stronger relationships through communication and understanding",
    icon: Users,
  },
  {
    title: "Stress Management",
    description: "Learn effective techniques to manage stress and anxiety",
    icon: Brain,
  },
  {
    title: "Personal Growth",
    description: "Discover your potential and achieve your life goals",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-slate-800">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Catering to diverse populations, including children, adolescents, adults, and families, 
            providing therapeutic support for a range of challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition-all duration-200"
            >
              <Card className="h-full border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;