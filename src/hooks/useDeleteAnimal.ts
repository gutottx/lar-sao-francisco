import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

interface DeleteAnimalResponse {
  success: boolean;
  message: string;
  data: unknown; 
}

export function useDeleteAnimal() {
  const queryClient = useQueryClient();

  return useMutation<DeleteAnimalResponse, Error, string>({
    mutationFn: async (animalId: string) => {
      const response = await api.delete(`/animal/${animalId}`);
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
