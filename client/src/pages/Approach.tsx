import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Approach = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-semibold mb-8 text-slate-800">Our Approach</h1>

          <div className="space-y-8">
            <div>
              <p className="text-slate-600 mb-6">
                Ashwini Ramanujam follows an integrative therapeutic approach, blending techniques from 
                Cognitive Behavioral Therapy (CBT), Person-Centered Therapy, Solution-Focused Therapy, 
                Psychodynamic therapy, humanistic therapy and others. This allows her to tailor the 
                treatment to individual clients, unique circumstances, strengths and challenges. She works 
                collaboratively with clients to explore and understand their thoughts, feelings, and 
                behaviors, ultimately empowering them to make lasting changes.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-slate-700">Key Benefits</h3>
                <ul className="space-y-4 text-slate-600">
                  <li>• More effective</li>
                  <li>• Relevant treatment experience</li>
                  <li>• Addressing specific needs</li>
                </ul>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-700">Therapeutic Methods</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 text-slate-700">Evidence-Based Approaches</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Cognitive Behavioral Therapy (CBT)</li>
                      <li>• Person-Centered Therapy</li>
                      <li>• Solution-Focused Therapy</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 text-slate-700">Additional Modalities</h4>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Psychodynamic Therapy</li>
                      <li>• Humanistic Therapy</li>
                      <li>• Integrative Approach</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Approach;