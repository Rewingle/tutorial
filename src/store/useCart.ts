import { create } from 'zustand'

type CartState = {
    cartCount: number,
    increaseCartCount: () => void
}

export const useCart = create<CartState>((set) => ({
    cartCount: 0,
    increaseCartCount: () => set((state: any) => ({ cartCount: state.cartCount + 1 })),
    decreaseCartCount: () => set((state: any) => ({ cartCount: state.cartCount - 1 }))
}))
export default useCart

