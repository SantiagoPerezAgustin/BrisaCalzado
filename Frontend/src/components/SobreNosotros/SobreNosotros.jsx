import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaHeart, FaTrophy, FaUsers } from "react-icons/fa";
import BrisaLogo from "../../assets/Image log Brisa.jpg";

function SobreNosotros() {
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

  const features = [
    {
      icon: FaStar,
      title: "Calidad Premium",
      desc: "Productos seleccionados con cuidado",
    },
    {
      icon: FaHeart,
      title: "Atención Personalizada",
      desc: "Nos importas vos y tus necesidades",
    },
    {
      icon: FaTrophy,
      title: "Confianza",
      desc: "Miles de clientes satisfechos",
    },
    {
      icon: FaUsers,
      title: "Comunidad",
      desc: "Parte de la familia Brisa",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-pink-800 mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600">
              Conocé la historia de Brisa Calzado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-200"
              >
                <img
                  src={BrisaLogo}
                  alt="Brisa Calzado"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 className="text-4xl font-bold text-pink-800 mb-6">
                ¿Quiénes somos?
              </motion.h2>

              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                En{" "}
                <span className="font-bold text-pink-600">Brisa Calzado</span>,
                nos apasiona ayudarte a destacar con tu estilo propio. Cada
                producto que ofrecemos está pensado con amor, combinando
                calidad, comodidad y moda actual.
              </p>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Queremos brindarte una experiencia de compra simple, rápida e
                inspiradora. Ya seas fan de las botas, remeras o accesorios...
                ¡acá encontrás tu look ideal! 💖
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  "Productos seleccionados con calidad premium",
                  "Atención personalizada siempre 💬",
                  "Envíos rápidos a toda Argentina",
                  "Múltiples formas de pago",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-pink-500 text-xl"
                    >
                      <FaStar />
                    </motion.div>
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-pink-800 mb-12"
          >
            Nuestros Valores
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border-2 border-pink-200 text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    className="text-5xl text-pink-500 mb-4 flex justify-center"
                  >
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-gradient-to-r from-pink-300 to-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Clientes Felices" },
              { number: "1000+", label: "Productos" },
              { number: "5★", label: "Calificación" },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants}>
                <motion.h3 className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </motion.h3>
                <p className="text-lg text-white font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">
              Nuestra Historia
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Brisa Calzado nace de la pasión por la moda y el deseo de
                acercar productos de calidad a todos. Empezamos como un pequeño
                emprendimiento familiar, con la idea simple de que cada persona
                merece verse y sentirse increíble.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Hoy, somos una marca que representa confianza, calidad y estilo.
                Nuestro crecimiento ha sido posible gracias a cada uno de
                nuestros clientes, quienes nos inspiran día a día a mejorar y
                innovar.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Nuestra misión es simple:{" "}
                <span className="font-bold text-pink-600">
                  brindarte moda accesible sin compromiso en calidad
                </span>
                . Cada zapatilla, cada accesorio, cada detalle está cuidado para
                que disfrutes comprando con nosotros.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-200 to-pink-100">
        <div className="max-w-2xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pink-800 mb-6">
              ¿Listo para descubrir tu estilo?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Explora nuestra colección y encuentra el look perfecto para vos
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Ver Productos
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SobreNosotros;
