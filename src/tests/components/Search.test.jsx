import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import Search from "../../components/header/Search";

describe('Search Component Testing', () => {
    let component
    beforeEach(() => {
        component = render(<Search {...props} />).container.firstElementChild
    })

    const handleType = vitest.fn()

    const props = {
        onType: handleType,
        ref: {
            current: null
        }
    }

    test('Typing Test', () => {
        fireEvent.change(component, {target: {value: 'b'}})
        expect(handleType).toHaveBeenCalled()
    })

    test('Reference Test', () => {
        expect(props.ref.current).toEqual(component)
    })
})