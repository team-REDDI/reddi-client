import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

import { ReactComponent as DownArrow } from "../assets/svgs/dropdownDownArrow.svg";
import { ReactComponent as UpArrow } from "../assets/svgs/dropdownUpArrow.svg";
type DropdownProps = {
  title: string;
  items: Array<{ name: string; value: string }>;
  onSelect: (item: { name: string; value: string }, isChecked: boolean) => void;
};

const Dropdown: React.FC<DropdownProps & { className?: string }> = ({
  title,
  items,
  onSelect,
  className,
}) => {
  const [toggle, setToggle] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleCheckboxChange = (
    item: { name: string; value: string },
    isChecked: boolean,
  ) => {
    setCheckedItems((prev: { [key: string]: boolean }) => ({
      ...prev,
      [item.value]: isChecked,
    }));
    onSelect(item, isChecked);
  };

  return (
    <DropdownContainer className={className}>
      <SelectWrapper>
        <SelectBox
          className={toggle ? "open" : ""}
          onClick={() => setToggle(!toggle)}
        >
          {title}
          {/* {toggle ? <UpArrow /> : <DownArrow />} */}
        </SelectBox>
        {toggle && (
          <SelectDropdown>
            {items.map((item, index) => (
              <SelectItem key={index}>
                <StyledLabel>
                  <StyledCheckBox
                    type="checkbox"
                    checked={!!checkedItems[item.value]}
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                    id={`checkbox-${item.value}`}
                  />

                  <div></div>
                  <label htmlFor={`checkbox-${item.value}`}>{item.name}</label>
                </StyledLabel>
              </SelectItem>
            ))}
          </SelectDropdown>
        )}
      </SelectWrapper>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: inline-block;
`;
const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectBox = styled.div`
  width: fit-content;
  cursor: pointer;
  display: flex;
  padding: 0.19381rem 0.77519rem;
  height: 2.035rem;
  justify-content: center;
  align-items: center;
  border: 0.388px solid #000;
  gap: 0.62rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const StyledCheckBox = styled.input`
  display: none;
  & + div {
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 50%;
    border: 0.3px solid #000;
    fill: #fff;

    stroke-width: 0.3px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 1.25rem;
    position: relative;
  }
  //체크되면
  &:checked + div {
    background-color: #000;

    &::after {
      content: "✓";
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
`;
const SelectDropdown = styled.div`
  width: 64rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 2;
  background: #f8f8f8;
  border: 1px solid ${colors.grey_100};
  width: max-content;
  font-size: 1rem;
  font-weight: 300;
  line-height: 130%;
  padding: 1.9375rem 2.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const SelectItem = styled.div`
  cursor: pointer;
`;

export default Dropdown;
