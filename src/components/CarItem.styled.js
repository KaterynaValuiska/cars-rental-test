import styled from "@emotion/styled";
export const Button = styled.button`
  display: block;
  padding: 12px 99px;
  text-align: center;
  background-color: rgba(52, 112, 255, 1);
  border-radius: 12px;
  cursor: pointer;
  border: none;
  color: rgba(255, 255, 255, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  border-radius: 14px;
  border: 0px solid rgba(11, 68, 205, 1);
  overflow: hidden;
  position: relative;
`;
export const Imeg = styled.img`
  height: 268px;
  width: 274px;
  border-radius: 14px;
  object-fit: cover;
`;
export const NameCar = styled.p`
  font-size: 16px;
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
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 28px;
  width: 270px;
`;
export const WrapperCars = styled.div`
  display: flex;
  gap: 50px 29px;
  flex-wrap: wrap;
  width: 1184px;
  margin-top: 50px;
`;

export const Favorite = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
