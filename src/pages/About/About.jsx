import { Truck, Shield, Headphones, Recycle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'Free shipping on orders over $500'
    },
    {
      icon: Shield,
      title: '2-Year Warranty',
      description: 'Comprehensive coverage on all products'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert help whenever you need it'
    },
    {
      icon: Recycle,
      title: 'Sustainable',
      description: 'Eco-friendly materials and practices'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 italic">
              Crafting Comfort Since 2024
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed ">
              <p>
                For nearly four decades, we've been dedicated to creating furniture that doesn't just fill your space—it transforms it. Every piece in our collection is thoughtfully designed to bring beauty, comfort, and functionality to your home.
              </p>
              <p>
                We believe that great furniture should be accessible, sustainable, and built to last. That's why we work directly with skilled artisans and use only premium materials that stand the test of time.
              </p>
            </div>
            <div className="mt-8">
              <button className="px-8 bg-[#111827] h-[3rem] rounded-lg text-white font-bold italic group-hover:bg-[#111827]/50">
                Our Story
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <span key={index} className="border-0 shadow-xl rounded-lg bg-card">
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#111827] mb-2 italic">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;