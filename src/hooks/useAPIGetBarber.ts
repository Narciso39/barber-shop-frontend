import { useEffect, useState } from "react";
import { Barber } from "../@types/barber.type";
import api from "../services/api";

interface ApiResponse {
  barbers: Barber[];
}

export const getBarber = () => {
  const [barbers, setBarbers] = useState<Barber[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    api
      .get<ApiResponse>("/barber/all")
      .then((response) => {
        if (isMounted) {
          console.log(response.data);
          setBarbers(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { barbers, error, isLoading };
};
