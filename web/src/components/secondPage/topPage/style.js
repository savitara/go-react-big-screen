import styled from 'styled-components';
import { TitleColor } from '../../../style/color'

export const TopBox = styled.div`

  .top_box {
    display: flex;
    justify-content: center;

    .top_decoration10 {
      position: relative;
      width: 33.3%;
      height: 0.0625rem;
    }

    .top_decoration10_reverse {
      transform: rotateY(180deg);
    }

    .title-box {
      display: flex;
      justify-content: center;

      .top_decoration8 {
        width: 2.5rem;
        height: 0.625rem;
      }

      .title {
        position: relative;
        width: 6.25rem;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;

        .title-text {
          font-size: 0.3rem;
          position: absolute;
          bottom: 0;
          left: 50%;
          color: #fff;
          transform: translate(-50%);
        }

        .top_decoration6 {
          width: 3.125rem;
          height: 0.1rem;
        }

        .title-bototm {
          position: absolute;
          bottom: -0.375rem;
          left: 50%;
          transform: translate(-50%);
        }
      }

      // end title
    }

    // end title-box
  }

  .top_button {
    margin-bottom: 0;
  }
  .top_box_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

export const TimeBox = styled.div`
  position: absolute;
  right: 0.375rem;
  top: 0.5rem;
  text-align: right;
  color: #fff;
  h3{
    font-size: 0.225rem;
    color: ${TitleColor};
  }
`;

export const TopCenter = styled.div`
  /* Copy the styles from CenterBottom here */
  display: flex;
  flex-wrap: wrap; /* Added to wrap items to the next row */
  margin-top: 0.265rem;
  width: 100%; /* Scale down width to 80% */

  .detail-list {
    display: flex;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    width: 100%;
    /* Remove &-item block styles */

    .detail-list-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 0.725rem; /* Scale down height to 80% */
      padding: 0 0.1rem; /* Scale down padding to 80% */
      width: 25.6%; /* Scale down width to 80% */
      border-radius: 4px; /* Scale down border-radius to 80% */
      border: 0.8px solid #343f4b; /* Scale down border thickness to 80% */
      background-color: rgba(19, 25, 47, 0.8);
      margin: 0.2rem 0.4%; /* Scale down margin to 80% to create gaps between items */

      img {
        width: 0.5rem; /* Scale down image width to 80% */
        height: 0.5rem; /* Scale down image height to 80% */
      }

      .detail-item-text {
        margin-left: 0.1rem; /* Scale down margin to 80% */

        h3 {
          color: #bcdcff;
          font-size: 12.8px; /* Scale down font size to 80% */
          margin-bottom: 0.1rem; /* Scale down margin to 80% */
        }

        span {
          font-weight: 400; /* Font weight does not scale, so set to default value */
          font-size: 0.2rem; /* Scale down font size to 80% */
          font-weight: bolder; /* Font weight does not scale, so set to default value */
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        .unit {
          font-size: 0.16rem; /* Scale down font size to 80% */
          margin-left: 0.1rem; /* Scale down margin to 80% */
        }
      }
    }
  }
`;
