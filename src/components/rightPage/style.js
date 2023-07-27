import styled from 'styled-components';

export const RightPage = styled.div`
  width: 6.25rem;
  height: auto;
  padding: 0px 0.2rem;
`;

export const RightTopBox = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  margin-bottom: 0.25rem;
  .right-top {
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.1875rem;
    }
    .earth-gif {
      width: 2.75rem;
      height: auto;
      border-radius: 50%;
      overflow: hidden;
    }
  }
`;

export const RightCenterBox = styled.div`
  position: relative;
  height: 1.725rem;
  width: 100%;
`;

//
// export const RightBottomBox = styled.div`
//   position: relative;
//   height: 3rem;
//   width: 100%;
//   margin-bottom: 3rem;
//   display: flex; /* 设置为flex布局 */
//   justify-content: space-between; /* 子元素左右布局平铺 */
//
//   .right-bottom-borderBox13 {
//     padding: 0.25rem 0.1875rem 0.1875rem;
//     flex: 1; /* 子元素自动根据剩余空间布局 */
//     .right-bottom {
//       width: 100%;
//       height: 100%;
//       border-radius: 10px;
//       background-color: rgba(19, 25, 47, 0.6);
//       .feedback-box {
//         margin-top: 0.1rem;
//         display: flex;
//         align-items: center;
//         justify-content: space-around;
//         &-item {
//           display: flex;
//           align-items: center;
//           flex-direction: column;
//           height: 1.75rem;
//           .dis-text {
//             font-weight: bold;
//             margin-top: 0.0625rem;
//             color: #b2cfee;
//             font-size: 0.2rem;
//             background: linear-gradient(to bottom, #fff, #6176F4);
//             color: transparent;
//             -webkit-background-clip: text;
//             background-clip: text;
//           }
//         }
//       }
//       .offline-portal-box {
//         margin-top: 0.125rem;
//       }
//     }
//   }
// `;
export const RightBottomBox = styled.div`
  position: relative;
  height: 2.55rem;
  width: 100%;
  margin-bottom: 3rem;
  display: flex; /* 设置为flex布局 */
  justify-content: space-between; /* 子元素左右布局平铺 */

  .right-bottom-borderBox13 {
    padding: 0.25rem 0.1875rem 0.1875rem;

    .right-bottom {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(19, 25, 47, 0.6);

      /* 使用flex布局，让offline-portal-box和feedback-box并排显示 */
      display: flex;
      align-items: center;
      justify-content: space-between;

      .feedback-box {
        //margin-top: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &-item {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 1.75rem;
          .dis-text {
            font-weight: bold;
            margin-top: 0.0625rem;
            color: #b2cfee;
            font-size: 0.2rem;
            background: linear-gradient(to bottom, #fff, #6176F4);
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
      }
      .offline-portal-box {
        //margin-top: 0.125rem;
      }
    }
  }
`;
