import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BenefitsBuying() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="mb-4 text-pink" data-aos="zoom-in">
          ¿Por qué elegir Brisa?
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4" data-aos="fade-right">
            <i className="fas fa-smile-beam fa-2x text-pink"></i>
            <h5 className="mt-2">Atención personalizada</h5>
          </div>
          <div className="col-md-3 mb-4" data-aos="fade-left">
            <i className="fas fa-credit-card fa-2x text-pink"></i>
            <h5 className="mt-2">Pagá como quieras</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsBuying;
