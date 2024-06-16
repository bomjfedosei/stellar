import { GET_CURRENT_INGRIDIENT, REMOVE_CURRENT_INGRIDIENT } from "../actions/current-ingridient"
import { currentIngridientReducer } from "./current-ingridient"
import { initialState } from "./current-ingridient"


describe("current-ingridient", () => {

    it('test initial state', () => {
        expect(currentIngridientReducer(undefined, {})).toEqual({
            currentIngridient: null,
        })
    })

    it('test add current ingridient', () => {
        const main = { type: 'main' }
        const action = { type: GET_CURRENT_INGRIDIENT, current: main }
        expect(currentIngridientReducer(initialState, action)).toEqual({
            currentIngridient: main,
        })
    })

    it('test remove current ingridient', () => {
        const main = { type: 'main' }
        const action = { type: REMOVE_CURRENT_INGRIDIENT }
        expect(currentIngridientReducer(initialState, action)).toEqual({
            currentIngridient: null,
        })
    })
})