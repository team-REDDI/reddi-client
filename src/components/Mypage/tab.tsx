import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BookmarkedContent } from "./bookmarkedContents";

const TabMenu = styled.ul`
  width: 64rem;
  justify-content: center;
  color: ${colors.black_CTA};
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 6.25rem;
  margin-top: 3.12rem;
  cursor: pointer;
  .submenu {
    display: flex;
    white-space: nowrap;
    margin-right: 1.76rem;
    text-overflow: ellipsis;
    padding: 0.1rem;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    color: ${colors.red};
    border-bottom: 2px solid ${colors.red};
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const Tab = () => {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "북마크(56)", content: <BookmarkedContent /> },
    {
      name: "REDDIAI로 생성한 브랜드 (12)",
      content: "여기에 생성된 브랜드 컨텐츠들",
    },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, index) => (
            <li
              key={index} // It's important to have a unique key for each child in a list
              className={index === currentTab ? "submenu focused" : "submenu"}
              onClick={() => selectMenuHandler(index)}
            >
              {el.name}
            </li>
          ))}
        </TabMenu>
        <Desc>
          {/* Render the component associated with the current tab */}
          {menuArr[currentTab].content}
        </Desc>
      </div>
    </>
  );
};
export default Tab;
