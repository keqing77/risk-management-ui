import { StateCreator } from "zustand"

export interface Rate {
  rating: number
  hoverRating: number
  rated: boolean
  setRating: (rating: number) => void
  setHoverRating: (rating: number) => void
}

export const createRateSlice: StateCreator<Rate> = (set) => ({
  rating: 5,
  hoverRating: 5,
  rated: false,
  setRating(rating) {
    set({ rating, rated: true })
  },
  setHoverRating(hoverRating) {
    set({ hoverRating })
  },
})
