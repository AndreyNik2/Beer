import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { IBeer } from "../models/IBeer";
import axios from "axios";
import { errorCatch } from "../services/api/errorCatch";

interface BeerState {
  beer: [] | IBeer[];
  isLogading: boolean;
  selectedBeer: [] | string[];
  selectBeer: (id: string) => void;
  fetchBeer: () => void;
  removeBeer: () => void;
}

export const useBeerStore = create<BeerState>()(
  persist(
  devtools(
    immer((set, get) => ({
      beer: [],
      isLogading: false,
      selectedBeer: [],
      selectBeer: (id: string) => {
        // set({ selectedBeer: [] });
        // console.log({get().selectedBeer})
        if (get().selectedBeer.filter((i: any) => i === id).length === 0) {
          console.log(get().selectedBeer);
          set((state) => {
            return { selectedBeer: [...state.selectedBeer, id] };
          });
        } else {
          set({
            selectedBeer: get().selectedBeer.filter((i: any) => i !== id),
          });
        }
      },
      fetchBeer: async (page: number = 1, perPage: number = 25) => {
        set({ isLogading: true });
        try {
          const { data } = await axios.get<IBeer[]>(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
          );
          set({ beer: data });
        } catch (error) {
          errorCatch(error);
        } finally {
          set({ isLogading: false });
        }
      },
      removeBeer: () => {
        get().selectedBeer.map((itemSelectedBeer) =>
          set((state) => {
            return {
              beer: state.beer.filter((item) => item.id !== itemSelectedBeer),
            };
          })
        );
        set({ selectedBeer: [] });
      },
    }))
    ),{name: 'beerStore'}
  )
);
