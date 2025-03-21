import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative bg-background py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-4">
            Manovikaasa
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            It's okay to seek help
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            With 18+ years of experience in mental health, we provide evidence-based therapy 
            and an Indian counseling perspective to help you build resilience, 
            self-awareness, and effective coping strategies.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Get in Touch
              </Button>
            </Link>
            <Link href="/book">
              <Button size="lg" variant="outline" className="rounded-full">
                Book a Session
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;