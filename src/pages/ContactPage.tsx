import { Mail, Github, Linkedin, Send, Terminal, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Wait for EmailJS to be available
      const emailjs = (window as any).emailjs;
      
      if (!emailjs) {
        throw new Error("EmailJS not loaded. Please refresh the page and try again.");
      }
      
      console.log("Sending email with data:", formData);
      
      // Send email using EmailJS with proper initialization
      const response = await emailjs.send(
        "service_xq77kz9", // Replace this with your actual EmailJS service ID
        "template_bq62xk8", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        "rLB--UcvgUNaepQev" // Public key as third parameter
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error("EmailJS error details:", error);
      console.error("Form data:", formData);
      
      // Fallback: open email client
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:piyushsinghdhanwal@gmail.com?subject=${subject}&body=${body}`;
      
      if (error.message?.includes("not loaded")) {
        toast.error("Email service not ready. Opening your email client...");
        window.open(mailtoLink, '_blank');
      } else {
        toast.error(`Failed to send message. ${error.message || 'Please try again or email directly.'}`);
        // Also offer email client as fallback
        setTimeout(() => {
          if (window.confirm("Would you like to open your email client instead?")) {
            window.open(mailtoLink, '_blank');
          }
        }, 2000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 px-6 py-12">
        <div className="mb-16 animate-slide-up text-center">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <Terminal className="w-6 h-6 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold font-mono">
              <span className="text-accent">const</span> contact = <span className="text-primary">"get_in_touch()"</span>
            </h1>
          </div>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Feel free to reach out through the form below or via direct contact methods.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card/30 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow rounded-lg p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      <span className="text-accent">const</span> name = 
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder='"Your Name"'
                      required
                    />
                  </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    <span className="text-accent">const</span> email = 
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder='"your.email@example.com"'
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-muted-foreground mb-2">
                  <span className="text-accent">const</span> message = 
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg font-mono text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder='"Your message here..."'
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 sm:px-8 bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-glow transition-all duration-300 font-mono disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    send()
                  </>
                )}
              </Button>
            </div>
            </form>
          </div>
          {/* Contact Info - Takes 1 column on large screens */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow rounded-lg p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h2 className="text-lg sm:text-xl font-semibold font-mono">Direct Contact</h2>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:piyushsinghdhanwal@gmail.com"
                  className="flex items-center gap-3 p-3 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold text-sm group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-xs text-muted-foreground font-mono break-all">piyushsinghdhanwal@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/mayo-byte07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold text-sm group-hover:text-primary transition-colors">GitHub</h3>
                    <p className="text-xs text-muted-foreground font-mono">@mayo-byte07</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mayeonng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold text-sm group-hover:text-primary transition-colors">LinkedIn</h3>
                    <p className="text-xs text-muted-foreground font-mono">in/mayeonng</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/mayo.click/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background/50 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold text-sm group-hover:text-primary transition-colors">Instagram</h3>
                    <p className="text-xs text-muted-foreground font-mono">@mayo.click</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-glow rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold font-mono text-accent">Response Time</h3>
              </div>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                I typically respond within 24-48 hours. For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>
        </div>

        {/* Git log style footer */}
        <div className="mt-12 code-block text-sm">
          <p className="text-muted-foreground font-mono">
            <span className="text-accent">commit</span>{" "}
            <span className="text-primary">c9f4d2e</span>
          </p>
          <p className="text-muted-foreground font-mono">
            <span className="text-secondary">Author:</span> Piyush Singh
          </p>
          <p className="text-muted-foreground font-mono pl-4">
            Looking forward to hearing from you! 📧
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
