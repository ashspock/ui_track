// set of all related test cases -> test suite
// it -> test case which tests a functionality

describe('Testing total Travel fare', ()=>{    
    it('Test Case 1: returning value',() =>{
        let res = totalTravelFare(100, 2);
        expect(res).toBeDefined()
    })

    it('Test Case 2: Checking expected',() =>{
        let res = totalTravelFare(100, 2);
        let expectedOP = 102;
        expect(res).toEqual(expectedOP);
    })
})
