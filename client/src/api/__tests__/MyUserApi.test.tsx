// import { renderHook, act } from '@testing-library/react-hooks';
// import { useGetMyUser, useCreateMyUser, useUpdateMyUser } from '../MyUserApi';
// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { toast } from 'sonner';
// import { createQueryClient } from '@testing-library/react-query';

// // Mocking useAuth0
// jest.mock('@auth0/auth0-react', () => ({
//   useAuth0: jest.fn(),
// }));

// // Mocking toast notifications
// jest.mock('sonner', () => ({
//   toast: {
//     success: jest.fn(),
//     error: jest.fn(),
//   },
// }));

// const queryClient = new QueryClient();

// const wrapper = ({ children }: { children: React.ReactNode }) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );

// describe('MyUserApi', () => {
//   beforeEach(() => {
//     fetchMock.resetMocks();
//   });

//   describe('useGetMyUser', () => {
//     it('fetches current user successfully', async () => {
//       const mockUser = { auth0Id: 'someAuth0Id', email: 'test@example.com' };
//       fetchMock.mockResponseOnce(JSON.stringify(mockUser));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result, waitFor } = renderHook(() => useGetMyUser(), { wrapper });

//       await waitFor(() => result.current.isLoading === false);

//       expect(result.current.currentUser).toEqual(mockUser);
//       expect(result.current.isLoading).toBe(false);
//     });

//     it('handles error during fetching current user', async () => {
//       fetchMock.mockRejectOnce(new Error('Failed to fetch user'));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result, waitFor } = renderHook(() => useGetMyUser(), { wrapper });

//       await waitFor(() => result.current.isLoading === false);

//       expect(result.current.currentUser).toBeUndefined();
//       expect(toast.error).toHaveBeenCalledWith('Error: Failed to fetch user');
//     });
//   });

//   describe('useCreateMyUser', () => {
//     it('creates user successfully', async () => {
//       fetchMock.mockResponseOnce(JSON.stringify({}));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result } = renderHook(() => useCreateMyUser(), { wrapper });

//       await act(async () => {
//         await result.current.createUser({ auth0Id: 'someAuth0Id', email: 'test@example.com' });
//       });

//       expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/api/my/user`, expect.anything());
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isError).toBe(false);
//       expect(result.current.isSuccess).toBe(true);
//     });

//     it('handles error during creating user', async () => {
//       fetchMock.mockRejectOnce(new Error('Failed to create user'));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result } = renderHook(() => useCreateMyUser(), { wrapper });

//       await act(async () => {
//         await result.current.createUser({ auth0Id: 'someAuth0Id', email: 'test@example.com' });
//       });

//       expect(toast.error).toHaveBeenCalledWith('Error: Failed to create user');
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isError).toBe(true);
//       expect(result.current.isSuccess).toBe(false);
//     });
//   });

//   describe('useUpdateMyUser', () => {
//     it('updates user successfully', async () => {
//       const mockUpdatedUser = { name: 'Updated Name' };
//       fetchMock.mockResponseOnce(JSON.stringify(mockUpdatedUser));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result } = renderHook(() => useUpdateMyUser(), { wrapper });

//       await act(async () => {
//         await result.current.updateUser({ name: 'Updated Name', addressLine1: '123 St', city: 'City', country: 'Country' });
//       });

//       expect(fetchMock).toHaveBeenCalledWith(`${API_BASE_URL}/api/my/user`, expect.anything());
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isSuccess).toBe(true);
//       expect(toast.success).toHaveBeenCalledWith('User profile updated!');
//     });

//     it('handles error during updating user', async () => {
//       fetchMock.mockRejectOnce(new Error('Failed to update user'));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue('fake-token'),
//       });

//       const { result } = renderHook(() => useUpdateMyUser(), { wrapper });

//       await act(async () => {
//         await result.current.updateUser({ name: 'Updated Name', addressLine1: '123 St', city: 'City', country: 'Country' });
//       });

//       expect(toast.error).toHaveBeenCalledWith('Error: Failed to update user');
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isSuccess).toBe(false);
//     });
//   });
// });
