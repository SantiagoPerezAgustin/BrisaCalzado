import React from "react";
import { motion } from "framer-motion";
import { FaSmile, FaCreditCard, FaShippingFast, FaAward } from "react-icons/fa";

function BenefitsBuying() {
  const benefits = [
    {
      icon: FaSmile,
      title: "Atención personalizada",
      desc: "Nos importas vos y tus necesidades",
    },
    {
      icon: FaCreditCard,
      title: "Pagá como quieras",
      desc: "Múltiples formas de pago disponibles",
    },
    {
      icon: FaShippingFast,
      title: "Envío rápido",
      desc: "Recibí tu pedido en tiempo record",
    },
    {
      icon: FaAward,
      title: "Calidad garantizada",
      desc: "Productos seleccionados con cuidado",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-pink-800 mb-12"
        >
          ¿Por qué elegir Brisa?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 border-pink-200"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="text-5xl text-pink-500 mb-4 flex justify-center"
                >
                  <Icon />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default BenefitsBuying;
