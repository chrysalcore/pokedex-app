import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ErrorRender from "../../components/fake/Error";

describe('ErrorRender Component Testing', () => {
    test('Render Test', () => {        
        const component = render(<ErrorRender />).container.firstElementChild
        expect(component).toMatchSnapshot()
    })
})