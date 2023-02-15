import { css } from '@emotion/react';

export const flexStartRow = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexEndRow = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
`;

export const flexStartColumn = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const flexEndColumn = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const flexBetweenColumn = css`
  display: flex;
  align-items: space-between;
  flex-direction: column;
`;
