import { createContext } from "react";

// tagsSearched: {#href: ['postid1', 'postid2']}

interface ContextInterface {
    tags: string[];
    tagsSearched: {};
    setTags: (newState: string[] | 
        ((prevState: string[]) 
            => string[])) 
    => void;
}

const FilteredTagsContext = createContext<ContextInterface | null>(null)
export default FilteredTagsContext