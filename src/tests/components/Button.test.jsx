import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import Button from '../../components/header/Button'

describe('Button Component Testing', () => {
    test('Render Test Without Enabled Prop', () => { 
        const component = render(<Button />).container.firstElementChild
        expect(component).toHaveClass('inactive')
    })

    test('Render Test With Props', () => { 
        const handleClick = vitest.fn()

        const props = {
            onClick: handleClick,
            enabled: true
        }

        const component = render(<Button {...props} >Delete</Button>).container.firstElementChild

        expect(component).not.toHaveClass('inactive')
        expect(component).toHaveTextContent('Delete')

        fireEvent.click(component)
        expect(handleClick).toHaveBeenCalled()
    })
})