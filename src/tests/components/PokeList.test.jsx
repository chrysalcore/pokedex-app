import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import PokeList from '../../components/list/PokeList'
import Pokemon from "../../components/list/Pokemon";

describe('PokeList Component Testing', () => {
    test('Render Test', () => {        
        const arr = [
            {
                name: 'Bulbasaur',
                url: 'https://1/'
            },
            {
                name: 'Charmander',
                url: 'https://4/'
            }
        ]

        const parent = render(<PokeList data={arr} />).container
        const children = parent.querySelectorAll('.pokemon')

        expect(children).toHaveLength(arr.length)
        expect(children[0]).toHaveTextContent(arr[0].name)
    })
})