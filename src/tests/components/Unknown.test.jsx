import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Unknown from "../../components/fake/Unknown";

describe('Unknown Component Testing', () => {
    test('Render Test', () => {     
        const ref = {
            current: {
                value: 'abc'
            }
        }
        
        const component = render(<Unknown ref={ref} />).container.firstElementChild
        const img = component.querySelector('.unknown__img')
        expect(img).toHaveAttribute('src', `https://img.pokemondb.net/sprites/ruby-sapphire/normal/unown-${ref.current.value[0]}.png`)
    })
})