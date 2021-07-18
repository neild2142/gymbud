import AsyncStorage from "@react-native-async-storage/async-storage";

function useStorage<T>(storageKey: string) {
  const retrieveFromStorage = async () =>
    await AsyncStorage.getItem(storageKey);

  const setStorage = async (blob: T) =>
    await AsyncStorage.setItem(storageKey, JSON.stringify(blob));

  const resetStorage = async () => await AsyncStorage.removeItem(storageKey);

  return {
    retrieveFromStorage,
    setStorage,
    resetStorage,
  };
}

export default useStorage;
