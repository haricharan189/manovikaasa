import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  "Anxiety and stress",
  "Depression and mood disorders",
  "Life transitions and adjustments",
  "Relationship issues and family dynamics",
  "Trauma and PTSD",
  "Grief and loss",
  "Self-esteem and personal development",
  "ADHD",
  "Behavioural issues in children & adolescents"
];

const Services = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-semibold mb-8 text-slate-800">Our Services</h1>

          <div className="mb-12">
            <p className="text-slate-600 text-lg mb-8">
              Catering to diverse populations, including children, adolescents, adults, and families, 
              providing therapeutic support for individuals experiencing:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-slate-700">{service}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;