import {atom} from "recoil";


export const filteredMarketing = atom<Set<string>>({
    key: 'filteredMarketing',
    default: new Set(),
  });
  
  export const filteredBrand = atom<Set<string>>({
    key: 'filteredBrand',
    default: new Set(),
  });