import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 10px auto 0;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 35px 0;

        h1 {
            color: #fff;
        }

        div {
            display: flex;
        }
    }

    img {
        height: 300px;
    }

    p {
        margin: 20px 0;
        text-align: justify;
        line-height: 25px;
        font-size: 16px;
        color: #fff;
    }

    > div {
        display: flex;
        justify-content: flex-start;
        margin-top: 15px;
    }
`;

export const EditButton = styled.button`
    display: flex;
    align-items: center;
    background: #4dbaf9;
    padding: 10px 15px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    margin-right: 15px;

    svg {
        margin-right: 10px;
    }

    &:hover {
        background: ${darken(0.08, '#4DBAF9')};
    }
`;

export const CancelButton = styled.button`
    display: flex;
    align-items: center;
    background: #d44059;
    padding: 10px 15px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    svg {
        margin-right: 10px;
    }

    &:hover {
        background: ${darken(0.08, '#D44059')};
    }
`;

export const MeetupDate = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    margin-right: 20px;

    svg {
        margin-right: 5px;
        color: rgba(255, 255, 255, 0.6);
    }
`;

export const MeetupLocation = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

    svg {
        margin-right: 5px;
    }
`;
