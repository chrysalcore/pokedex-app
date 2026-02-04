import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Pokemon from "../../components/list/Pokemon";

describe('Pokemon Component Testing', () => {
    test('Props Test', () => {
        const props = {
            name: 'Charmander', 
            url: 'https://2/'
        }

        const component = render(<Pokemon {...props} />).container
        
        const id = component.querySelector('.pokemon__number')
        expect(id).toHaveTextContent(props.url.split('/')[2])

        const name = component.querySelector('.pokemon__name')
        expect(name).toHaveTextContent(props.name)

        const img = component.querySelector('.pokemon__img')
        expect(img).toHaveAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.textContent}.png`)
    })
})