import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Team"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-slate-800">About Manovikaasa</h2>
            <p className="text-slate-600 mb-6">
              We are dedicated to providing a supportive environment where you can explore your 
              thoughts and feelings freely, working together towards emotional well-being.
            </p>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-slate-700">Our Expertise</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Professional Counseling Services</li>
                  <li>• Evidence-based Therapeutic Approaches</li>
                  <li>• Culturally Sensitive Care</li>
                  <li>• Confidential and Safe Environment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;