import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useConnect from '../../hooks/useConnect'

describe('UseConnect Hook Testing', () => {
    test('Default Return Test', () => {
        const { result } = renderHook(() => useConnect())
        
        waitFor(() => {
            const [
                data,
                loading,
                error,
                handleNext,
                handlePrev,
                handleType
            ] = result.current

            expect(data).toBeNull()
            expect(error).toBeNull()
            expect(loading).toBeTruthy()
            expect(typeof handleNext).toBe('func')
            expect(typeof handlePrev).toBe('func')
            expect(typeof handleType).toBe('func')
        })
    })
})