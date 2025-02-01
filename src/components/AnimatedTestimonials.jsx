import { AnimatedTestimonials } from "./ui/animated-testimonials";
import jatinBhatia from "../assets/jatin_bhatia.jpeg";
import AnkurTiwari from "../assets/ankur_tiwari.jpeg";
import AmanGarg from "../assets/aman_garg.jpeg";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Head, Accounting & Digital Transformation",
      name: "Jatin Bhatia",
      designation: "Head, Accounting & Digital Transformation",
      src: jatinBhatia,
    },
    {
      quote:    
        "Developer",
      name: "Ankur Tiwari",
      designation: "System Engineer",
      src: AnkurTiwari,
    },
    {
      quote:
        "Lead Manage",
      name: "Aman Garg",
      designation: "JS Developer",
      src: AmanGarg,
    },
   
  ];
  return <AnimatedTestimonials testimonials={testimonials }  />;
}
