import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { PiTelegramLogoBold } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi"

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: 'Living Room', href: '#living-room' },
      { name: 'Dining Room', href: '#dining-room' },
      { name: 'Bedroom', href: '#bedroom' },
      { name: 'Office', href: '#office' }
    ],
    support: [
      { name: 'Customer Service', href: '#support' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns', href: '#returns' },
      { name: 'Size Guide', href: '#size-guide' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Sustainability', href: '#sustainability' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
     { icon: PiTiktokLogo, href: '#tiktok', label: 'TikTok' },
    { icon: PiTelegramLogoBold, href: 't_me-worldwide310410510', label: 'Telegram' },
    // { icon: Telegram, href: '#telegram', label: 'Telegram' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-primary-foreground/20 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#111827] italic">
              Stay in Touch
            </h3>
            <p className="text-primary-foreground/80 mb-6 ">
              Get the latest updates on new products and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[80%] border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="whitespace-nowrap bg-[#111827] w-[20%] h-[2rem] rounded-xl text-white font-bold hover:italic">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-[#111827] italic">
                WRLD-WIDE FURNISH
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md text-[#111827]">
                Creating beautiful, functional spaces with thoughtfully designed
                furniture that brings comfort and style to every home.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                    >
                      <IconComponent className="w-5 h-5 text-[#111827]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#111827] italic">
                Shop
              </h4>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-[#111827] "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#111827] italic">
                Support
              </h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-[#111827]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#111827] italic">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-[#111827]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="font-bold border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} WRLD-WIDE FURNISH. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-primary-foreground transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;