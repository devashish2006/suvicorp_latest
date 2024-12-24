import { AnimatedTestimonials } from "./ui/animated-testimonials";
import jatinBhatia from "../assets/jatin_bhatia.jpeg";
import AnkurTiwari from "../assets/ankur_tiwari.jpeg";
import AmanGarg from "../assets/aman_garg.jpeg";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: jatinBhatia,
    },
    {
      quote:    
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: AmanGarg,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: AnkurTiwari,
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials }  />;
}
