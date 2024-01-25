interface BrandTag {
    brandTagType: string;
    tag: string;
}
  
interface BrandDetailInfo {
    brandTags: BrandTag[];
}
  
export const findIndustryTag = (brandDetailInfo: BrandDetailInfo): string | undefined => {
    const industryTag = brandDetailInfo.brandTags.find(tag => tag.brandTagType === "산업군")?.tag;
    return industryTag;
};

interface MarketingTag {
  postTagType: string;
  tag: string;
}

export const findTagByType = (tags: MarketingTag[], postTagType: string): string | undefined => {
  const industyTag = tags.find(tag => tag.postTagType === postTagType)?.tag;
  return industyTag;
};