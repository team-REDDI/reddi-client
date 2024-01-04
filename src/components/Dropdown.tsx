import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { ReactComponent as DownArrow } from "../assets/svgs/dropdownDownArrow.svg";
import { ReactComponent as UpArrow } from "../assets/svgs/dropdownUpArrow.svg";
type DropdownProps = {
  title: string;
  items: Array<{ name: string; value: string }>;
  onSelect: (item: { name: string; value: string }) => void;
};

const Dropdown: React.FC<DropdownProps & { className?: string }> = ({
  title,
  items,
  onSelect,
  className,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <DropdownContainer className={className}>
      <SelectBox
        className={toggle ? "open" : ""}
        onClick={() => setToggle(!toggle)}
      >
        {title}
        {toggle ? <UpArrow /> : <DownArrow />}
      </SelectBox>
      {toggle && (
        <SelectDropdown>
          {items.map((item, index) => (
            <SelectItem
              key={index}
              onClick={() => {
                onSelect(item);
                setToggle(false);
              }}
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectDropdown>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 2rem;
`;

const SelectBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #000;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  gap: 0.62rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
`;

const SelectDropdown = styled.div`
  position: absolute;
  z-index: 2;
`;

const SelectItem = styled.div`
  cursor: pointer;
`;

export default Dropdown;
