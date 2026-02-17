import { gql } from "@apollo/client";

export const TOGGLE_USER_STATUS = gql`
  mutation ToggleUserStatus($userId: Int!) {
    toggleUserStatus(userId: $userId)
  }
`;


export const ADMIN_LOGIN = gql`
  mutation AdminLogin($data: AdminLoginInput!) {
    adminLogin(data: $data)
  }
`;