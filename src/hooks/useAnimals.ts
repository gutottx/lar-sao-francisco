import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export interface Need {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export interface Animal {
  _id: string;
  name: string;
  about: string;
  birthDate: string;
  size: "pequeno" | "médio" | "grande";
  vaccinated: boolean;
  neutered: boolean;
  personality: string;
  availableForAdoption: boolean;
  needsList: Need[];
  images: string[]; 
}

export function useAnimals() {
  return useQuery<Animal[]>({
    queryKey: ["animals"],
    queryFn: async () => {
      const response = await api.get("/animal");
      return response.data; 
    },
  });
}