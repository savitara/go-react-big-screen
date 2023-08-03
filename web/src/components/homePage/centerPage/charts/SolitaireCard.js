import React, { PureComponent } from "react";
import { SolitaireCardDiv } from "../style";

class SolitaireCard extends PureComponent {
    render() {
        const { solitaireCardData } = this.props;
        const limit = solitaireCardData.limit;
        const list = solitaireCardData.list;
        const itemsPerRow = limit;

        return (
            <SolitaireCardDiv>
                {/* 遍历列表，根据 itemsPerRow 创建行 */}
                {Array.from({ length: Math.ceil(list.length / itemsPerRow) }).map((_, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', width: '100%', marginBottom: '0.2rem' }}>
                        {/* 遍历每行中的元素，并创建 div */}
                        {list.slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow).map((item, idx) => (
                            <div key={idx} style={{ flex: `1 0 calc(100% / ${itemsPerRow})` }}>
                                {/* 标题 */}
                                <h3 className={"title"}>{item.title}</h3>
                                {/* 描述 */}
                                <p className={'content'}>{item.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </SolitaireCardDiv>
        );
    }
}

export default SolitaireCard;
