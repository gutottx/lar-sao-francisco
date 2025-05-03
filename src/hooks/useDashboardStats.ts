import { useQueries } from '@tanstack/react-query';
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

interface DashboardStats {
  totalDonations: number; 
  donorsCount: number; 
  animalsCount: number; 
}

export function useDashboardStats() {
  const [donationsQuery, animalsQuery] = useQueries({
    queries: [
      {
        queryKey: ['donations'],
        queryFn: async () => {
          const response = await api.get<Donation[]>('/donation');
          return response.data;
        },
      },
      {
        queryKey: ['animals'],
        queryFn: async () => {
          const response = await api.get<Animal[]>('/animal');
          return response.data;
        },
      },
    ],
  });

  const { data: donations = [], isLoading: isLoadingDonations, error: donationsError } = donationsQuery;
  const { data: animals = [], isLoading: isLoadingAnimals, error: animalsError } = animalsQuery;

  const calculateDonationAmount = (donation: Donation): number => {
    const itemTotal = donation.donatedItems.reduce((sum, item) => {
      const animal = animals.find((a) => a._id === donation.animalId);
      const needsItem = animal?.needsList.find((ni) => ni._id === item.itemId);
      return sum + (needsItem ? needsItem.price * item.quantity : 0);
    }, 0);
    return itemTotal + (donation.extraAmount || 0);
  };

  const stats: DashboardStats = {
    totalDonations: donations.reduce((sum, donation) => sum + calculateDonationAmount(donation), 0),
    donorsCount: new Set(donations.map((d) => d.donorName || 'Anônimo')).size,
    animalsCount: animals.length,
  };

  return {
    stats,
    isLoading: isLoadingDonations || isLoadingAnimals,
    error: donationsError || animalsError,
  };
}