import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';

interface DonatedItem {
  itemId: string;
  quantity: number;
}

interface CreateDonationDto {
  donorName?: string;
  animalId: string;
  donatedItems: DonatedItem[];
  extraAmount?: number;
}

interface CreateDonationResponse {
  _id: string;
  donorName?: string;
  animalId: string;
  donatedItems: DonatedItem[];
  extraAmount?: number;
  createdAt: string;
}

export function useCreateDonation() {
  const queryClient = useQueryClient();

  return useMutation<CreateDonationResponse, Error, CreateDonationDto>({
    mutationFn: async (donationData: CreateDonationDto) => {
      const response = await api.post('/donation', donationData);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['donations'], refetchType: 'active' });
      queryClient.invalidateQueries({ queryKey: ['animal', variables.animalId], refetchType: 'active' });
      alert('Doação realizada com sucesso!');
    },
    onError: (error) => {
      const message = error.message.includes('404')
        ? 'Animal ou item não encontrado.'
        : error.message.includes('400')
        ? 'Dados inválidos. Verifique os itens selecionados.'
        : 'Erro ao realizar a doação. Tente novamente.';
      alert(message);
    },
  });
}