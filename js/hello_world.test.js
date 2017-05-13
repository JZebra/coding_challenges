import { hello } from './hello_world'

describe('hello', () => {
    it('returns "hello world"', () => {
        expect(hello()).toBe('hello world');
    })
})
