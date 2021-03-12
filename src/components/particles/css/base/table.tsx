import { css } from 'styled-components';

const exportedCSS = css`
  table:not([role='presentation']) {
    border-collapse: collapse;
    margin: 24px 0;
    max-width: 100%;
    width: 100%;

    color: var(--white);
    -moz-font-feature-settings: “tnum”;
    -webkit-font-feature-settings: “tnum”;
    font-feature-settings: “tnum”;
    font-variant-numeric: tabular-nums;
    text-align: left;

    caption {
      padding: ${props => props.theme.spacingDefault + ` ` + props.theme.spacingSmall};
      background-color: var(--grey700);
      color: var(--white);
      font-weight: 700;
      text-align: left;
    }

    td,
    th {
      padding: 16px;

      &:first-of-type {
        padding-left: 4px;
      }

      &:last-of-type {
        padding-right: 8px;
      }
    }

    td {
      vertical-align: top;
    }

    th {
      padding: 16px;

      background-color: var(--grey900);
      color: var(--grey200);
      font-weight: bold;
      white-space: nowrap;
    }

    tr th[scope='row'] {
      letter-spacing: initial;
      text-transform: initial;
    }

    tr {
      background-color: var(--black);
      border-top: 1px solid var(--grey700);

      transition: background-color 0.2s ease;

      &:active,
      &:focus,
      &:hover {
        background-color: var(--grey900);

        .table__actions {
          opacity: 1;
        }
      }
    }

    .tr--grouped--last {
      border-bottom: 1px solid var(--grey500);
    }
  }
`;

export default exportedCSS;
