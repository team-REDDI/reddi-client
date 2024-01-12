import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { colors } from "../styles/colors";
import CheckboxGroup from "./CheckBox";
type FilterProps = {
  dropdownItems: {
    industry?: Array<{ name: string; value: string }>;
    marketing?: Array<{ name: string; value: string }>;
    target?: Array<{ name: string; value: string }>;
    brandcolor?: Array<{ name: string; value: string }>;
    atmosphere?: Array<{ name: string; value: string }>;
  };
};

interface Item {
  name: string;
  value: string;
}

const Filter: React.FC<FilterProps> = ({ dropdownItems }) => {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(),
  );
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelect = (item: Item, isChecked: boolean) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);
      if (isChecked) {
        newFilters.add(item.value);
      } else {
        newFilters.delete(item.value);
      }
      return newFilters;
    });
  };

  const toggleCategory = (category: string) => {
    setActiveCategory((prevActiveCategory) =>
      prevActiveCategory === category ? null : category,
    );
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = new Set(prevFilters);
      newFilters.delete(filter);
      return newFilters;
    });
  };

  return (
    <FilterContainer>
      <Text>분류</Text>
      <ButtonsContainer>
        {dropdownItems?.industry && (
          <CategoryButton
            onClick={() => toggleCategory("industry")}
            isActive={activeCategory === "industry"}
          >
            산업군
          </CategoryButton>
        )}
        {dropdownItems?.marketing && (
          <CategoryButton
            onClick={() => toggleCategory("marketing")}
            isActive={activeCategory === "marketing"}
          >
            마케팅
          </CategoryButton>
        )}
        {dropdownItems?.target && (
          <CategoryButton
            onClick={() => toggleCategory("target")}
            isActive={activeCategory === "target"}
          >
            타겟층
          </CategoryButton>
        )}
        {dropdownItems?.atmosphere && (
          <CategoryButton
            onClick={() => toggleCategory("atmosphere")}
            isActive={activeCategory === "atmosphere"}
          >
            분위기
          </CategoryButton>
        )}
        {dropdownItems?.brandcolor && (
          <CategoryButton
            onClick={() => toggleCategory("brandcolor")}
            isActive={activeCategory === "brandcolor"}
          >
            브랜드컬러
          </CategoryButton>
        )}
      </ButtonsContainer>

      {activeCategory === "industry" && (
        <CheckboxGroup
          items={dropdownItems.industry || []}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
        />
      )}
      {activeCategory === "marketing" && (
        <CheckboxGroup
          items={dropdownItems.marketing || []}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
        />
      )}
      {activeCategory === "target" && (
        <CheckboxGroup
          items={dropdownItems.target || []}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
        />
      )}
      {activeCategory === "atmosphere" && (
        <CheckboxGroup
          items={dropdownItems.atmosphere || []}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
        />
      )}
      {activeCategory === "brandcolor" && (
        <CheckboxGroup
          items={dropdownItems.brandcolor || []}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
        />
      )}

      <SelectedFilters>
        {Array.from(selectedFilters).map((filter: string, index: number) => (
          <FilterTag key={index}>
            {filter}
            <RemoveButton onClick={() => removeFilter(filter)}>X</RemoveButton>
          </FilterTag>
        ))}
      </SelectedFilters>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10.69rem;
  padding-right: 10.69rem;
  padding-top: 6.25rem;
  flex-direction: column;
  gap: 1.5rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

const SelectedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 2.5rem;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  background: ${colors.light_red};
  border-bottom: 1px solid ${colors.red};
  padding-left: 1.75rem;
`;

const FilterTag = styled.div`
  margin-right: 0.5rem;
  display: flex;
  height: 2.035rem;
  padding: 0.25rem 1rem;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${colors.red};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
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

const ButtonsContainer = styled.div`
  display: flex;
`;

const CategoryButton = styled.button<{ isActive: boolean }>`
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
  margin-right: 0.97rem;
  background-color: ${(props) => (props.isActive ? "#000" : "transparent")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
`;

export default Filter;
