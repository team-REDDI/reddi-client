import styled from "styled-components";

interface Item {
  name: string;
  value: string;
}

interface CheckboxGroupProps {
  items: Item[];
  selectedFilters: Set<string>;
  onSelect: (item: Item, isChecked: boolean) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  items,
  selectedFilters,
  onSelect,
}) => {
  return (
    <CheckboxContainer>
      {items.map((item) => (
        <StyledLabel key={item.value}>
          <CheckBoxInput
            type="checkbox"
            checked={selectedFilters.has(item.value)}
            onChange={(e) => onSelect(item, e.target.checked)}
            id={`checkbox-${item.value}`}
          />
          <CustomCheckbox checked={selectedFilters.has(item.value)} />
          {item.name}
        </StyledLabel>
      ))}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); */
  gap: 0.75rem 5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  padding: 1.9375rem 2.375rem;
  background: #f8f8f8;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  color: #000;
`;

const CheckBoxInput = styled.input`
  display: none;

  &:checked + div {
    background-color: #000;
    &:after {
      visibility: visible;
    }
  }
`;

const CustomCheckbox = styled.div<{ checked: boolean }>`
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  margin-right: 1.25rem;
  position: relative;
  border: 0.3px solid #000;
  &:after {
    content: "✔";
    font-size: 1rem;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export default CheckboxGroup;
