import { KeyboardEvent } from 'react';

import formatPrice from 'utils/formatPrice';
import { IProduct } from 'models';

import { useCart } from 'contexts/cart-context';

import * as S from './style';

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart();
  const {
    sku,
    title,
    price,
    originalPrice,
    discount,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
    brand,
    category,
    material,
    availableSizes,
  } = product;

  const formattedPrice = formatPrice(price, currencyId);
  const formattedOriginalPrice = originalPrice ? formatPrice(originalPrice, currencyId) : null;
  let productInstallment;

  if (installments) {
    const installmentPrice = price / installments;

    productInstallment = (
      <S.Installment>
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </S.Installment>
    );
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 });
    openCart();
  };

  const handleAddProductWhenEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Space') {
      addProduct({ ...product, quantity: 1 });
      openCart();
    }
  };

  return (
    <S.Container onKeyUp={handleAddProductWhenEnter} sku={sku} tabIndex={1}>
      {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
      {discount && <S.DiscountBadge>{discount}% OFF</S.DiscountBadge>}
      <S.Image alt={title} />
      <S.Brand>{brand}</S.Brand>
      <S.Title>{title}</S.Title>
      <S.Category>{category} • {material}</S.Category>
      <S.AvailableSizes>
        <S.SizesLabel>Sizes:</S.SizesLabel>
        <S.SizesList>
          {availableSizes.map((size) => (
            <S.SizeItem key={size}>{size}</S.SizeItem>
          ))}
        </S.SizesList>
      </S.AvailableSizes>
      <S.Price>
        {originalPrice && (
          <S.OriginalPrice>
            <small>{currencyFormat}</small>
            <span>{formattedOriginalPrice}</span>
          </S.OriginalPrice>
        )}
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </S.BuyButton>
    </S.Container>
  );
};

export default Product;
