export interface AuthContextType {
  isLoggedIn: boolean;
  isAuthLoading: boolean;
  setUser: (user: any) => void;
}
