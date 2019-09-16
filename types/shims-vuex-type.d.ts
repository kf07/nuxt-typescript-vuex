import 'vuex'
import * as Counter from '../store/counter/types'

declare module 'vuex' {
  type Getters<S, G, RS = {}, RG = {}> = {
    [K in keyof G]: (state: S, getters: G, rootState: RS, rootGetters: RG) => G[K]
  }

  type Mutations<S, M> = { [K in keyof M]: (state: S, payload: M[K]) => void }

  type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
  type ExDispatch<A> = <T extends keyof A>(type: T, payload?: A[T]) => any

  type Context<S, A, G, M, RS, RG> = {
    commit: ExCommit<M>
    dispatch: ExDispatch<A>
    state: S
    getters: G
    rootState: RS
    rootGetters: RG
  }
  type RootGetters = Counter.RG
  type Actions<S, A, G = {}, M = {}, RS = {}, RG = {}> = {
    [K in keyof A]: (ctx: Context<S, A, G, M, RS, RG>, payload: A[K]) => any
  }
  interface ExStore extends Store<{}> {
   getters: RootGetters
  }
}
