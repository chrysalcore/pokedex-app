import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import PokeHeader from "../../components/header/PokeHeader";
import Search from "../../components/header/Search";

describe('Search Component Testing', () => {
    const handleType = vitest.fn()

    const props = {
        onType: handleType,
        ref: {
            current: null
        }
    }

    test('Render Test Without Children', () => {
        const component = render(<PokeHeader />).container.firstElementChild
        expect(component).toMatchSnapshot()
    })

    test('Render Test With Children', () => {
        const parent = render(<PokeHeader><Search {...props} /></PokeHeader>).container.firstElementChild
        const child = parent.querySelector('.searchbox')

        expect(props.ref.current).toEqual(child)
    })
})