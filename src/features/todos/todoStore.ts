import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const useTodoStore = create<Store>()((
  set, 
  //get
) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default useTodoStore;