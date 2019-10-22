import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
    background: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
`;

export const Banner = styled.Image`
    height: 150px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #333;
    padding: 20px;
`;

export const InfoContainer = styled.View`
    margin: 0 20px;
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const InfoText = styled.Text`
    font-size: 13px;
    color: #999;
    margin-left: 10px;
`;

export const CancelSubscribeButton = styled(Button)`
    margin: 20px;
`;
