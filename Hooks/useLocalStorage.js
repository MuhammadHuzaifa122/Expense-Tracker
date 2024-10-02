export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState()
    const updateLocalStorage = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData))
        setData(newData)
    }
    return [data, updateLocalStorage]
}