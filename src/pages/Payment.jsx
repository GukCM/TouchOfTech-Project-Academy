import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import american from "../assets/amex.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import santander from "../assets/santander.png";
import oxxo from "../assets/oxxo.png";

const Payment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className=" w-full h-full flex items-center justify-center">
          <h1 className="text-3xl font-bold text-green-500">¡Transacción Exitosa!</h1>
        </div>
      ) : (
        <div className="w-full flex justify-between flex-col md:flex-row align-middle overflow-hidden">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-500 mb-16">Payment</h1>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex gap-3 mb-4">
                <img src={american} alt="American Express" className="h-4" />
                <img src={mastercard} alt="Mastercard" className="h-4" />
                <img src={visa} alt="Visa" className="h-4" />
                <img src={paypal} alt="Paypal" className="h-4" />
                <img src={santander} alt="Santander" className="h-4" />
                <img src={oxxo} alt="Oxxo" className="h-4" />
              </div>

              <div className="flex flex-col w-full">
                <div className="flex flex-col bg-white shadow-lg p-8 rounded-lg mb-4">
                  <label htmlFor="titular" className="mb-4 text-gray-500">
                    Titular de la tarjeta
                  </label>
                  <input
                    type="text"
                    id="titular"
                    className="border border-gray-300 p-2 mb-6 rounded-md focus:border-green-500 focus:outline-none"
                  />
                  <label htmlFor="numtarjeta" className="mb-4 text-gray-500">
                    Numero de tarjeta
                  </label>
                  <input
                    type="number"
                    id="numtarjeta"
                    className="border border-gray-300 p-2 mb-8 rounded-md focus:border-green-500 focus:outline-none"
                  />
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="fecha" className="mb-4 text-gray-500">
                        Fecha de Vencimiento
                      </label>
                      <input
                        type="month"
                        id="fecha"
                        placeholder="MM/YY"
                        className="border border-gray-300 p-2 mb-4 rounded-md focus:border-green-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="cvv" className="mb-4 text-gray-500">
                        Codigo de Seguridad
                      </label>
                      <input
                        type="number"
                        id="cvv"
                        className="border border-gray-300 p-2 mb-4 rounded-md focus:border-green-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <Link to="/cart" className="text-gray-500 text-sm hover:text-green-200 transition-all">
                      Cancelar
                    </Link>
                    <input
                      type="submit"
                      className="bg-green-500 text-white rounded-md shadow-lg w-1/3 p-3 mt-4 hover:bg-green-600 transition-all cursor-pointer"
                      value={"Pagar"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white shadow-lg rounded-lg h-full p-8">
              <h1 className="text-gray-500">Resumen de la compra</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;