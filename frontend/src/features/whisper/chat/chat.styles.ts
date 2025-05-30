import styled from 'styled-components';

export const MessagesContainer = styled.div`
  display: flex;
  overflow-y: auto;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.box.boxShadowNeon};
`;

export const MessageItem = styled.div<{ $isMine: boolean }>`
  // Transient prop: $isMine
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 12px;
  align-self: ${({ $isMine }) => ($isMine ? 'flex-end' : 'flex-start')};
  background-color: ${({ $isMine, theme }) =>
    $isMine ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
  color: ${({ theme }) => theme.text.colorDarkGray};
  word-wrap: break-word;
  position: relative;
  box-shadow: ${({ $isMine, theme }) =>
    $isMine ? theme.dialogs.boxShadowNeonShortWhiteSmall : theme.dialogs.boxShadowNeonShortBlue};

  /* Tail with a smooth wave effect */

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: ${({ $isMine, theme }) =>
      $isMine ? theme.global.secondaryColor : theme.dialogs.messageFromOtherBg};
    border-radius: ${({ $isMine }) => ($isMine ? '0 0 12px 0' : '0 0 0 12px')};
    ${({ $isMine }) =>
      $isMine
        ? `
                    right: -10px;
                    clip-path: polygon(100% 0, 0 0, 0 100%);
                `
        : `
                    left: -10px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%);
                `}
  }
`;
// Timestamp style component
export const Timestamp = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.slateGray};
  margin-bottom: 4px;
`;

// Message text wrapper
export const MessageText = styled.div`
  word-wrap: break-word;
`;

export const InputSectionChat = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.global.backgroundColor};
  box-shadow: ${({ theme }) => theme.box.boxShadowNeon};
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 10;
  gap: 5px;

  input[type='text'] {
    width: 100%;
    padding: 13px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;
    margin: 3px 10px 3px 0;
  }

  .button-group {
    display: grid;
    grid-auto-flow: column;
    gap: 5px;
  }

  button {
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
