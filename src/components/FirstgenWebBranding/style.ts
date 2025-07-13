import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 12px 0;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #495057;
  letter-spacing: 0.3px;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;
