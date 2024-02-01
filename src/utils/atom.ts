import {atom, selector} from "recoil";

export const filteredMarketing = atom<Set<string>>({
    key: 'filteredMarketing',
    default: new Set(),
  });
  
  export const filteredBrand = atom<Set<string>>({
    key: 'filteredBrand',
    default: new Set(),
  });

  export const accessTokenState = atom({
    key: 'accessTokenState',
    default: ''
  });
  
  export const isLoginState = atom({
    key: "isLoginState",
    default: false,
  });
  
  export const userDataState = atom({
    key: 'userDataState',
    default: {
      userId: 0,
      name: "name",
      email: "email",
      profileImageUrl: "url",
    },
  });

 
  export const bookmarkedMarketingIdsState = atom<number[]>({
    key: 'bookmarkedMarketingIdsState', 
    default: [], 
  });  
  export const bookmarkedBrandIdsState = atom<number[]>({
    key: 'bookmarkedBrandIdsState', 
    default: [], 
  });