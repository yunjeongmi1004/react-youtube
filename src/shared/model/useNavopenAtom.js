import { atom, useRecoilState } from "recoil"

const useNavopenAtom = () => {
    const navopenAtom = atom({
        "key" : 'navopenAtom',
        "default" : null,
    })

    const [isNavOpen, setIsNavOpen] = useRecoilState(navopenAtom)

    const toggleIsNavOpen = () => {
        setIsNavOpen(isNavOpen => !isNavOpen)
    }

    return [isNavOpen, toggleIsNavOpen]
}

export default useNavopenAtom