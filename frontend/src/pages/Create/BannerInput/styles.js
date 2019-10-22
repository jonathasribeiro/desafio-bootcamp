import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin-bottom: 20px;

    label {
        cursor: pointer;
        position: relative;
        display: flex;

        div {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 100px;
            left: calc(50% - 50px);
            align-items: center;
            justify-content: center;

            span {
                font-weight: normal;
                color: rgb(255, 255, 255, 0.3);
            }
        }

        img {
            height: 300px;
            max-width: 900px;
            width: 100%;
            border-radius: 4px;
            background: #000;

            &:hover {
                border: 1px dashed rgba(255, 255, 255, 0.7);
            }
        }

        input {
            display: none;
        }

        &:hover {
            svg {
                color: #fff !important;
            }

            span {
                color: #fff;
            }
        }
    }
`;
