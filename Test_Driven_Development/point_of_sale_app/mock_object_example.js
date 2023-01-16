class MockUserDatabase {
    constructor() {
        this.mockInfo = {
            connect: {
                wasCalled: false
            },
            getUser: {
                wasCalled: false,
                arg1: undefined
            }
        }
    }

    getMockInfo() {
        return this.mockInfo;
    }

    connect() {
        this.mockInfo.connect.wasCalled = true;

        return 1;
    }

    getUser(id) {
        this.mockInfo.getUser.wasCalled = true;
        this.mockInfo.getUser.arg1 = id;

        const mockUser = {
            id: id,
            firstName: "Sandeep",
            lastName: "Seeram",
            description: "Technology Blogger",
            url: "https://www.sandeepseeram.com"
        };
        return mockUser;
    }
}
