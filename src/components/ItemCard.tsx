import styled from '@emotion/styled';
import { Product } from '../types';

type ItemCardProps = {
  product: Product;
  quantity: number;
};

const ItemCard = ({ product, quantity }: ItemCardProps) => {
  return (
    <S.Container>
      <S.ButtonBox>
        <input type="checkbox" />
        <button>삭제</button>
      </S.ButtonBox>
      <S.ItemBox>
        <S.ItemImage src={product.imageUrl} />
        <S.ItemInfoBox>
          <div>
            <S.ItemName>{product.name}</S.ItemName>
            <S.ItemPrice>{`${product.price.toLocaleString()}원`}</S.ItemPrice>
          </div>
          <S.Stepper>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
          </S.Stepper>
        </S.ItemInfoBox>
      </S.ItemBox>
    </S.Container>
  );
};

export default ItemCard;

const S = {
  Container: styled.div`
    height: 160px;
  `,

  ButtonBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
  `,

  ItemBox: styled.div`
    height: 112px;
    display: flex;
    align-items: center;
    gap: 24px;
  `,

  ItemImage: styled.img`
    width: 112px;
    height: 112px;
    object-fit: cover;
  `,

  ItemInfoBox: styled.div`
    height: 100%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ItemName: styled.p`
    font-size: 12px;
    font-weight: 500;
  `,

  ItemPrice: styled.p`
    font-size: 24px;
    font-weight: 700;
  `,

  Stepper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  `,
};
