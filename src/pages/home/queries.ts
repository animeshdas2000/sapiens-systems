import { gql } from '@apollo/client';

export const GET_FAQS = gql`
    query fetchFAQ {
      faqsSapiensystems{
        data{
          id
          attributes{
            Question
            Answer
          }
        }
      }
    }
`;
