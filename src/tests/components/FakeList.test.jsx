import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import FakeList from "../../components/fake/FakeList";

describe('FakeList Component Testing', () => {
    test('Render Test', () => {        
        const component = render(<FakeList />).container.firstElementChild
        
        expect(component).toMatchSnapshot()
        expect(component.children).toHaveLength(20)
    })
})