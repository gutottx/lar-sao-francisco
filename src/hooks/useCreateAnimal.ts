import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

interface Animal {
  name: string;
  size: string;
  personality: string;
  birthDate: string;
  vaccinated: boolean;
  neutered: boolean;
  availableForAdoption: boolean;
  about: string;
}

interface Image {
  id: string;
  url: string;
  file?: File;
}

interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface CreateAnimalParams {
  animal: Animal;
  images: Image[];
  items: Item[];
  validateForm: () => string[];
}

interface CreateAnimalResponse {
  success: boolean;
  message: string;
  data: unknown;
}

export function useCreateAnimal({
  animal,
  images,
  items,
  validateForm,
}: CreateAnimalParams) {
  const queryClient = useQueryClient();

  return useMutation<CreateAnimalResponse, Error>({
    mutationFn: async () => {
      const formErrors = validateForm();
      if (formErrors.length > 0) {
        throw new Error('Erro de validação: ' + formErrors.join(' '));
      }

      const createAnimalDto = {
        name: animal.name,
        birthDate: animal.birthDate,
        personality: animal.personality,
        size: animal.size,
        vaccinated: animal.vaccinated,
        neutered: animal.neutered,
        availableForAdoption: animal.availableForAdoption,
        about: animal.about,
        needsList: items.map((item) => ({
          name: item.name,
          price: item.price,
          image: item.image, 
        })),
      };

      const formData = new FormData();
      formData.append('dto', JSON.stringify(createAnimalDto));

      images.forEach((image) => {
        if (image.file) {
          formData.append(`images`, image.file);
        }
      });

      const response = await api.post('/animal', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['animals'],
        refetchType: 'active',
      });
    },
  });
}