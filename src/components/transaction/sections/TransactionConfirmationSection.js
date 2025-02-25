import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { CoinIcon } from '../../coin-icon';
import { Centered, Column, RowWithMargins } from '../../layout';
import { Text, TruncatedText } from '../../text';
import TransactionSheet from '../TransactionSheet';
import { formatFixedDecimals } from '@rainbow-me/helpers/utilities';
import styled from '@rainbow-me/styled-components';
import { padding } from '@rainbow-me/styles';

const Amount = styled(TruncatedText).attrs(({ theme: { colors } }) => ({
  color: colors.dark,
  letterSpacing: 'roundedTight',
  size: 'larger',
  uppercase: true,
  weight: 'bold',
}))({});

const AmountRow = styled(LinearGradient).attrs(({ theme: { colors } }) => ({
  colors: colors.gradients.lighterGrey,
  end: { x: 0, y: 0.5 },
  start: { x: 1, y: 0.5 },
}))({
  ...padding.object(android ? 1 : 7, 12, android ? 2 : 9, 11),
  borderRadius: 40,
  marginBottom: 17,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 'auto',
  overflow: 'hidden',
});

const NativeAmount = styled(Text).attrs(({ theme: { colors } }) => ({
  align: 'center',
  color: colors.dark,
  letterSpacing: 'zero',
  size: 'headline',
  weight: 'heavy',
}))({
  marginBottom: android ? -10 : 10,
  marginTop: android ? 0 : 19,
});

export default function TransactionConfirmationSection({
  address,
  amount,
  nativeAmountDisplay,
  symbol,
  method,
}) {
  return (
    <TransactionSheet method={method}>
      <Centered>
        <NativeAmount>{nativeAmountDisplay}</NativeAmount>
      </Centered>
      <AmountRow>
        <Column>
          <RowWithMargins align="center" margin={5}>
            <CoinIcon address={address} size={20} symbol={symbol} />
            <Amount>
              {formatFixedDecimals(amount, 10)} {symbol}
            </Amount>
          </RowWithMargins>
        </Column>
      </AmountRow>
    </TransactionSheet>
  );
}
