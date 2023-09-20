import React, { useEffect, useState } from "react";
import { Audio, ThreeDots } from "react-loader-spinner";

import { getDocs } from "firebase/firestore";
import { alertsRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(alertsRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center px-3 mt-2 gap-4 mb-5">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            
              <div
                className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
              >
                <h1>{e.title}</h1>
                <h1 className="flex items-center">
                  <span className="text-gray-500 mr-1">Desc:{e.description}</span>
                </h1>
                <h1>
                  <span className="text-gray-500">Pin:</span> {e.pin}
                </h1>
              </div>
            
          );
        })
      )}
    </div>
  );
};

export default Cards;
