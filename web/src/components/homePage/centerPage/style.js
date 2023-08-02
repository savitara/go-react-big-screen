import styled from 'styled-components';

export const CenterPage = styled.div`
  //margin-top: 0.05rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  //height: 6.5rem;
`;

// export const CenterBottom = styled.div`
//   display: flex;
//   //margin-bottom: 0.25rem;
//   width: 100%;
//   height: 3.25rem;
//   .detail-list {
//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//     align-content: space-between;
//     justify-content: space-around;
//     width: 100%;
//     &-item {
//       display: flex;
//       align-items: center;
//       position: relative;
//       height: 1.5625rem;
//       padding: 0 0.125rem;
//       width: 32%;
//       border-radius: 5px;
//       border: 1px solid #343f4b;
//       background-color: rgba(19, 25, 47, 0.8);
//
//     }
//   }
// `;
export const CenterBottomWidth = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
  margin-top: 0.095rem;
  width: 100%;
  height: 2.25rem;

  .detail-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    flex-grow: 1; /* 自动填充高度 */

    &-item {
      align-items: center;
      position: relative;
      height: 100%; /* 自动填充高度 */
      width: 100%; /* 自动填充宽度 */
      border-radius: 5px;
      border: 1px solid #343f4b;
      background-color: rgba(19, 25, 47, 0.8);

      img {
        width: 1.25rem;
        height: 1.25rem;
      }

      .detail-item-text {
        margin-left: 0.125rem;

        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 0.25rem;
        }

        span {
          font-weight: 500px;
          font-size: 0.25rem;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        .unit {
          font-size: 0.2rem;
          margin-left: 0.125rem;
        }

        .offline-portal-box {
          margin: 0.125rem 0 1rem;
          padding-bottom: 0.125rem
        }
      }
    }
  }
`;

export const TitleColor = '#bcdcff'

//  标题a
export const ModuleTitle = styled.h3`
  padding: 0.125rem 0.125rem;
  color: ${TitleColor};
  font-size: 0.2rem;
  font-weight: bold;

  .iconfont {
    font-size: 0.175rem;
    margin-right: 0.125rem;
    color: #89e5ff;
    font-weight: 400;
  }
`;


export const BottomBox = styled.div`

  .feedback-box {
    margin-top: 0.1rem;
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


`;

export const LeftDiv = styled.div`
  //align-self: flex-start; /* 将 LeftDiv 自身对齐方式设置为左侧对齐 */
  display: flex;

`;

export const RightDiv = styled.div`
  flex: 1;
  display: flex;

`;


export const DataBox = styled.div`
  width: 4.3rem;
  //height: 7.0825rem;
  display: flex;
  flex-wrap: wrap;
  //width: 96%;
  margin: 0 10px; /* 添加 DataBox 元素的左右边距 */

  .detail-list {
    display: flex;
    flex-wrap: wrap; /* 添加此行以实现自动换行 */
    align-items: center;
    align-content: space-between;
    justify-content: space-between; /* 将 justify-content 的值改为 space-between */
    width: 100%;
    margin: 0 5px; /* 调整 .detail-list 元素之间的左右边距为负值 */

    .detail-list-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 1.25rem; /* 调整方框的高度为 1.25rem */
      padding: 0 0.125rem;
      width: calc(50% - 10px); /* 调整方框的宽度为 50% 减去 10px，即两个项目之间的边距为 10px */
      border-radius: 5px;
      border: 1px solid #343f4b;
      background-color: rgba(19, 25, 47, 0.8);
      margin: 0.025rem 0.1%; /* 添加间隙以分隔项目 */

      img {
        width: 1.25rem;
        height: 1.25rem;
      }

      .detail-item-text {
        margin-left: 0.125rem;

        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 0.25rem;
        }

        span {
          font-weight: 500;
          font-size: 0.25rem;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        .unit {
          font-size: 0.2rem;
          margin-left: 0.125rem;
        }
      }
    }
  }
`;


export const BorderRadiusBox1 = styled.div`

  border-radius: 5px;
  border: 1px solid #343f4b;
  //background-color: rgba(19, 25, 47, 0.8);

`;

export const BorderRadiusBox2 = styled.div`

  border-radius: 5px;
  border: 1px solid #343f4b;
  background-color: rgba(19, 25, 47, 0.8);

`;


export const DataTableDiv = styled.div`

  .title {
    margin: 0.125rem;
    color: aliceblue;
    //display: flex;
    //justify-content: center;
    //align-items: center;
    font-size: 0.2rem;
  }

  //去除鼠标悬浮的背景色

  .ant-table-tbody > tr > td {

    background: rgba(255, 255, 255, 0) !important;
    color: white; /* 添加这行代码来修改字体颜色为白色 */
  }

  .ant-table-tbody > tr > td:hover {

    background: rgba(255, 255, 255, 0) !important;
    color: white; /* 添加这行代码来修改字体颜色为白色 */
  }

  //修改表头文字、背景颜色

  .ant-table-thead > tr > th {

    background-color: rgba(28, 41, 79, 0.5) !important;
    color: white; /* 添加这行代码来修改字体颜色为白色 */
    border-bottom: none;

  }

  /*单数行背景颜色为半透明*/

  .ant-table-tbody tr:nth-child(n) {
    //background-color: rgba(28, 41, 79, 0.5) !important;
    background-color: #060611 !important;

    color: white; /* 添加这行代码来修改字体颜色为白色 */
  }

  /*双数行背景颜色为半透明*/

  .ant-table-tbody tr:nth-child(2n) {
    background-color: #060611 !important;
    color: white; /* 添加这行代码来修改字体颜色为白色 */
  }

`;


export const DataCardDiv = styled.div`{
  display: flex;
  flex-direction: column; /* 设置主轴方向为竖直方向 */
  max-width: 930px; /* 根据计算结果设置最大宽度 */ //(width - (n-1) * spacing) / n

  .container {

    /* 可以添加其他样式，比如对齐、间距等 */

    display: flex;
    justify-content: center;
    align-items: center;
  }

`;


export const SolitaireCardDiv = styled.div`
  /* Copy the styles from CenterBottom here */
  display: flex;
  flex-wrap: wrap; /* Added to wrap items to the next row */
  //margin-top: 0.265rem;
  width: 5.5rem; /* Scale down width to 80% */
  height: 2.5rem;

`;

export const SolitaireChartDiv= styled.div`


`;
