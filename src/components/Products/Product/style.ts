import styled from 'styled-components/macro';

export const BuyButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

interface IImage {
  alt: string;
}
export const Image = styled.div<IImage>``;

interface IContainer {
  sku: number | string;
}
export const Container = styled.div<IContainer>`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }

  ${Image} {
    width: 100%;
    height: 270px;
    position: relative;
    background-image: ${({ sku }) =>
      `url(${require(`static/products/${sku}-1-product.webp`)})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ::before {
      content: '';
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
        breakpoints.tablet}) {
      height: 320px;
    }
  }

  &:hover {
    ${Image} {
      background-image: ${({ sku }) =>
        `url(${require(`static/products/${sku}-2-product.webp`)})`};
    }

    ${BuyButton} {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Stopper = styled.div`
  position: absolute;
  color: #ececec;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 0.6em;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: default;
  z-index: 1;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  color: #fff;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  font-size: 0.7em;
  background-color: #ff4444;
  border-radius: 3px;
  font-weight: bold;
  cursor: default;
  z-index: 1;
`;

export const Brand = styled.p`
  margin: 5px 0;
  font-size: 0.8em;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
  margin: 5px 0;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Category = styled.p`
  margin: 5px 0;
  font-size: 0.75em;
  color: #888;
  font-style: italic;
`;

export const AvailableSizes = styled.div`
  margin: 10px 0;
  text-align: center;
`;

export const SizesLabel = styled.p`
  margin: 0 0 5px 0;
  font-size: 0.8em;
  font-weight: 600;
  color: #333;
`;

export const SizesList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

export const SizeItem = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.7em;
  font-weight: 500;
  color: #333;
  min-width: 20px;
  text-align: center;
`;

export const Price = styled.div`
  height: 80px;
  margin-top: 10px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const OriginalPrice = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #999;
  text-decoration: line-through;
  
  small {
    font-size: 0.8em;
  }
  
  span {
    margin-left: 2px;
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;

export const Installment = styled.p`
  margin: 0;
  color: #9c9b9b;
`;
