import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Filter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");
  // 각 카테고리별 드롭다운 dummy data
  const dropdownItems = {
    industry: [
      { name: "뷰티", value: "뷰티" },
      { name: "금융", value: "금융" },
      { name: "F&B", value: "F&B" },
      { name: "IT", value: "IT" },
    ],
    marketing: [
      { name: "팝업스토어", value: "팝업스토어" },
      { name: "콘텐츠 마케팅", value: "콘텐츠 마케팅" },
    ],
    target: [
      { name: "10대", value: "10대" },
      { name: "20대", value: "20대" },
      { name: "30대", value: "30대" },
    ],
    sort: [
      { name: "인기순", value: "인기순" },
      { name: "추천순", value: "추천순" },
    ],
  };

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

  return (
    <FilterContainer>
      <Text>분류</Text>
      <DropdownsContainer>
        <Dropdown
          title="산업군"
          items={dropdownItems.industry}
          onSelect={handleSelect}
        />
        <Dropdown
          title="마케팅"
          items={dropdownItems.marketing}
          onSelect={handleSelect}
        />
        <Dropdown
          title="타겟층"
          items={dropdownItems.target}
          onSelect={handleSelect}
        />
        <DropdownSort
          title={selectedSort || "인기순"}
          items={dropdownItems.sort}
          onSelect={handleSelectSort}
        />
      </DropdownsContainer>

      <SelectedFilters>
        {selectedFilters.map((filter, index) => (
          <FilterTag key={index}>
            {filter}
            <RemoveButton onClick={() => removeFilter(filter)}>X</RemoveButton>
          </FilterTag>
        ))}
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
//추천순, 인기순은 제일 오른쪽에
const DropdownSort = styled(Dropdown)`
  margin-left: auto;
`;

export default Filter;
