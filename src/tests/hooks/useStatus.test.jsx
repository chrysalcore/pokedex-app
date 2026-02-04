import { act, renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useStatus from "../../hooks/useStatus";

describe('UseStatus Hook Testing', () => {
    test('Default Return Test', () => {
        const { result } = renderHook(() => useStatus())
        const [ status ] = result.current

        expect(status).toEqual({ loading: true, data: null, error: null})
    })

    test('SUCCESS Dispatch Return Test', async () => {
        const { result } = renderHook(() => useStatus())
        const [, dispatch] = result.current

        dispatch({ type: 'SUCCESS', payload: {} })

        await waitFor(() => {
            const [ status ] = result.current
            expect(status).toEqual({ loading: false, data: {}, error: null})
        })
    })

    test('LOADING Dispatch Return Test', async () => {
        const { result } = renderHook(() => useStatus())
        const [, dispatch] = result.current

        act(() => {
            dispatch({ type: 'SUCCESS', payload: {} })
        })

        let [ status ] = result.current
        expect(status).toEqual({ loading: false, data: {}, error: null})

        act(() => {
            dispatch({ type: 'LOADING'})
        })
        
        let [ status2 ] = result.current
        expect(status2).toEqual({ loading: true, data: null, error: null})
    })

    test('SUCCESS Dispatch Return Test', async () => {
        const { result } = renderHook(() => useStatus())
        const [, dispatch] = result.current

        act(() => {
            dispatch({ type: 'ERROR', payload: {} })
        })

        let [ status ] = result.current
        expect(status).toEqual({ loading: false, data: null, error: {}})
    })
})