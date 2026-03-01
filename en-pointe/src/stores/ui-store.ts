import { create } from "zustand";

interface UIStore {
  // Mobile menu
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;

  // Search
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;

  // Quick view modal
  isQuickViewOpen: boolean;
  quickViewProductId: string | null;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;

  // Size guide modal
  isSizeGuideOpen: boolean;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;

  // Newsletter modal
  isNewsletterOpen: boolean;
  openNewsletter: () => void;
  closeNewsletter: () => void;

  // Header scroll state
  isHeaderScrolled: boolean;
  setHeaderScrolled: (scrolled: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  // Mobile menu
  isMobileMenuOpen: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  // Search
  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  // Quick view modal
  isQuickViewOpen: false,
  quickViewProductId: null,
  openQuickView: (productId) =>
    set({ isQuickViewOpen: true, quickViewProductId: productId }),
  closeQuickView: () =>
    set({ isQuickViewOpen: false, quickViewProductId: null }),

  // Size guide modal
  isSizeGuideOpen: false,
  openSizeGuide: () => set({ isSizeGuideOpen: true }),
  closeSizeGuide: () => set({ isSizeGuideOpen: false }),

  // Newsletter modal
  isNewsletterOpen: false,
  openNewsletter: () => set({ isNewsletterOpen: true }),
  closeNewsletter: () => set({ isNewsletterOpen: false }),

  // Header scroll state
  isHeaderScrolled: false,
  setHeaderScrolled: (scrolled) => set({ isHeaderScrolled: scrolled }),
}));
