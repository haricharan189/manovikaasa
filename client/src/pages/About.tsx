import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-semibold mb-8 text-slate-800">About Our Practice</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <img
              src="/images/WhatsApp Image 2025-03-17 at 21.57.29.jpeg"
              alt="Ashwini Ramanujam"
              className="rounded-lg shadow-lg h-[500px] object-cover-top w-full"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-700">Professional Profile</h2>
              <p className="text-slate-600 mb-6">
                Ashwini Ramanujam, a seasoned mental health professional with 18+ years of experience, 
                specializes in guiding individuals through psychological challenges with evidence-based 
                therapy and an Indian counseling perspective. Her deep understanding of human behavior 
                and emotional dynamics helps clients build resilience, self-awareness, and coping strategies.
              </p>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-slate-700">Languages</h3>
                  <p className="text-slate-600">
                    Fluent in Kannada, Tamil, Telugu, Hindi, and English, fostering strong connections 
                    across diverse linguistic and cultural backgrounds, ensuring authentic and effective 
                    communication in therapy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-700">Education & Publications</h2>
            <p className="text-slate-600">
              Holding a Master's in Counseling Psychology from Bangalore University, she actively 
              promotes mental health awareness through workshops on stress management, stigma reduction, 
              early intervention, work-life balance, and women's mental health. She is also the author 
              of Counselling Kathegalu, a collection of short stories exploring psychological struggles, 
              stressors, and solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;