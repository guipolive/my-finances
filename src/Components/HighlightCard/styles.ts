import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
    cardType: 'in' | 'out' | 'total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, cardType }) => 
        cardType === 'total'
            ? theme.colors.secondary
            : theme.colors.shape
    };
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    margin-right: 16px;
    padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme, cardType}) => 
        cardType === 'total'
            ? theme.colors.shape
            : theme.colors.text__dark
    };
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({cardType, theme}) => {
        switch (cardType) {
            case 'in':
                return theme.colors.success;
            case 'out':
                return theme.colors.attention;
            case 'total':
                return theme.colors.shape;
        }
    }};
`;

export const Content = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({theme, cardType}) => 
        cardType === 'total'
            ? theme.colors.shape
            : theme.colors.text__dark
    };
    margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, cardType}) => 
        cardType === 'total'
            ? theme.colors.shape
            : theme.colors.text
    };
`;