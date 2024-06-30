import { renderHook, waitFor } from "@testing-library/react"; // act,
import { useGetMyUser } from "../MyUserApi"; //useUpdateMyUser , useCreateMyUser
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "sonner";
import { renderWithProviders } from "../../__tests__/test-utils";

// Mocking useAuth0
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(),
}));

// Mocking toast notifications
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mocking API_BASE_URL
// const API_BASE_URL = "http://localhost:5001";

describe("MyUserApi", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe("useGetMyUser", () => {
    it("fetches current user successfully", async () => {
      const mockUser = { auth0Id: "someAuth0Id", email: "test@example.com" };
      fetchMock.mockResponseOnce(JSON.stringify(mockUser));

      (useAuth0 as jest.Mock).mockReturnValue({
        getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
      });

      const { result } = renderHook(() => useGetMyUser(), {
        wrapper: ({ children }) => renderWithProviders(children),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.currentUser).toEqual(mockUser);
    });

    it("handles error during fetching current user", async () => {
      fetchMock.mockRejectOnce(new Error("Failed to fetch user"));

      (useAuth0 as jest.Mock).mockReturnValue({
        getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
      });

      const { result } = renderHook(() => useGetMyUser(), {
        wrapper: ({ children }) => renderWithProviders(children),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));

      expect(result.current.currentUser).toBeUndefined();
      expect(toast.error).toHaveBeenCalledWith("Error: Failed to fetch user");
    });
  });

//   describe("useCreateMyUser", () => {
//     it("creates user successfully", async () => {
//       fetchMock.mockResponseOnce(JSON.stringify({}));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
//       });

//       const { result } = renderHook(() => useCreateMyUser(), {
//         wrapper: ({ children }) => renderWithProviders(children),
//       });

//       await act(async () => {
//         await result.current.createUser({
//           auth0Id: "someAuth0Id",
//           email: "test@example.com",
//         });
//       });

//       expect(fetchMock).toHaveBeenCalledWith(
//         `${API_BASE_URL}/api/my/user`,
//         expect.anything()
//       );
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isError).toBe(false);
//       expect(result.current.isSuccess).toBe(true);
//     });

//     it("handles error during creating user", async () => {
//       fetchMock.mockRejectOnce(new Error("Failed to create user"));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
//       });

//       const { result } = renderHook(() => useCreateMyUser(), {
//         wrapper: ({ children }) => renderWithProviders(children),
//       });

//       await act(async () => {
//         await result.current.createUser({
//           auth0Id: "someAuth0Id",
//           email: "test@example.com",
//         });
//       });

//       expect(toast.error).toHaveBeenCalledWith("Error: Failed to create user");
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isError).toBe(true);
//       expect(result.current.isSuccess).toBe(false);
//     });
//   });

//   describe("useUpdateMyUser", () => {
//     it("updates user successfully", async () => {
//       const mockUpdatedUser = { name: "Updated Name" };
//       fetchMock.mockResponseOnce(JSON.stringify(mockUpdatedUser));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
//       });

//       const { result } = renderHook(() => useUpdateMyUser(), {
//         wrapper: ({ children }) => renderWithProviders(children),
//       });

//       await act(async () => {
//         await result.current.updateUser({
//           name: "Updated Name",
//           addressLine1: "123 St",
//           city: "City",
//           country: "Country",
//         });
//       });

//       expect(fetchMock).toHaveBeenCalledWith(
//         `${API_BASE_URL}/api/my/user`,
//         expect.anything()
//       );
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isSuccess).toBe(true);
//       expect(toast.success).toHaveBeenCalledWith("User profile updated!");
//     });

//     it("handles error during updating user", async () => {
//       fetchMock.mockRejectOnce(new Error("Failed to update user"));

//       (useAuth0 as jest.Mock).mockReturnValue({
//         getAccessTokenSilently: jest.fn().mockResolvedValue("fake-token"),
//       });

//       const { result } = renderHook(() => useUpdateMyUser(), {
//         wrapper: ({ children }) => renderWithProviders(children),
//       });

//       await act(async () => {
//         await result.current.updateUser({
//           name: "Updated Name",
//           addressLine1: "123 St",
//           city: "City",
//           country: "Country",
//         });
//       });

//       expect(toast.error).toHaveBeenCalledWith("Error: Failed to update user");
//       expect(result.current.isLoading).toBe(false);
//       expect(result.current.isSuccess).toBe(false);
//     });
//   });
});
