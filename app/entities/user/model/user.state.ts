import { atom } from "jotai";
import  User  from "./user.model";

  const profileAtom = atom<UserState>({
    profile: {
        id: 1,
        name: 'Nikita'
    },
    isLoading: false,
    error: null
})

export interface UserState {
    profile: User | null;
    isLoading: boolean;
    error: string | null;
}


export default profileAtom