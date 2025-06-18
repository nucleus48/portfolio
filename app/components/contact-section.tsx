import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <h2>CONTACT ME</h2>

      <Form action="/" className="space-y-8">
        <div className="flex flex-row *:flex-1 gap-4 md:gap-8">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input placeholder="Your Name" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="Your@gmail.com" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Message</Label>
          <Textarea className="min-h-32" placeholder="Message" />
        </div>
        <Button size={"lg"} className="w-full">
          Submit
        </Button>
      </Form>
    </section>
  );
}
