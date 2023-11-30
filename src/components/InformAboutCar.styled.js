import styled from "@emotion/styled";
export const Button = styled.a`
  text-decoration: none;
  display: block;
  margin-top: 24px;
  text-align: center;
  padding-top: 9px;
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  cursor: pointer;
  border: none;
  color: rgba(255, 255, 255, 1);
  width: 168px;
  height: 36px;
  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    text-decoration: none;
  }
`;
export const ButtonClose = styled.button`
  background-color: rgba(255, 255, 255, 1);
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  top: -28px;
  right: -24px;
`;

export const Imeg = styled.img`
  height: 248px;
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const NameCar = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: rgba(18, 20, 23, 1);
  margin: 0;
  padding: 0;
`;
export const NameSpan = styled.span`
  color: rgba(52, 112, 255, 1);
`;
export const WrapperName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
`;
export const InfoCar = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 160px;
  white-space: nowrap;
  text-overflow: ellipsis;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 16px;
    background: rgba(18, 20, 23, 0.1);
    left: -6px;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  gap: 4px 12px;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 14px;
  width: 277px;

  overflow: hidden;
`;

export const WrapperFunctional = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 4px;
  width: 461px;

  overflow: hidden;
`;
export const TextRental = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const TextRentalVavues = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: rgba(54, 53, 53, 1);
  padding: 7px 14px;
  background-color: rgba(249, 249, 249, 1);
  border-radius: 35px;
  margin: 0;
`;
export const WrapperTextRentalVavues = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  width: 420px;
  flex-wrap: wrap;
`;
export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
`;
export const WrapperMain = styled.div`
  position: relative;
  width: 501px;
  height: 634px;
`;
