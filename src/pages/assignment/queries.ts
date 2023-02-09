import { gql } from "@apollo/client";

export const GET_LEADS = gql`
  query getLeads {
    leads {
      data {
        id
        attributes {
          Time
          Name
          email
          Source
          Status
        }
      }
    }
  }
`;

export const CREATE_LEAD = gql`
  mutation createLead($data: LeadInput!) {
    createLead(data: $data) {
      data {
        attributes {
          Name
          email
        }
      }
    }
  }
`;

export const DELETE_LEAD = gql`
  mutation deleteLead($id: ID!) {
    deleteLead(id: $id) {
      data {
        attributes {
          Name
          email
        }
      }
    }
  }
`;

export const UPDATE_LEAD = gql`
  mutation updateLead($id: ID!, $data: LeadInput!) {
    updateLead(id: $id, data: $data) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;

export const VIEW_LEAD = gql`
  query getLeadById($id: ID!) {
    lead(id: $id) {
      data {
        id
        attributes {
          Time
          Name
          email
          Source
          Status
        }
      }
    }
  }
`;
