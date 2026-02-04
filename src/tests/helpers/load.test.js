import { describe, expect, test } from "vitest";
import load from '../../helpers/load'

describe.skip('Load Helper Testing', () => {
    test('Success Return Test Without Search', async () => {
        const action = await load('https://pokeapi.co/api/v2/pokemon/', '') 

        expect(action.type).toBe('SUCCESS')
        expect(action.payload.results.length > 0).toBe(true)
    })

    test('Success Return Test With Search', async () => {
        const action = await load('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000', 'evee') 

        expect(action.type).toBe('SUCCESS')
        expect(action.payload.results.length > 0).toBe(true)
    })

    test('Error Return Test', async () => {
        const action = await load('https://pokeapi.co/api/v2/pokem/', '') 

        expect(action.type).toBe('ERROR')
    })
})