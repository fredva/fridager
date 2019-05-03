import { isWorkday, dayOfWeek } from "./datefunctions"

describe('test isWorkDay', () => {
    test('returns true for workdays (1-5)', () => {
        expect(isWorkday(1)).toBe(true)
        expect(isWorkday(2)).toBe(true)
        expect(isWorkday(3)).toBe(true)
        expect(isWorkday(4)).toBe(true)
        expect(isWorkday(5)).toBe(true)
    })
    
    test('returns false for weekends (6,7)', () => {
        expect(isWorkday(6)).toBe(false)
        expect(isWorkday(7)).toBe(false)
    })
    
    test('return false for everything else', () => {
        expect(isWorkday(0)).toBe(false)
        expect(isWorkday(8)).toBe(false)
    })
})

describe('test dayOfWeek', () => {
    test('a few dates', () => {
        expect(dayOfWeek(2019, 4, 1)).toBe(1)
        expect(dayOfWeek(2019, 4, 2)).toBe(2)
        expect(dayOfWeek(2019, 4, 3)).toBe(3)
        expect(dayOfWeek(2019, 4, 4)).toBe(4)
        expect(dayOfWeek(2019, 4, 5)).toBe(5)
        expect(dayOfWeek(2019, 4, 6)).toBe(6)
        expect(dayOfWeek(2019, 4, 7)).toBe(7)

        expect(dayOfWeek(2019, 5, 1)).toBe(3)
        expect(dayOfWeek(2022, 5, 1)).toBe(7)
    })
})