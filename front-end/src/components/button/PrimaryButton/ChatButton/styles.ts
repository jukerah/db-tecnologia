import styled from 'styled-components';

export const Button = styled.button`
    background: transparent;
    border: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;

    right: 24px;
    bottom: 24px;

    cursor: pointer;

    span {
        background-color: #BAE3D4;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        white-space: nowrap;

        display: none;
        align-items: center;
        position: fixed;
        overflow: hidden;

        width: 56px;
        height: 56px;

        padding: 0 40px 0 24px;
        border-radius: 40px;

        transition: all ease-in .2s;
    }

    div {
        background: #00E676;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), 0px 3px 0px #00C163;
        border-radius: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

        width: 64px;
        height: 64px;
    }

    @media (min-width: 1024px) {
        right: 32px;
        bottom: 32px;

        div {
            width: 80px;
            height: 80px;

            svg {
                width: 48px;
                height: 48px;
            }
        }

        span { display: flex; }

        &:hover {
            span {
                width: 370px;
                height: 56px;
            }
        }
    }
`;
