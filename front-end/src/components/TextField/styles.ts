import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const LabelInputFile = styled.label`
    
`;

export const TextField = styled.input`
    color: ${theme.colors.black};

    width: 100%;
    height: 48px;

    font-size: ${theme.fontSizes.sm};

    padding: 0 16px;
    border: none;

    &::placeholder {
        color: ${theme.colors.placeholder};
    }

    outline: none;

    @media (min-width: 1024px) {
        height: 56px;
        
        font-size: ${theme.fontSizes.md};
    }
`;
