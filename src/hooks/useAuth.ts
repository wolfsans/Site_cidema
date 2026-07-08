export const useAuth = () => {
  return {
    isAuthenticated: true, // Mocked to true for demonstration
    user: { id: '1', name: 'Admin', email: 'admin@cidema.sc.gov.br', role: 'admin' },
    login: () => {},
    logout: () => {}
  }
};
