import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    height: 100vh;
    background-color: #f0f0f0;
    color: #333;
    padding: 20px;
`;

export const DashboardTitle = styled.div`
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
`;

export const DashboardCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    // cursor: pointer;
`;

export const DashboardCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 30%;
    text-align: center;
`;
export const CardImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const CardName = styled.h3`
    margin-top: 15px;
    font-size: 18px;
    color: #333;
`;

export const CardPrice = styled.p`
    font-size: 16px;
    color:#333;
    margin-top: 10px;
    font-weight: 600;
`;

export const CardSelect = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
        background-color: #45a049;
    }
`;
export const SelectedCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
export const SelectCardDescription = styled.p`
    font-size: 16px;
    color: #333;
    margin-top: 10px;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
`;

export const DeliveryAddressContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    max-width: 600px;
`;

export const DeliveryForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const DeliveryButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #45a049;
    }
`;