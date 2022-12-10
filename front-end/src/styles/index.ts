import styled from 'styled-components';

export const Index = styled.div`
    background: ${({ theme }) => theme.background.linearBlue};
    
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const Container = styled.div`
    background: ${({ theme }) => theme.background.white};
`;

export const Pages = styled.div`
    display: flex;
    flex-direction: column;
`;