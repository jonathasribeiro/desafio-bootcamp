import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #000;
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav img {
        width: 32px;
        height: 32px;
    }

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;

    div {
        text-align: right;
        margin-right: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        strong {
            display: block;
            color: #fff;
            font-size: 14px;
        }

        a {
            display: block;
            margin-top: 2px;
            font-size: 14px;
            color: #999;
        }
    }

    button {
        background: #d44059;
        padding: 11px;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.08, '#D44059')};
        }
    }
`;
