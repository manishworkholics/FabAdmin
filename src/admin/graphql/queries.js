import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers($page: Int, $limit: Int, $search: String) {
    adminUsers(page: $page, limit: $limit, search: $search) {
      id
      name
      email
      isActive
    }
  }
`;


export const ADMIN_USERS_QUERY = gql`
  query AdminUsers($input: AdminUsersInput!) {
    adminUsers(input: $input) {
      total
      users {
        id
        email
        role
        createdAt
      }
    }
  }
`;


export const ADMIN_DASHBOARD_QUERY = gql`
  query AdminDashboard {
    adminDashboard {
      totalUsers
      totalEMS
      totalPM
      totalRFQs
      totalProjects
    }
  }
`;

export const ADMIN_EMS_COMPANIES_QUERY = gql`
  query AdminEMSCompanies($input: AdminEMSListInput!) {
    adminEMSCompanies(input: $input) {
      total
      companies {
        id
        name
        address
        state
        country
        createdAt
      }
    }
  }
`;


export const ADMIN_RFQ_QUERY = gql`
  query AdminRFQs($input: AdminRFQListInput!) {
    adminRFQs(input: $input) {
      total
      rfqs {
        id
        quoteName
        userId
        createdAt
      }
    }
  }
`;