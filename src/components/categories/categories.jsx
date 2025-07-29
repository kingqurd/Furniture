import { Sofa, ChefHat, Bed, Briefcase } from "lucide-react";
// import Button from '/components/Button/Button'
const Categories = () => {

  const phoneNum = "+2349063479592";


  const categories = [
    {
      name: "Living Room",
      description: "Sofas, chairs, coffee tables & entertainment centers",
      icon: Sofa,
      href: "#living-room",
      color: "from-primary/10 to-primary/5",
    },
    {
      name: "Dining Room",
      description: "Dining tables, chairs, cabinets & bar stools",
      icon: ChefHat,
      href: "#dining-room",
      color: "from-accent/20 to-accent/10",
    },
    {
      name: "Bedroom",
      description: "Beds, dressers, nightstands & wardrobes",
      icon: Bed,
      href: "#bedroom",
      color: "from-secondary/30 to-secondary/15",
    },
    {
      name: "Office",
      description: "Desks, office chairs, bookcases & storage",
      icon: Briefcase,
      href: "#office",
      color: "from-muted/40 to-muted/20",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] italic mb-4">
            Shop by Room
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-[#111827]">
            Find everything you need to create the perfect space, room by room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className={`relative group cursor-pointer rounded-2xl p-8 transition-all duration-300 hover:shadow-large hover:-translate-y-1 bg-gradient-to-br ${category.color} border border-border/50 shadow-lg`}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#111827]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111827] italic mb-3">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  {/* <Button
            to={"https://wa.me/+2349063479592"}
            btnText={"shop"}
            className={"w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"}
          /> */}
                  <button
                    className="w-[70%] h-[2rem] rounded-lg group-hover:bg-[#111827] group-hover:text-white group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/${phoneNum}`,'_blank')}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
