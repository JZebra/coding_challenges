import { hello } from './hello_world'

describe('hello', () => {
    it('returns "hello world"', () => {
        expect(hello()).to.equal('hello world')
        expect(false).to.be(true)
    })
})
