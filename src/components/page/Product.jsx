import React from 'react';
import { motion } from 'framer-motion';

const productData = [
  {
    title: 'Audit & Assurance Solutions',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.E-9Mji-BYoRezVa8ksD-egHaEK&pid=Api&P=0&h=180',
  },
  {
    title: 'Risk & Compliance Solutions',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.fpl4BrfEVSzXQTlo5_8WqgHaE7&pid=Api&P=0&h=180',
  },
  {
    title: 'Tax Advisory & Compliance',
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.7oetTFBZhV8uZjzC1XY8QQHaE8&pid=Api&P=0&h=180',
  },
  {
    title: 'Financial & Business Consulting',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.V3oSsEACAbcw9IgfwcIEpgHaE8&pid=Api&P=0&h=180',
  },
  {
    title: 'Technology & Digital Transformation',
    imgSrc: 'https://tse4.mm.bing.net/th?id=OIP.ti0Q1Wr5KKxZodKXSxKx5wHaE8&pid=Api&P=0&h=180',
  },
  {
    title: 'Industry-Specific Solutions',
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.cuZ4X2FsXBK5KxzbGJigWwHaCE&pid=Api&P=0&h=180',
  },
  {
    title: 'Fraud & Forensic Services',
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.YYtbCgZ-221ZRacxjQuS7AHaDF&pid=Api&P=0&h=180',
  },
  {
    title: 'ESG & Sustainability Solutions',
    imgSrc: 'https://tse3.mm.bing.net/th?id=OIP.lLEoul3JIwNRUzFw5Pt3mAAAAA&pid=Api&P=0&h=180',
  },
  {
    title: 'HR & Workforce Advisory',
    imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.ke5jE_dhg5IRqwZeUom1hgHaEK&pid=Api&P=0&h=180',
  },
  {
    title: 'Business Process Outsourcing (BPO)',
    imgSrc: 'https://tse1.mm.bing.net/th?id=OIP.VAp5s9p59zmm79C3kmvI_gHaEE&pid=Api&P=0&h=180',
  },
];

const ProductCard = ({ title, imgSrc }) => {
  return (
    <motion.div
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  );
};

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-24"> {/* Added pt-24 for top padding */}
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Our Financial Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productData.slice(0, 7).map((product, index) => (
          <ProductCard key={index} title={product.title} imgSrc={product.imgSrc} />
        ))}
        {/* Adding the last two products with symmetry */}
        <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <ProductCard title={productData[7].title} imgSrc={productData[7].imgSrc} />
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
          <ProductCard title={productData[8].title} imgSrc={productData[8].imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
