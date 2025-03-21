import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Clock, Video } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/1u4zNsJ4T44zxKfV7"; // Replace with actual Google Form URL

const Book = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4">Book a Session</h1>
            <p className="text-muted-foreground">
              Take the first step towards emotional well-being. Schedule your
              consultation today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <CalendarDays className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Choose from various available time slots
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Session Duration</h3>
                <p className="text-sm text-muted-foreground">
                  50-minute individual sessions
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Online Options</h3>
                <p className="text-sm text-muted-foreground">
                  Virtual sessions available
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-6">Ready to Begin?</h2>
              <p className="text-muted-foreground mb-8">
                Click below to fill out our intake form and schedule your first
                session. We'll get back to you within 24 hours to confirm your
                appointment.
              </p>
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              >
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Book;