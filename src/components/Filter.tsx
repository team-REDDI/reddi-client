import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

type FilterProps = {
  dropdownItems: {
    industry?: Array<{ name: string; value: string }>;
    marketing?: Array<{ name: string; value: string }>;
    target?: Array<{ name: string; value: string }>;
    brandcolor?: Array<{ name: string; value: string }>;
    atmosphere?: Array<{ name: string; value: string }>;
    sort?: Array<{ name: string; value: string }>;
  };
};

const Filter: React.FC<FilterProps> = ({ dropdownItems }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");

  const handleSelectSort = (item: { name: string; value: string }) => {
    setSelectedSort(item.name); //인기순, 추천순 값 변경
  };

  const handleSelect = (item: { name: string; value: string }) => {
    if (!selectedFilters.includes(item.value)) {
      setSelectedFilters([...selectedFilters, item.value]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const handleReset = () => {
    setSelectedFilters([]);
    // setSelectedSort(""); 인기순 추천순도 바꿀지?
  };

  return (
    <FilterContainer>
      <Text>분류</Text>
      <DropdownsContainer>
        {dropdownItems?.industry && (
          <Dropdown
            title="산업군"
            items={dropdownItems.industry}
            onSelect={handleSelect}
          />
        )}
        {dropdownItems?.marketing && (
          <Dropdown
            title="마케팅"
            items={dropdownItems.marketing}
            onSelect={handleSelect}
          />
        )}
        {dropdownItems?.target && (
          <Dropdown
            title="타겟층"
            items={dropdownItems.target}
            onSelect={handleSelect}
          />
        )}
        {dropdownItems?.sort && (
          <DropdownSort
            title={selectedSort || "인기순"}
            items={dropdownItems.sort}
            onSelect={handleSelectSort}
          />
        )}
      </DropdownsContainer>

      <SelectedFilters>
        {selectedFilters.map((filter, index) => (
          <FilterTag key={index}>
            {filter}
            <RemoveButton onClick={() => removeFilter(filter)}>X</RemoveButton>
          </FilterTag>
        ))}
        <ResetButton onClick={handleReset}>초기화</ResetButton>
      </SelectedFilters>
    </FilterContainer>
  );
};

const Text = styled.div`
  margin-top: 4.81rem;
  margin-bottom: 1.63rem;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
`;
const FilterContainer = styled.div``;

const DropdownsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SelectedFilters = styled.div`
  display: flex;
  width: 82.5rem;
  height: 5.125rem;
  border-top: 1px solid #000;
  background: var(--gray100, #f6f6f6);
  padding-left: 1.75rem;
`;

const FilterTag = styled.div`
  margin-right: 0.62rem;
  display: flex;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  color: white;
  background-color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 800;
  margin: 1.25rem 0rem;
  margin-right: 0.63rem;
`;
const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
`;

const ResetButton = styled.button`
  background-color: transparent;
  color: #6b6d71;
  border: none;
  padding: 0rem 1.37rem;
  margin-left: auto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  /* &:hover {
    background-color: #c0c0c0;
  } */
`;
//추천순, 인기순은 제일 오른쪽에
const DropdownSort = styled(Dropdown)`
  margin-left: auto;
`;

export default Filter;
