import { Boxes, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                <Boxes className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">PROCUREX</span>
            </Link>
            <p className="text-primary-foreground/60 max-w-sm mb-6">
              India's first AI-powered B2B procurement platform for project-based industries. 
              Verified suppliers, smart RFQs, transparent pricing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {["For Industries", "For Suppliers", "How It Works", "Pricing", "Request Demo"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Contact", "Privacy Policy"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Procurex. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Made with ❤️ in India for Indian Industries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
