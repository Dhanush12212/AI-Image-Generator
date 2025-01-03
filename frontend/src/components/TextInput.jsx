import React from "react";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: lex;
    flex-direction: center;
    gap: 4px;
`;

const Label = styled.div`
    font-sixe: 12px;
    color: ${({theme}) => theme.text_secondary};
    padding: 0px 4px;
    text-transform: uppercase;
`;

const OutlinedInput = styled.div`
    border-radius: 8px;
    border: 0.5px solid ${({ theme}) => theme.text_secondary};
    background-color: transparent;
    color: ${({theme}) => theme.text_secondary};
    outline: none;
    display: flex;
    align-items: center;
    gap: 12px;
    &:focus-within {
    border-color: ${({ theme }) => theme.primary };
    }
`;
    
const Input = styled.div`
    width: 100%;
    font-size: 14px;
    outline: none;
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.text_secondary};
    &:focus-within {
        outline:none;
    }
`;

const TextInput = ({
    label,
    placeholder,
    name,
    value,
    handleChange,
    textArea,
    rows,
    columns,
}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <OutlinedInput>
                <Input 
                    as={textArea ? "textarea" : "input"}
                    name={name}
                    rows={rows}
                    columns={columns}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleChange(e)}
                />
            </OutlinedInput>
        </Container>
    );
};

export default TextInput;