import styled from '@emotion/styled';

export interface PageTitleProps {
    isRed?: boolean; // Making isRed prop optional
}

// Styled component for MyDiv
export const MyDiv = styled.div`
    padding: 100px;
`;

// Styled component for PageTitle
export const PageTitle = styled.p<PageTitleProps>`
    color: ${({ isRed }) => (isRed ? 'red' : 'black')}; /* Using conditional rendering for color */
    font-size: 30px;
`;
