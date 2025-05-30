import styled from 'styled-components';

// Main container for the Contact section
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 20px 40px;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  background-color: ${({ theme }) => theme.global.backgroundColor};
  color: ${({ theme }) => theme.contact.textColor};
  box-shadow: ${({ theme }) => theme.global.transparentBorder};
  margin: 0 auto;
  min-height: 100vh;
`;

// Welcome text styling
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.text.fontSize.title};
  color: ${({ theme }) => theme.highlights.orangeRed};
  margin: 10;
  text-align: center;
  line-height: ${({ theme }) => theme.text.lineHeight};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.text.fontSize.mobileTitle};
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: ${({ theme }) => theme.text.lineHeight};
  color: ${({ theme }) => theme.contact.textColor};
  margin-bottom: 20px;
  max-width: 650px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
  background-color: ${({ theme }) => theme.global.secondaryColor};
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.borderRadius};
  box-shadow: ${({ theme }) => theme.box.boxShadow};
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.contact.inputBorderColor};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.contact.inputFocusBorderColor};
  }
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.contact.inputBorderColor};
  border-radius: 5px;
  outline: none;
  resize: none; /* Prevent resizing */
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.contact.inputFocusBorderColor};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.contact.buttonBg};
  color: ${({ theme }) => theme.contact.textColor};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.contact.buttonHoverBg};
  }
`;
