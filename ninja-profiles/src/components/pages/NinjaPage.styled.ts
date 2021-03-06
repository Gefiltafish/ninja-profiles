import styled from 'styled-components';

export const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #76bb60;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  all: unset;
  color: #ffffff;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  height: 32px;
  width: 180px;
  margin: 8px;
  text-align: center;
  &::placeholder {
    color: #ffffff;
  }
`;

export const CheckboxRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  width: 200px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckboxText = styled.span`
  color: #ffffff;
`;

export const Checkbox = styled.input<{ type: 'checkbox' }>`
  width: 32px;
  height: 32px;
`;
