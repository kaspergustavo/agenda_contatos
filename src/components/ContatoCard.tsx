import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    background-color: ${theme.colors.white};
    margin-bottom: ${theme.spacing.small};
    padding: ${theme.spacing.medium};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: ${theme.spacing.small};
    background-color: ${theme.colors.danger};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.borderRadius};
    margin-left: ${theme.spacing.small};
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 120px;
    height: 40px;

    &:hover {
        background-color: ${theme.colors.dangerHover};
    }
`;

const EditButton = styled(Link)`
    padding: ${theme.spacing.small};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    text-decoration: none;
    border-radius: ${theme.borderRadius};
    margin-left: ${theme.spacing.small};
    cursor: pointer;
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${theme.colors.primaryHover};
    }
`;

interface ContactCardProps {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    onRemove: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
    id,
    nome,
    email,
    telefone,
    onRemove,
}) => {
    return (
    <CardContainer>
        <div>
        <strong>{nome}</strong> - {email} - {telefone}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
        {" "}
        <EditButton to={`/edit/${id}`}>Editar</EditButton>
        <Button onClick={() => onRemove(id)}>Remover</Button>
        </div>
    </CardContainer>
    );
};

export default ContactCard;
