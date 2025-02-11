import { atom, useRecoilState } from "recoil"

const useNavopenAtom = () => {
    const navopenAtom = atom({
        "key" : "navopenAtom",
        "default" : ""
    })

    const [isNavOpen, setIsNavOpen] = useRecoilState(navopenAtom)

    return [isNavOpen, setIsNavOpen]
}

export default useNavopenAtom