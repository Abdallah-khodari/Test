import { Card } from "flowbite-react";
import diving from "../../assets/Diving.webp";
import luxor from "../../assets/luxor.jpg";
import pyramids from "../../assets/Pyramids.jpg";
import car from "../../assets/Car.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Exploretrips() {
  const navigate = useNavigate();
  function Toluxour() {
    navigate("/luxor");
  }
  function ToCairo() {
    navigate("/cairo");
  }
  function TolHurghada() {
    navigate("/hurghada");
  }
  function TolTrasnfer() {
    navigate("/transfer");
  }
  return (
    <div>
      <div>
        <h2 className="text-center mt-20 text-2xl font-bold">
          Explore All Our Activities And Enjoy Your time
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 width-full gap-6 mt-10">
          <Card
            onClick={TolHurghada}
            className="max-w-sm h-[420px] flex flex-col cursor-pointer mt-10 mx-auto 
            transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            imgAlt="Hurghada Activities"
            imgSrc={diving}
            renderImage={() => (
              <img
                src={diving}
                alt="Hurghada Activities"
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Activities in Hurghada
            </h5>
            <p className="font-normal text-white flex-1">
              Dicover the best Activities in Hurghada, from desert safaris to
              snorkeling adventures, all designed to make your vacation
              unforgettable.
            </p>
          </Card>

          <Card
            onClick={Toluxour}
            className="max-w-sm h-[420px] flex flex-col cursor-pointer mt-10 mx-auto 
            transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            imgAlt="Luxor Activities"
            imgSrc={luxor}
            renderImage={() => (
              <img
                src={luxor}
                alt="Luxor Activities"
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Activities in Luxor
            </h5>
            <p className="font-normal text-white flex-1">
              Explore the wonders of Luxor with our guided tours, including
              visits to the Valley of the Kings, Karnak Temple, and more.
            </p>
          </Card>

          <Card
            onClick={ToCairo}
            className="max-w-sm h-[420px] flex flex-col cursor-pointer mt-10 mx-auto 
            transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            imgAlt="Cairo Activities"
            imgSrc={pyramids}
            renderImage={() => (
              <img
                src={pyramids}
                alt="Cairo Activities"
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Activities in Cairo
            </h5>
            <p className="font-normal text-white flex-1">
              Experience the magic of Cairo with our Activities to the Pyramids
              of Giza, the Sphinx, and the Egyptian Museum, all in one
              unforgettable day.
            </p>
          </Card>

          <Card
            onClick={TolTrasnfer}
            className="max-w-sm h-[420px] flex flex-col cursor-pointer mt-10 mx-auto 
            transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            imgAlt="Transfer Hurghada"
            imgSrc={car}
            renderImage={() => (
              <img
                src={car}
                alt="Transfer Hurghada"
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
            )}
          >
            <h5 className="text-2xl font-bold tracking-tight text-white">
              Transfer inside Hurghada
            </h5>
            <p className="font-normal text-white flex-1">
              Enjoy convenient and comfortable transfers within Hurghada,
              whether you're heading to the airport, a hotel, or a local
              attraction.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
