import { useQuery } from '@tanstack/react-query';
import api from '../services/api';
import { Animal } from './useAnimals';

interface DonatedItem {
  itemId: string;
  quantity: number;
}

interface Donation {
  _id: string;
  donorName?: string;
  animalId: string;
  donatedItems: DonatedItem[];
  extraAmount?: number;
  createdAt: string;
}

interface DonationWithAmount extends Donation {
  amount: number; 
}

interface DonationsResponse {
  animal: Animal;
  donations: Donation[];
}

interface DonationsErrorResponse {
  message: string;
}

type DonationsQueryResponse = DonationsResponse | DonationsErrorResponse;

interface DonationsResult {
  animal: Animal | null;
  donations: DonationWithAmount[];
  total: number;
}

export function useDonationsByAnimal(animalId: string) {
  return useQuery<DonationsQueryResponse, Error, DonationsResult>({
    queryKey: ['donations', animalId],
    queryFn: async () => {
      const response = await api.get(`/donation/animal/${animalId}`);
      return response.data;
    },
    select: (data) => {
      if ('message' in data) {
        return { animal: null, donations: [], total: 0 };
      }

      const donationsWithAmount: DonationWithAmount[] = data.donations.map((donation) => {
        const itemTotal = donation.donatedItems.reduce((sum, item) => {
          const needsItem = data.animal.needsList.find(
            (needsItem) => needsItem._id === item.itemId
          );
          return sum + (needsItem ? needsItem.price * item.quantity : 0);
        }, 0);
        const amount = itemTotal + (donation.extraAmount || 0);
        return { ...donation, amount };
      });

      const total = donationsWithAmount.reduce((sum, donation) => sum + donation.amount, 0);

      return {
        animal: data.animal,
        donations: donationsWithAmount,
        total,
      };
    },
    enabled: !!animalId,
  });
}