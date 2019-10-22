import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto 0;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: #fff;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 11px 15px;

            height: 42px;
            background: #f94d6a;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.08, '#f94d6a')};
            }

            span {
                margin-left: 5px;
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const Meetup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    margin-bottom: 10px;
    cursor: pointer;

    strong {
        color: #fff;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;

export const Date = styled.div`
    display: flex;
    align-items: center;

    span {
        color: rgba(255, 255, 255, 0.6);
        margin-right: 15px;
    }
`;
